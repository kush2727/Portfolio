// Skills.js
import React from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";
import CircularSkill from "./CircularSkill";

const skills = [
  "JavaScript",
  "React.js",
  "Python",
  "Django",
  "REST APIs",
  "SQL",
  "Git",
];

export default function Skills() {
  const [hoverIndex, setHoverIndex] = React.useState(null);
  return (
    <ScrollRevealWrapper>
      <section id="skills" style={sectionStyle}>
        <h2>Skills</h2>
                <CircularSkill />

       
      </section>
    </ScrollRevealWrapper>
  );
}

const sectionStyle = {
  marginBottom: "50px",
  background: "#1e293b",  // dark background
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 5px 12px rgba(0,0,0,0.7)",  // stronger shadow for dark bg
  color: "#e0e0e0",      // light text color
};


const listStyle = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};



const skillStyle = {
  background: "#4a90e2",
  color: "white",
  padding: "8px 15px",
  borderRadius: "20px",
  fontWeight: "600",
  fontSize: "0.9rem",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  cursor: "default",
};

const skillHover = {
  backgroundColor: "#2d6cdf",
  transform: "scale(1.05)",
  cursor: "pointer",
};
