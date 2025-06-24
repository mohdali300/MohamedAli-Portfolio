import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import CoursesSection from '../components/CoursesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ActivitiesSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </>
  );
}