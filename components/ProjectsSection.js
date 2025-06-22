import projects from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} style={{marginBottom: "1.5em"}}>
          <h4>{proj.name} <span style={{fontWeight: "normal"}}>— {proj.role}</span></h4>
          <div style={{fontSize: "0.95em", color: "#aaa"}}>{proj.period}</div>
          <ul>
            {proj.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}