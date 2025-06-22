import courses from '../data/courses';

export default function CoursesSection() {
  return (
    <section id="courses">
      <h2>Courses & Certificates</h2>
      <ul>
        {courses.map((course, idx) => (
          <li key={idx}>
            <strong>{course.title}</strong> — {course.provider} ({course.period})
          </li>
        ))}
      </ul>
    </section>
  );
}