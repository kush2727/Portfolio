import React from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

export default function About() {
  return (
    <ScrollRevealWrapper>
      <section id="about" style={sectionStyle}>
        <h2>About Me</h2>
        <p>
        I am seeking a challenging and growth-oriented role in a dynamic organization where I can apply my technical expertise and continuously expand my knowledge. With strong proficiency in Python, SQL, and problem-solving, I aim to contribute effectively to developing innovative and efficient solutions. I excel in team collaboration, enjoy tackling real-world challenges, and am committed to delivering high-quality results that drive organizational success.
        </p>
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

