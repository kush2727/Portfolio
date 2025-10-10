import React from "react";

const skills = [
  { name: "HTML/CSS/JavaScript", level: 70, color: "#60a5fa" },
  { name: "React", level: 85, color: "#38bdf8" },
  { name: "Python", level: 95, color: "#2563eb" },
  { name: "Flask", level: 85, color: "#1e40af" },
  { name: "Node.js", level: 75, color: "#2dd4bf" },
  { name: "Programming", level: 90, color: "#818cf8" },
  { name: "SQL", level: 90, color: "#818cf8" },
];

export default function CircularSkill() {
  return (
     <section id="skills" style={sectionStyle}>
            <h2>Skills</h2>
    <div style={containerStyle}>
      {skills.map(({ name, level, color }) => (
        <SkillCircle key={name} name={name} level={level} color={color} />
      ))}
    </div>
           
          </section>
    
  );
}

function SkillCircle({ name, level, color }) {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.75;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div style={circleWrapper}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#334155"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1.5s ease-out",
            strokeDasharray: circumference,
            strokeDashoffset,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fill="#f1f5f9"
          fontSize="20"
          fontWeight="700"
          fontFamily="Segoe UI"
        >
          {level}%
        </text>
      </svg>
      <div style={skillName}>{name}</div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 30,
  maxWidth: 800,
  margin: "40px auto",
  padding: "0 10px",
};

const circleWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 140,
};

const skillName = {
  marginTop: 8,
  color: "#cbd5e1",
  fontWeight: 600,
  fontSize: "1.1rem",
  textAlign: "center",
};


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
