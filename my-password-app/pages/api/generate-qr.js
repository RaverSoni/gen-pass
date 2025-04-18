// pages/api/generate-qr.js
import QRCode from 'qrcode';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    try {
      // Generate QR code as a data URL
      const qrDataUrl = await QRCode.toDataURL(password);
      res.status(200).json({ qr: qrDataUrl });
    } catch (err) {
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
