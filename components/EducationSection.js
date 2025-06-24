import styles from "../styles/EducationSection.module.css";
import { FaUserGraduate } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaUserGraduate className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Education</h2>
        <span className={styles.durationBox}>
          Sep 2021 – Jun 2025
        </span>
      </div>
      <div className={styles.eduContent}>
        <div className={styles.eduRow}>
          <span className={styles.eduLabel}>Degree:</span>
          <span>Computer Science Bachelor</span>
        </div>
        <div className={styles.eduRow}>
          <span className={styles.eduLabel}>University:</span>
          <span>South Valley University</span>
        </div>
        <div className={styles.eduRow} style={{display:'none'}}>
          <span className={styles.eduLabel}>Duration:</span>
          <span>Sep 2021 – Jun 2025</span>
        </div>
        <div className={styles.eduRow}>
          <span className={styles.eduLabel}>Graduation Project:</span>
          <span>
            Optern - Interactive virtual job readiness platform <strong className={styles.honor}>"Excellent with honor"</strong>
          </span>
        </div>
      </div>
    </section>
  );
}