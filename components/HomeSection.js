"use client";
import styles from '../styles/HomeSection.module.css';
import { useState, useEffect } from 'react';

// Import FontAwesome icons from react-icons
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons = [
  {
    href: "https://github.com/mohdali300",
    label: "GitHub",
    icon: <FaGithub />
  },
  {
    href: "https://linkedin.com/in/mohamedalii300",
    label: "LinkedIn",
    icon: <FaLinkedinIn />
  },
  {
    href: "mailto:mohamedalii.dev@gmail.com",
    label: "Gmail",
    icon: <MdEmail />
  },
  {
    href: "https://t.me/yourtelegramusername",
    label: "Telegram",
    icon: <FaTelegramPlane />
  },
  {
    href: "https://facebook.com/yourfacebookusername",
    label: "Facebook",
    icon: <FaFacebookF />
  },
  {
    href: "https://wa.me/201091779782",
    label: "WhatsApp",
    icon: <FaWhatsapp />
  }
];

const jobTitles = [
  "Software Engineer",
  "Backend Developer",
];

export default function HomeSection() {
  const [typedText, setTypedText] = useState('');
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const fullText = jobTitles[currentTitle];
    if (!isDeleting && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 90);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText.length > 0) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length - 1));
      }, 55);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && typedText.length === fullText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitle((currentTitle + 1) % jobTitles.length);
    }
  }, [typedText, isDeleting, currentTitle, loading]);

  return (
    <section className={styles.home} id="home">
      {loading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loader}>
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      <div className={styles.heroContent}>
        <img
          src="/profile.jpg"
          alt="Mohamed Ali Ahmed"
          className={styles.profileImg}
        />
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>Mohamed Ali Ahmed</h1>
          <div className={styles.typingWrapper}>
            <span className={styles.typing}>{typedText}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <div className={styles.socialIcons}>
            {icons.map(icon => (
              <a
                href={icon.href}
                key={icon.label}
                className={styles.icon}
                aria-label={icon.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <a href="/cv.pdf" download className={styles.downloadBtn}>
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}