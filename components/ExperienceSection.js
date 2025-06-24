"use client";
import { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import experience from '../data/experience';
import styles from '../styles/ExperienceSection.module.css';

export default function ExperienceSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = experience[selectedIdx];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaBriefcase className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Experience</h2>
        {/* Optional quote or subtitle */}
        {/* <span className={styles.inlineQuote}>
          <em>“Experience is the teacher of all things.”</em>
        </span> */}
      </div>
      <div className={styles.tabsRow}>
        {experience.map((exp, idx) => (
          <div
            key={exp.company}
            className={`${styles.tabItem} ${idx === selectedIdx ? styles.active : ''}`}
            onClick={() => setSelectedIdx(idx)}
            tabIndex={0}
            role="button"
            aria-pressed={idx === selectedIdx}
          >
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.period}>{exp.period}</div>
          </div>
        ))}
      </div>
      <div className={styles.detailsBox}>
        <div className={styles.header}>
          <span className={styles.position}>{selected.position}</span>
          <span className={styles.type}>{selected.type}</span>
        </div>
        <div className={styles.responsibilities}>
          <h4>
            <span role="img" aria-label="Key Responsibilities" className={styles.icon}>
              <svg height="1em" viewBox="0 0 512 512" fill="#26b2ff" style={{verticalAlign: 'middle'}}><path d="M336 64c0 35.3-28.7 64-64 64s-64-28.7-64-64S236.7 0 272 0s64 28.7 64 64zM48 480V400c0-44.2 35.8-80 80-80h80c44.2 0 80 35.8 80 80v80H48zm272-176v-32c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v32h-128zm-16 0h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16v48z"/></svg>
            </span>
            Key Responsibilities
          </h4>
          <ul>
            {selected.responsibilities.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
        <div className={styles.technologies}>
          <h4>
            <span role="img" aria-label="Technologies Used" className={styles.icon}>
              <svg height="1em" viewBox="0 0 512 512" fill="#26b2ff" style={{verticalAlign: 'middle'}}><path d="M328 0H184C82.3 0 0 82.3 0 184v144c0 101.7 82.3 184 184 184h144c101.7 0 184-82.3 184-184V184C512 82.3 429.7 0 328 0z"/></svg>
            </span>
            Technologies Used
          </h4>
          <div className={styles.tags}>
            {selected.technologies.map((tech, i) => (
              <span key={i} className={styles.tag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}