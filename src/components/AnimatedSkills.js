import React, { useEffect, useRef } from "react";

const skills = [
  { name: "JavaScript", level: 60 },
  { name: "React", level: 88 },
  { name: "Python", level: 95 },
  { name: "Django", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Algorithms", level: 90 },
  { name: "CSS", level: 75 },
  { name: "Communication", level: 85 },
];

export default function AnimatedSkills() {
  const barRefs = useRef([]);

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (bar) {
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = `${skills[i].level}%`;
        }, 200 + i * 120); // staggered animation per skill
      }
    });
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Skill Progress</h2>
      <div>
        {skills.map((skill, idx) => (
          <div key={skill.name} style={barHolder}>
            <span style={labelStyle}>{skill.name}</span>
            <div style={barBgStyle}>
              <div
                ref={(el) => (barRefs.current[idx] = el)}
                style={{
                  ...barStyle,
                  background: "linear-gradient(90deg, #60a5fa 0%, #38bdf8 100%)",
                  boxShadow: "0 2px 8px #0ea5e9aa",
                }}
              >
                <span style={levelTextStyle}>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: 480,
  background: "#1e293b",
  borderRadius: 15,
  padding: "30px 20px",
  margin: "40px auto",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
};

const headingStyle = {
  textAlign: "center",
  color: "#60a5fa",
  marginBottom: 25,
  letterSpacing: "1px"
};

const barHolder = {
  marginBottom: 22,
};

const labelStyle = {
  color: "#cbd5e1",
  fontWeight: 600,
  fontSize: "1.08rem",
  marginBottom: 2,
  display: "inline-block",
};

const barBgStyle = {
  background: "#334155",
  borderRadius: 8,
  height: 20,
  width: "100%",
  overflow: "hidden",
  marginTop: 6,
  position: "relative",
};

const barStyle = {
  height: "100%",
  width: "0%",  // animated in via JS
  borderRadius: 8,
  transition: "width 1.2s cubic-bezier(0.19,1,.22,1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: 12,
  position: "relative",
};

const levelTextStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: 13,
  zIndex: 2,
  letterSpacing: 1,
};
