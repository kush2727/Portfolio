import React from "react";
import { ReactTyped } from "react-typed";
import About
 from "./About";
export default function Hero() {
      
       
  return (
    <section style={heroSectionStyle}>
      <h1 style={titleStyle}>Hi, I'm Kushwanth Sai</h1>
      <ReactTyped
        strings={[
          "Full Stack Developer",
          "Python Enthusiast",
          "Programming Fundamentals Expert",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        style={typedStyle}
      />
      <div style={buttonContainer}>
        <a href="#projects" style={buttonStyle}>
          View Projects
        </a>
        <a href="#contact" style={{ ...buttonStyle, backgroundColor: "#fff", color: "#1f2937" }}>
          Contact Me
        </a>
      </div>
      
<div
        >
          <About />
        </div>    </section>
  );
}

const heroSectionStyle = {
  backgroundColor: "#1e293b",
  color: "white",
  padding: "1px 20px",
  textAlign: "center",
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.8)",
};

const titleStyle = {
  fontSize: "3rem",
  marginBottom: "10px",
};

const typedStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "40px",
  height: "40px",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  padding: "12px 24px",
  borderRadius: "25px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  marginBottom:'40px',
  transition: "background-color 0.3s ease",
};

