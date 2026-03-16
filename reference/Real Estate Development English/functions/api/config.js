export async function onRequest(context) {
    const minappId = context.env.MINAPP_CLIENT_ID || '65a570ce339823f1faf4'; // Fallback to hardcoded if env missing
    return new Response(JSON.stringify({ minapp_id: minappId }), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
