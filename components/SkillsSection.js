import styles from "../styles/SkillsSection.module.css";
import {
  FaCode,
  FaDatabase,
  FaCogs,
  FaProjectDiagram,
  FaTools,
  FaBrain
} from "react-icons/fa";

const skills = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    content: "C#, Python, C++, JavaScript, SQL, HTML5, CSS3, Bootstrap"
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    content: "SQL Server, PostgreSQL, DB design"
  },
  {
    icon: <FaCogs />,
    title: "Frameworks & Technologies",
    content: "ASP .NET, MVC, WebAPI, Entity Framework, LINQ,  GraphQL, SignalR"
  },
  {
    icon: <FaProjectDiagram />,
    title: "Development Practices & Concepts",
    content: "OOP, Data Structures, Solid Principles, Clean Architecture, Design Patterns, Docker, Unit Testing"
  },
  {
    icon: <FaTools />,
    title: "Tools",
    content: "Git, GitHub, VS, VS Code, Figma, Jira, Notion, ClickUp, Trello, Postman, Swagger, Nitro"
  },
  {
    icon: <FaBrain />,
    title: "Soft Skills",
    content: " Team work, Problem solving, Communication, Time management, Mentoring, Presentation skills"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.headerRow}>
        <span className={styles.animatedIcon}>
          <FaCogs className={styles.iconSpin} />
        </span>
        <h2 className={styles.headline}>Skills</h2>
        <span className={styles.inlineQuote}>
          <em>“Skills turn ideas into reality.”</em>
        </span>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <div className={styles.skillCard} key={idx}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillContent}>{skill.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}