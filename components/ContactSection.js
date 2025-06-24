import about from '../data/about';
import styles from '../styles/ContactSection.module.css';
import { MdEmail, MdLocationOn, MdMarkEmailRead, MdWhatsapp } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <MdMarkEmailRead className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Contact</h2>
      </div>
      <div className={styles.callout}>
        {/* Creative callout sentence */}
        Let’s connect! Whether you have a project, a question, or just want to say hi, my inbox is always open.
      </div>
      <div className={styles.cardsGrid}>
        <div className={styles.contactCard}>
          <div className={styles.iconBox} style={{ background: "#232b3b" }}>
            <MdEmail className={styles.icon} style={{ color: "#36c5f0" }} />
          </div>
          <div>
            <div className={styles.label}>Email</div>
            <div className={styles.value}>
              <a href={`mailto:${about.email}`}>{about.email}</a>
            </div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconBox} style={{ background: "#232b3b" }}>
            <MdWhatsapp className={styles.icon} style={{ color: "#50ff94" }} />
          </div>
          <div>
            <div className={styles.label}>WhatsApp</div>
            <div className={styles.value}>
              <a href={about.whatsapp} target="_blank" rel="noopener noreferrer">
                {about.whatsapp.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconBox} style={{ background: "#232b3b" }}>
            <FaLinkedinIn className={styles.icon} style={{ color: "#ac8cff" }} />
          </div>
          <div>
            <div className={styles.label}>LinkedIn</div>
            <div className={styles.value}>
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
                {about.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconBox} style={{ background: "#232b3b" }}>
            <FaGithub className={styles.icon} style={{ color: "#f45b84" }} />
          </div>
          <div>
            <div className={styles.label}>GitHub</div>
            <div className={styles.value}>
              <a href={about.github} target="_blank" rel="noopener noreferrer">
                {about.github.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}