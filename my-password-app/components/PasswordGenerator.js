import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function PasswordGenerator({ onPasswordGenerated }) {
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    onPasswordGenerated(pwd);
  };

  return (
    <div className={styles.card}>
      <h2>Generate Password</h2>
      <div className={styles.formGroup}>
        <label htmlFor="length">Length: </label>
        <input
          type="number"
          id="length"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
      <button className={styles.button} onClick={generatePassword}>Generate Password</button>
    </div>
  );
}
