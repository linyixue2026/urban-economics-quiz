/**
 * Node.js Serverless Function (Config Provider)
 */

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    // We only expose public-facing keys needed by the frontend
    return res.status(200).json({
        MINAPP_CLIENT_ID: process.env.MINAPP_CLIENT_ID || '',
        GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL || '' // Optional, but useful for Path B fallback
    });
};
