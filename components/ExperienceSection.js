import experience from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((exp, idx) => (
        <div key={idx} style={{marginBottom: "1.5em"}}>
          <h4>{exp.role} <span style={{fontWeight: "normal"}}>@ {exp.company}</span></h4>
          <div style={{fontSize: "0.95em", color: "#aaa"}}>{exp.period} • {exp.location}</div>
          <ul>
            {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}