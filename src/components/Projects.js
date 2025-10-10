import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Proactive Disaster Detection",
    description: "A system designed to predict and detect natural disasters in advance using satellite data and machine learning, enabling timely alerts and mitigation strategies to minimize damage and save lives.",
    image: "https://www.mdpi.com/files/multidisciplinary_topic_graphical_abstract/1795/AI%20and%20natural%20disasters_croped.jpg",
    url: "https://github.com/kush2727/Proactive-Disaster-Detection",
  },
  {
    id: 2,
    title: "Online Chat Based Ticketing System",
    description: "A Museum Ticketing System automates ticket booking, allowing visitors to book tickets online or on-site, select time slots, and make payments digitally. It provides real-time tracking of tickets, visitor statistics, and smooth entry management, reducing queues and improving the overall visitor experience.",
    image: "https://www.xenioo.com/wp-content/uploads/2021/05/booking-chatbot-scaled.jpg",
    url: "https://github.com/kush2727/online-chatbot-based-ticketing-system",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "A Genre-Based Movie Recommendation System suggests movies to users based on their selected or preferred genres. By filtering movies according to genres and user preferences, it helps users quickly discover relevant movies, improving their viewing experience and satisfaction.",
    image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQcHo9O7fDBO998m4pZfIHkcWJkLnK4PWSLtC2CQr9wQGQw0fPNl_4K52hrbv9xQGMjd1jUA-Jci3NkjXewZMuOBMBjPvGm1R1zX8aNhffbm8cV6QbJCuNzjXiqDf7Pg-s6drlKhJcA5OgHGRFGQNxHQsf3Q.jpg?r=6ec",
    url: "https://github.com/kush2727/MOVIE-RECOMMENDATION-SYSTEM",
  },
];

export default function ProjectSection() {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.8 },
        {
          scale: 1.05,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <div style={projectGrid}>
        {projects.map((project, idx) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (containerRef.current[idx] = el)}
            style={projectCard}
          >
            <img src={project.image} alt={project.title} style={projectImage} loading="lazy" />
            <div style={projectContent}>
              <h3 style={projectTitle}>{project.title}</h3>
              <p style={projectDescription}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  marginBottom: "50px",
  background: "#1e293b",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 5px 12px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
};

const headingStyle = {
  marginBottom: "30px",
  color: "#60a5fa",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
};

const projectCard = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  backgroundColor: "#273549",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  transformOrigin: "center center",
  transition: "box-shadow 0.3s ease",
};

const projectImage = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px 12px 0 0",
};

const projectContent = {
  padding: "15px 20px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const projectTitle = {
  fontSize: "1.3rem",
  marginBottom: "8px",
  fontWeight: "700",
};

const projectDescription = {
  fontSize: "1rem",
  fontWeight: "500",
  color: "#cbd5e1",
};
