"use client";
import { FaRegLightbulb } from 'react-icons/fa';
import activities from '../data/activities';
import styles from '../styles/ActivitiesSection.module.css';

export default function ActivitiesSection() {
  return (
    <section id="activities" className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaRegLightbulb className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Activities</h2>
      </div>
      <div className={styles.cardsGrid}>
        {activities.map((a, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.titleRow}>
              <span className={styles.activityName}>{a.title}</span>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="Activity Link">
                  <svg width="1.15em" height="1.15em" fill="#26b2ff" viewBox="0 0 20 20"><path d="M13.586 7H9a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v4.586l-7.293 7.293a1 1 0 0 0 1.414 1.414L13.586 7z"/></svg>
                </a>
              )}
            </div>
            <div className={styles.org}>{a.organization}</div>
            {a.period && <div className={styles.period}>{a.period}</div>}
            {a.points && <div className={styles.desc}>{a.points}</div>}
            {a.tags && a.tags.length > 0 && (
              <div className={styles.tags}>{a.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>)}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}