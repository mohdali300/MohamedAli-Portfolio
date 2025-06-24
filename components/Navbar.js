"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

// You can use any laptop icon, here we use react-icons (FontAwesome FaLaptopCode)
import { FaLaptopCode } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Activities", href: "#activities" },
    { label: "Certifications", href: "#courses" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>{"</>"}</span>
          <span className={styles.logoText}>MoAli</span>
        </div>
        <button
          className={styles.laptopToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <FaLaptopCode className={styles.laptopIcon} />
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
}