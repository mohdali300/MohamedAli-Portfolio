import styles from '../styles/HomeSection.module.css';

export default function HomeSection() {
  return (
    <section className={styles.home}>
      <div className={styles.heroContent}>
        <img src="/profile.jpg" alt="Mohamed Ali Ahmed" className={styles.profileImg} />
        <div>
          <h1 className={styles.title}>Mohamed Ali Ahmed</h1>
          <h2 className={styles.subtitle}>Software Engineer | Backend Developer</h2>
          <p>
            I build reliable, scalable software with .NET and modern web technologies.<br />
            <a href="/cv.pdf" download className={styles.downloadBtn}>Download CV (PDF)</a>
          </p>
        </div>
      </div>
      <div className={styles.animatedShapes}>
        {/* Add animated SVGs or shapes here */}
        <svg width="80" height="80">
          <rect x="10" y="10" width="30" height="30" fill="#0070f3" opacity="0.6">
            <animate attributeName="y" values="10;40;10" dur="3s" repeatCount="indefinite" />
          </rect>
          <circle cx="60" cy="60" r="10" fill="#00ffd0" opacity="0.6">
            <animate attributeName="cy" values="60;20;60" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}