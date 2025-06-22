import activities from '../data/activities';

export default function ActivitiesSection() {
  return (
    <section id="activities">
      <h2>Activities</h2>
      {activities.map((act, idx) => (
        <div key={idx} style={{marginBottom: "1em"}}>
          <h4>{act.title}</h4>
          <div style={{fontSize: "0.95em", color: "#aaa"}}>{act.period}</div>
          <ul>
            {act.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}