import about from '../data/about';

export default function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{about.summary}</p>
      <p>
        <strong>Location:</strong> {about.location}
      </p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${about.email}`}>{about.email}</a>
      </p>
    </section>
  );
}