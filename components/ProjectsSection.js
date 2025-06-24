"use client";
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';
import styles from '../styles/ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaFolderOpen className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Projects</h2>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((proj, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardHeader}>
              <div className={styles.headerMain}>
                <div className={styles.projectName}>{proj.name}</div>
                <div className={styles.role}>{proj.role}</div>
              </div>
              <div className={styles.cardIcons}>
                {proj.github && (
                  <a
                    href={proj.github}
                    className={styles.iconBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    className={styles.iconBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Project"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className={styles.responsibilities}>
              <div className={styles.respTitle}>Responsibilities:</div>
              <ul>
                {proj.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
            {proj.technologies && proj.technologies.length > 0 && (
              <div className={styles.technologies}>
                <div className={styles.techTitle}></div>
                <div className={styles.tags}>
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}