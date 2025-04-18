import { useState } from 'react';
import PasswordGenerator from '../components/PasswordGenerator';
import PasswordStrengthChecker from '../components/PasswordStrengthChecker';
import QRCodeGenerator from '../components/QRCodeGenerator';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <h1>Password Generator &amp; Checker</h1>
      <div className={styles.section}>
        <PasswordGenerator onPasswordGenerated={setPassword} />
      </div>
      <div className={styles.section}>
        <PasswordStrengthChecker password={password} />
      </div>
      <div className={styles.section}>
        <QRCodeGenerator password={password} />
      </div>
    </div>
  );
}
