import './App.css'
import AboutSection from './Component/AboutSection'
import ContactSection from './Component/ContactSection'
import EducationSection from './Component/EducationSection'
import Footer from './Component/Footer'
import Header from './Component/Header'
import HeroSection from './Component/HeroSection'
import JobExperienceSection from './Component/JobExperienceSection'
import ProjectsSection from './Component/ProjectsSection'
import SkillsSection from './Component/SkillsSection'

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <JobExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
