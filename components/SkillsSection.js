import skills from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        <h4>Software Development</h4>
        <ul>
          {skills.development.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h4>Development Practices</h4>
        <ul>
          {skills.practices.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h4>Tools</h4>
        <ul>
          {skills.tools.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h4>Soft Skills</h4>
        <ul>
          {skills.soft.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}