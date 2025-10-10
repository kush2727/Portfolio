import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Science and Technology(Artificial Inteligence & Data science)",
    institution: "Presidency University,Bengaluru",
    startYear: 2021,
    endYear: 2025,
    details: "Focused on developing expertise in Artificial Intelligence, Machine Learning, and Data Science. Skilled in analyzing complex datasets, building predictive models, and creating data-driven solutions.",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College ,Tirupati",
    startYear: 2019,
    endYear: 2021,
    details: "Intermediate with a focus on Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "High School",
    institution: "Accord School,Tirupati",
    startYear: 2018,
    endYear: 2019,
    details: "Completed high school with a focus on science subjects.",
  },
];

const experienceData = [
   

  {
    role: "Python Full Stack Developer",
    company: "Pentogon Space,Bengaluru",
    startYear: 'Jun 2025',
    endYear: 'Ongoing',
    details: "Learning and working on Python, SQL, JavaScript, React.js, Node.js projects",
  },
];

export default function EducationExperience() {
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Education & Experience</h2>

      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={subHeading}>Education</h3>
          {educationData.map((edu, index) => (
            <div key={index} style={itemStyle}>
              <h4 style={itemTitle}>
                {edu.degree} <span style={itemYears}>({edu.startYear} - {edu.endYear})</span>
              </h4>
              <p style={itemInstitution}>{edu.institution}</p>
              <p style={itemDetails}>{edu.details}</p>
            </div>
          ))}
        </div>

        <div style={columnStyle}>
          <h3 style={subHeading}>Experience</h3>
          {experienceData.map((exp, index) => (
            <div key={index} style={itemStyle}>
              <h4 style={itemTitle}>
                {exp.role} <span style={itemYears}>({exp.startYear} - {exp.endYear})</span>
              </h4>
              <p style={itemInstitution}>{exp.company}</p>
              <p style={itemDetails}>{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: 900,
  margin: "40px auto",
  padding: 30,
  backgroundColor: "#1e293b",
  borderRadius: 12,
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
};

const headingStyle = {
  fontSize: "1.8rem",
  marginBottom: 25,
  textAlign: "center",
  color: "#60a5fa",
  fontWeight: 700,
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 40,
  justifyContent: "center",
};

const columnStyle = {
  flex: "1 1 320px",
  minWidth: 280,
};

const subHeading = {
  fontSize: "1.4rem",
  marginBottom: 15,
  borderBottom: "2px solid #60a5fa",
  paddingBottom: 6,
  fontWeight: 600,
};

const itemStyle = {
  marginBottom: 25,
};

const itemTitle = {
  fontSize: "1.1rem",
  fontWeight: 700,
  marginBottom: 5,
};

const itemYears = {
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#94a3b8",
  marginLeft: 10,
};

const itemInstitution = {
  fontWeight: 600,
  fontSize: "1rem",
  marginBottom: 6,
  color: "#a5b4fc",
};

const itemDetails = {
  fontSize: "0.9rem",
  lineHeight: 1.4,
  color: "#cbd5e1",
};
