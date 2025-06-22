import about from '../data/about';

export default function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        You can reach me at: <a href={`mailto:${about.email}`}>{about.email}</a>
      </p>
      <p>
        LinkedIn: <a href={about.linkedin} target="_blank">{about.linkedin}</a><br />
        GitHub: <a href={about.github} target="_blank">{about.github}</a><br />
        WhatsApp: <a href={about.whatsapp} target="_blank">{about.whatsapp}</a>
      </p>
    </section>
  );
}