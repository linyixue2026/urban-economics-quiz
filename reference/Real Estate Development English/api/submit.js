const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // 1. Security Check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const payload = req.body;

  try {
    console.log('🚀 Backend: Forwarding to Google Only...');

    // 2. Forward ONLY to Google Sheets (Frontend handles MinApp)
    // This prevents Vercel timeouts if MinApp (ifanr) is slow/blocked.
    const response = await fetch(process.env.GOOGLE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Google responded ${response.status}: ${text}`);
    }

    const data = await response.json();
    console.log('✅ Backend: Google Success', data);

    // 3. Return success immediately
    return res.status(200).json({ status: 'success', google: data });

  } catch (error) {
    console.error('❌ Backend Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
};