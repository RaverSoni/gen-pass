// components/QRCodeGenerator.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function QRCodeGenerator({ password }) {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    if (!password) return;
    try {
      const res = await fetch('/api/generate-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      setQrCodeUrl(data.qr);
    } catch (error) {
      console.error("Error generating QR Code:", error);
    }
  };

  return (
    <div className={styles.card}>
      <h2>Password QR Code</h2>
      {password ? (
        <>
          
          <button className={styles.button} onClick={generateQRCode}>
            Generate QR Code
          </button>
          <div className='align-center'>
          {qrCodeUrl && <img className={styles.img} src={qrCodeUrl} alt="Password QR Code" />}
          </div>
        </>
      ) : (
        <p>Please generate a password first.</p>
      )}
    </div>
  );
}
