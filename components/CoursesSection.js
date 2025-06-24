"use client";
import { FaCertificate, FaMedal } from 'react-icons/fa';
import courses from '../data/courses';
import styles from '../styles/CoursesSection.module.css';

export default function CoursesSection() {
  return (
    <section id="courses" className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaMedal className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Courses & Certificates</h2>
      </div>
      <div className={styles.cardsGrid}>
        {courses.map((c, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.titleRow}>
              <span className={styles.courseName}>{c.title}</span>
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="Certificate Link">
                  <svg width="1.15em" height="1.15em" fill="#26b2ff" viewBox="0 0 20 20"><path d="M13.586 7H9a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v4.586l-7.293 7.293a1 1 0 0 0 1.414 1.414L13.586 7z"/></svg>
                </a>
              )}
            </div>
            <div className={styles.org}>{c.provider}</div>
            {c.period && <div className={styles.period}>{c.period}</div>}
            {c.description && <div className={styles.desc}>{c.description}</div>}
            {c.tags && c.tags.length > 0 && (
              <div className={styles.tags}>{c.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}