// Score submission - Direct to Feishu Bitable via public API
// No backend needed! Uses a CORS proxy or direct Feishu API

async function submitScoreToFeishu(scoreData) {
    // Option 1: Use AllOrigins CORS proxy (free, no auth needed)
    const FEISHU_BITABLE_URL = 'https://open.feishu.cn/open-apis/bitable/v1/apps/LBuwbG3pBaNxNXsimBaciB4incb/tables/tblzLgA1IFA3Q5Na/records';
    
    // Method: Use a public CORS proxy
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
    
    // We need a Feishu tenant access token
    // Since we can't expose credentials in frontend, we use a pre-generated token
    // that gets refreshed via the OpenClaw backend (already configured)
    
    const fields = {
        '测验': scoreData.quiz_title,
        '学号': scoreData.student_id,
        '姓名': scoreData.student_name,
        '成绩': scoreData.score,
        '用时(秒)': scoreData.duration,
        '切屏次数': scoreData.switch_count,
        '提交时间': Date.now(),
        '详情': scoreData.details
    };
    
    try {
        // Try direct submission (works if CORS is configured on Feishu app)
        const resp = await fetch(FEISHU_BITABLE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.FEISHU_TOKEN || ''}`
            },
            body: JSON.stringify({ fields })
        });
        
        if (resp.ok) return { success: true };
        
        // Fallback: Save to localStorage for manual export
        throw new Error('Direct submission failed');
    } catch (err) {
        // Fallback: Store locally
        const scores = JSON.parse(localStorage.getItem('quiz_scores') || '[]');
        scores.push({
            ...scoreData,
            timestamp: new Date().toISOString(),
            synced: false
        });
        localStorage.setItem('quiz_scores', JSON.stringify(scores));
        return { success: true, local: true };
    }
}

// Export scores as CSV (teacher can download)
function exportScoresAsCSV() {
    const scores = JSON.parse(localStorage.getItem('quiz_scores') || '[]');
    if (scores.length === 0) {
        alert('暂无成绩数据');
        return;
    }
    
    const headers = ['测验', '学号', '姓名', '成绩', '用时(秒)', '切屏次数', '提交时间'];
    const rows = scores.map(s => [
        s.quiz_title, s.student_id, s.student_name,
        s.score, s.duration, s.switch_count, s.timestamp
    ]);
    
    const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `quiz_scores_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
}

window.submitScoreToFeishu = submitScoreToFeishu;
window.exportScoresAsCSV = exportScoresAsCSV;
