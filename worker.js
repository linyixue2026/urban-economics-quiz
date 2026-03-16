// Cloudflare Worker - Score Submission Proxy for Urban Economics Quiz
// Deploys to Cloudflare Workers (free tier: 100k requests/day)
// 
// Setup:
// 1. Install Wrangler CLI: npm install -g wrangler
// 2. Create worker: wrangler create quiz-worker
// 3. Copy this file to src/index.js
// 4. Set secrets:
//    - wrangler secret put FEISHU_APP_ID
//    - wrangler secret put FEISHU_APP_SECRET
// 5. Deploy: wrangler deploy

const FEISHU_BITABLE_APP = 'LBuwbG3pBaNxNXsimBaciB4incb';
const FEISHU_BITABLE_TABLE = 'tblzLgA1IFA3Q5Na';

// CORS headers
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
};

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS_HEADERS });
        }
        
        // Route: GET /api/feishu-token - Get Feishu tenant access token
        if (url.pathname === '/api/feishu-token' && request.method === 'GET') {
            try {
                const token = await getFeishuToken(env);
                return jsonResponse({ token });
            } catch (err) {
                return jsonResponse({ error: err.message }, 500);
            }
        }
        
        // Route: POST /api/submit - Submit quiz score
        if (url.pathname === '/api/submit' && request.method === 'POST') {
            try {
                const body = await request.json();
                const result = await submitScore(env, body);
                return jsonResponse(result);
            } catch (err) {
                return jsonResponse({ error: err.message }, 500);
            }
        }
        
        // Route: GET /api/scores - Get all scores (for teacher dashboard)
        if (url.pathname === '/api/scores' && request.method === 'GET') {
            try {
                const quizId = url.searchParams.get('quiz') || '';
                const scores = await getScores(env, quizId);
                return jsonResponse(scores);
            } catch (err) {
                return jsonResponse({ error: err.message }, 500);
            }
        }
        
        // Route: GET / - Serve the quiz HTML
        if (url.pathname === '/' || url.pathname.startsWith('/quiz')) {
            return new Response('Quiz Worker is running. Serve the HTML from a static site.', {
                headers: { 'Content-Type': 'text/plain', ...CORS_HEADERS }
            });
        }
        
        return jsonResponse({ error: 'Not found' }, 404);
    }
};

// Get Feishu tenant_access_token
async function getFeishuToken(env) {
    const resp = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            app_id: env.FEISHU_APP_ID,
            app_secret: env.FEISHU_APP_SECRET
        })
    });
    
    const data = await resp.json();
    if (data.code !== 0) throw new Error(`Feishu auth failed: ${data.msg}`);
    return data.tenant_access_token;
}

// Submit score to Feishu Bitable
async function submitScore(env, payload) {
    const token = await getFeishuToken(env);
    
    const fields = {
        '测验': payload.quiz_title || '',
        '学号': payload.student_id || '',
        '姓名': payload.student_name || '',
        '成绩': payload.score || 0,
        '用时(秒)': payload.duration || 0,
        '切屏次数': payload.switch_count || 0,
        '考试类型': payload.exam_type || '初试',
        '提交时间': Date.now(),
        '详情': payload.details || ''
    };
    
    const resp = await fetch(
        `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BITABLE_APP}/tables/${FEISHU_BITABLE_TABLE}/records`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ fields })
        }
    );
    
    const data = await resp.json();
    if (data.code !== 0) throw new Error(`Bitable write failed: ${data.msg}`);
    
    return { success: true, record_id: data.data?.record?.id };
}

// Get scores from Bitable
async function getScores(env, quizId) {
    const token = await getFeishuToken(env);
    
    let filter = '';
    if (quizId) {
        filter = `&filter=CurrentValue.[测验]="${quizId}"`;
    }
    
    const resp = await fetch(
        `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BITABLE_APP}/tables/${FEISHU_BITABLE_TABLE}/records?page_size=100${filter}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    
    const data = await resp.json();
    if (data.code !== 0) throw new Error(`Bitable read failed: ${data.msg}`);
    
    return {
        records: (data.data?.items || []).map(item => ({
            id: item.record_id,
            ...item.fields
        }))
    };
}

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS
        }
    });
}
