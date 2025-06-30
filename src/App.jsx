import { useEffect, useState } from 'react'
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
import Loading from './Component/Loading'
import Particles from './Component/Particles'

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000); // simulate initial app loading (e.g., fetching user or app settings)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='z-50' style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Particles as background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        <Particles
          particleColors={['#000000', '#0000FF']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {initialLoading ? (
          <Loading />
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default App