import styles from '../styles/Home.module.css';

export default function PasswordStrengthChecker({ password }) {
  const evaluateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[\W_]/.test(pwd)) score += 1;

    if (score <= 2) return { label: 'Weak', color: 'red' };
    if (score === 3 || score === 4) return { label: 'Moderate', color: 'orange' };
    if (score === 5) return { label: 'Strong', color: 'green' };

    return { label: 'Unknown', color: 'gray' };
  };

  const strength = evaluateStrength(password);

  return (
    <div className={styles.card}>
      <h2>Password Strength</h2>
      {password ? (
        <>
          <p>Password: <strong>{password}</strong></p>
          <p style={{ color: strength.color }}>
            Strength: <strong>{strength.label}</strong>
          </p>
        </>
      ) : (
        <p>Please generate a password first.</p>
      )}
    </div>
  );
}
