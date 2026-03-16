
export async function onRequestPost({ request, env }) {
    try {
        const payload = await request.json();

        console.log('🚀 Cloudflare Function: Forwarding to Google...');

        // Forward to Google Apps Script
        // Note: Cloudflare Pages uses `env` to access environment variables.
        const googleUrl = env.GOOGLE_URL;

        if (!googleUrl) {
            throw new Error('Missing GOOGLE_URL environment variable');
        }

        const response = await fetch(googleUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Google responded ${response.status}: ${text}`);
        }

        const data = await response.json();
        console.log('✅ Cloudflare Function: Google Success', data);

        return new Response(JSON.stringify({ status: 'success', google: data }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('❌ Cloudflare Function Error:', error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
