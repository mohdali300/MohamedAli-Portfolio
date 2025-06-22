import styles from '../styles/ProgrammingSpaceBackground.module.css';

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const STAR_COUNT = 40;
const randomStars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
  top: `${random(0, 100)}%`,
  left: `${random(0, 100)}%`,
  size: `${random(1, 3)}px`,
  delay: `${random(0, 3)}s`,
  key: i,
}));

export default function ProgrammingSpaceBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      {/* Animated Stars */}
      {randomStars.map(star => (
        <span
          key={star.key}
          className={styles.star}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Programming SVG Shapes (animated) */}
      {/* Curly braces */}
      <svg
        className={`${styles.shape} ${styles.animateFloat}`}
        style={{ top: "20%", left: "10%", width: 32, height: 32, fill: "#00ffd0" }}
        viewBox="0 0 32 32"
      >
        <text x="0" y="28" fontSize="32" fontFamily="monospace">{'{'}</text>
      </svg>
      <svg
        className={`${styles.shape} ${styles.animateSpin}`}
        style={{ top: "60%", left: "85%", width: 36, height: 36, fill: "#ffeb3b" }}
        viewBox="0 0 32 32"
      >
        <text x="0" y="28" fontSize="32" fontFamily="monospace">{'}'}</text>
      </svg>

      {/* Angle brackets */}
      <svg
        className={`${styles.shape} ${styles.animateFloat}`}
        style={{ top: "52%", left: "20%", width: 28, height: 28, fill: "#00bfff" }}
        viewBox="0 0 32 32"
      >
        <text x="0" y="26" fontSize="28" fontFamily="monospace">{'<'}</text>
      </svg>
      <svg
        className={`${styles.shape} ${styles.animateSpin}`}
        style={{ top: "15%", left: "78%", width: 28, height: 28, fill: "#ff4081" }}
        viewBox="0 0 32 32"
      >
        <text x="0" y="26" fontSize="28" fontFamily="monospace">{'>'}</text>
      </svg>

      {/* Forward slash (like in code) */}
      <svg
        className={`${styles.shape} ${styles.animateFloat}`}
        style={{ top: "80%", left: "60%", width: 24, height: 24, fill: "#fff176" }}
        viewBox="0 0 32 32"
      >
        <text x="0" y="24" fontSize="24" fontFamily="monospace">{'/'}</text>
      </svg>

      {/* Simple "chip" (rectangle, like a computer chip) */}
      <svg
        className={`${styles.shape} ${styles.animateSpin}`}
        style={{ top: "35%", left: "50%", width: 38, height: 22, fill: "#b388ff" }}
        viewBox="0 0 38 22"
      >
        <rect x="4" y="4" width="30" height="14" rx="3" />
        {/* Pins */}
        <rect x="0" y="8" width="4" height="2" />
        <rect x="34" y="8" width="4" height="2" />
      </svg>

      {/* Cursor */}
      <svg
        className={`${styles.shape} ${styles.animateFloat}`}
        style={{ top: "72%", left: "32%", width: 18, height: 28, fill: "#fff" }}
        viewBox="0 0 16 24"
      >
        <polygon points="0,0 16,10 9,13 14,24 10,24 6,12 0,15" />
      </svg>
    </div>
  );
}