
export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const payload = await request.json();
        const minappId = env.MINAPP_CLIENT_ID || '65a570ce339823f1faf4';
        const tableName = 'quiz_results';

        // v2.1 is stable and supports standard headers
        const url = `https://${minappId}.myminapp.com/hserve/v2.1/table/${tableName}/record/`;

        // Forward headers from the client (specifically Authorization)
        const incomingAuth = request.headers.get('Authorization');

        console.log(`🚀 Proxying MinApp submission for ${payload.student_name} to ${url}`);

        const headers = {
            'X-Hydrogen-Client-ID': minappId,
            'Content-Type': 'application/json'
        };

        if (incomingAuth) {
            headers['Authorization'] = incomingAuth;
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        const contentType = response.headers.get('content-type');
        let responseData;

        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {
            responseData = { message: await response.text() };
        }

        if (!response.ok) {
            console.error('❌ MinApp API Error:', response.status, responseData);
            return new Response(JSON.stringify({
                error: `MinApp API Error (${response.status})`,
                details: responseData,
                sent_to: url
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log('✅ MinApp API Success');

        return new Response(JSON.stringify({ status: 'success', data: responseData }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('❌ MinApp Proxy Crash:', error.stack || error.message);
        return new Response(JSON.stringify({
            error: 'Internal Proxy Error',
            message: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
