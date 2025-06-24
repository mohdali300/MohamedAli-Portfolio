"use client";
import { useRef, useEffect, useState } from 'react';
import about from '../data/about';
import styles from '../styles/AboutSection.module.css';
import { FaUserAstronaut } from 'react-icons/fa';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.aboutSection} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaUserAstronaut className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>About Me</h2>
      </div>
      <div className={styles.content}>
        <p>
          Software engineer with a strong foundation in computer science,{' '}
          <strong className={styles.highlight}>
            +1 year experience in .NET technologies
          </strong>
          , building and maintaining reliable software applications. Strong familiarity with{' '}
          <strong className={styles.highlight}>
            OOP principles, Database management and Clean Architecture.
          </strong>{' '}
          Collaborates effectively with teams to solve problems and{' '}
          <strong className={styles.highlight}>
            delivers scalable solutions that meet business requirements.
          </strong>
        </p>
      </div>
      <div className={styles.quote}>
        <span>“Change is the only constant in the programmer’s life”</span>
      </div>
    </section>
  );
}