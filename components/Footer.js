import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.quote}>
        <span>
          <q>
            “Software engineering: where logic meets creativity to craft solutions that shape the future.”
          </q>
        </span>
      </div>
      <div className={styles.credits}>
        <span>
          By <span className={styles.by}>Copilot</span> &amp; <span className={styles.name}>Mohamed Ali</span>
        </span>
      </div>
      <div className={styles.copy}>
        2025 © Mohamed Ali | All rights reserved.
      </div>
    </footer>
  );
}