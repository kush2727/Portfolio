import React, { useState } from "react";

const allSkills = [
  { name: "JavaScript", category: "Frontend", level: 9 },
  { name: "React", category: "Frontend", level: 8 },
  { name: "CSS", category: "Frontend", level: 7 },
  { name: "Python", category: "Backend", level: 9 },
  { name: "Django", category: "Backend", level: 8 },
  { name: "Node.js", category: "Backend", level: 8 },
  { name: "Docker", category: "DevOps", level: 7 },
  { name: "AWS", category: "DevOps", level: 6 },
  { name: "Git", category: "Tools", level: 9 },
  { name: "Linux", category: "Tools", level: 8 },
];

const categories = ["All", ...new Set(allSkills.map((s) => s.category))];

export default function SkillsMatrix() {
  const [filter, setFilter] = useState("All");

  const filteredSkills = filter === "All" ? allSkills : allSkills.filter((s) => s.category === filter);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Technical Skills Matrix</h2>

      {/* Category Filters */}
      <div style={filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              ...filterButton,
              backgroundColor: filter === cat ? "#60a5fa" : "#334155",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={gridStyle}>
        {filteredSkills.map(({ name, level, category }) => (
          <div key={name} style={skillBox}>
            <div style={skillName}>{name}</div>
            <div style={levelBarBg}>
              <div style={{...levelBarFill, width: `${level * 10}%` }} />
            </div>
            <div style={levelText}>{level}/10</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: 900,
  margin: "40px auto",
  padding: "30px 25px",
  backgroundColor: "#1e293b",
  borderRadius: 12,
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: 25,
  color: "#60a5fa",
  fontWeight: 700,
  fontSize: "1.8rem",
};

const filterContainer = {
  display: "flex",
  justifyContent: "center",
  gap: 12,
  marginBottom: 30,
  flexWrap: "wrap",
};

const filterButton = {
  padding: "8px 16px",
  borderRadius: "25px",
  border: "none",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
  backgroundColor: "#334155",
  transition: "background-color 0.3s ease",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
  gap: 24,
};

const skillBox = {
  backgroundColor: "#273549",
  padding: 15,
  borderRadius: 12,
  boxShadow: "0 3px 8px rgba(0,0,0,0.4)",
  textAlign: "center",
};

const skillName = {
  fontWeight: 700,
  marginBottom: 12,
  fontSize: "1.1rem",
};

const levelBarBg = {
  width: "100%",
  height: 10,
  backgroundColor: "#334155",
  borderRadius: 5,
  overflow: "hidden",
};

const levelBarFill = {
  height: "100%",
  backgroundColor: "#60a5fa",
  borderRadius: 5,
  transition: "width 0.6s ease",
};

const levelText = {
  marginTop: 8,
  fontWeight: 600,
  fontSize: "0.9rem",
  color: "#cbd5e1",
};
