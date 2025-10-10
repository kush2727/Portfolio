import React, { useState, useRef, useEffect, useCallback } from 'react';
import Hero from "./components/Hero";
import SpaceScene from "./components/MouseTrail";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Mascot from "./components/Mascot";
import CertificationsCourses from "./components/CertificationsCourses";
import EducationExperience from "./components/EducationExperience";
import CircularSkill from "./components/CircularSkill";
import Publications from './components/Publications';
import Resume from './components/Resume';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const sections = [
  { id: "hero", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const refs = {
    hero: useRef(null),
    skills: useRef(null),
    certifications: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    publications: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (const section of sections) {
      const ref = refs[section.id];
      if (ref && ref.current) {
        const { offsetTop } = ref.current;
        if (scrollPos >= offsetTop) {
          setActiveSection(section.id);
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    fetch(`${backendUrl}/api/visitor`, { method: 'POST' }).catch(console.error);
    console.log("Visitor info sent to backend");
  }, []);

  const scrollToSection = (id) => {
    const ref = refs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Ref for section "${id}" is null`);
    }
  };

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
        <SpaceScene />
      </div>

      {isDesktop && (
        <nav style={sidebarStyle}>
          <div style={sidebarHeaderStyle}>
            <span style={profileIconStyle}>🧑‍💻</span>
            <span>Kushwanth's Portfolio</span>
          </div>
          <ul style={sidebarListStyle}>
            {sections.map(({ id, label }) => (
              <li
                key={id}
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection(id)}
                onKeyPress={(e) => { if (e.key === "Enter") scrollToSection(id); }}
                aria-label={`Scroll to ${label}`}
                style={{
                  ...sidebarItemStyle,
                  backgroundColor: activeSection === id ? "#2563eb" : "transparent",
                  color: activeSection === id ? "#e0e0e0" : "#a1a1aa",
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {!isDesktop && (
        <div style={mobileHeaderStyle}>
          <span style={profileIconStyle}>🧑‍💻</span>
          <span>Kushwanth's Portfolio</span>
        </div>
      )}
      <main style={{ ...mainStyle, marginLeft: isDesktop ? 290 : 0 }}>
        <Mascot message={`You are viewing Kushwanth's ${
          activeSection === 'hero' ? 'Introduction' : 
          activeSection === 'skills' ? 'Skills' : 
          activeSection === 'projects' ? 'Projects' : 
          activeSection === 'certifications' ? 'Certifications' : 
          activeSection === 'resume' ? 'Resume' :
          activeSection === 'publications' ? 'Publications' :
          activeSection === 'contact' ? 'Contact Information' : 
          activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
        }`} />

        <section ref={refs.hero} id="hero" style={sectionWrapper}>
          <Hero />
          <EducationExperience />
        </section>

        <section ref={refs.skills} id="skills" style={sectionWrapper}>
          <CircularSkill />
        </section>

        <section ref={refs.certifications} id="certifications" style={sectionWrapper}>
          <CertificationsCourses />
        </section>
        
        <section ref={refs.projects} id="projects" style={sectionWrapper}>
          <Projects />
        </section>
      
        <section ref={refs.resume} id="resume" style={sectionWrapper}>
          <Resume />
        </section>

        <section ref={refs.publications} id="publications" style={sectionWrapper}>
          <Publications />
        </section>

        <section ref={refs.contact} id="contact" style={sectionWrapper}>
          <Contact />
        </section>
      </main>

      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} Kushwanth Sai. All rights reserved.
      </footer>

      <style>{`
        body {
          background: #121212 !important;
          color: #e0e0e0 !important;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        a {
          color: #60a5fa;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #3b82f6;
        }
        @media (max-width: 767px) {
          nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default App;

// Styles

const sidebarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: 200,
  backgroundColor: "#1f2937",
  paddingTop: 40,
  boxShadow: "2px 0 8px rgba(0,0,0,0.8)",
  zIndex: 100,
  userSelect: "none",
};

const sidebarListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const sidebarHeaderStyle = {
  padding: "0 20px 20px 20px",
  color: "#e0e0e0",
  fontWeight: 800,
  fontSize: "1.05rem",
  letterSpacing: 0.5,
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const sidebarItemStyle = {
  padding: "15px 20px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "1rem",
  userSelect: "none",
  transition: "background-color 0.3s ease, color 0.3s ease",
  outline: "none",
};

const mainStyle = {
  maxWidth: 900,
  padding: "20px 30px",
  margin: "0 auto",
  scrollBehavior: "smooth",
};

const mobileHeaderStyle = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: "#1f2937",
  color: "#e0e0e0",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontWeight: 800,
  letterSpacing: 0.5,
  borderBottom: "1px solid #33394a",
};

const sectionWrapper = {
  marginBottom: 60,
  paddingBottom: 15,
  borderBottom: "1px solid #33394a",
};

const footerStyle = {
  textAlign: "center",
  padding: 15,
  background: "#1f2937",
  color: "#a1a1aa",
  fontSize: "0.9rem",
  marginTop: 30,
};

const profileIconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#111827",
  boxShadow: "0 0 0 1px #33394a inset",
  fontSize: 16,
};