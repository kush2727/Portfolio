import React from "react";

const certifications = [
    {
    id: 1,
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image:
      "https://images.credly.com/size/680x680/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    url: "https://www.credly.com/badges/7dc709ae-eb52-4e51-89eb-403275267fe5/public_url",
  },
  {
    id: 2,
    title: "Programming Fundamentals using Python (Part-1)",
    issuer: "Infosys",
    year: "2025",
    image:
      "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    url: "https://drive.google.com/file/d/15vq14I8J7n8MGsYafIM6aSKq3Gnudf1d/view?usp=drive_link",
  },
  
  
  {
    id: 3,
    title: "Programming Fundamentals using Python (Part-2)",
    issuer: "Infosys",
    year: "2025",
    image:
      "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    url: "https://drive.google.com/file/d/1lo638FoTfb8koE0dRBRxGbZFUu6vTgly/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Web Development Course",
    issuer: " Ediglobe",
    year: "2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE-rGXmwAeRJE0bg6pazZhjJpOgjwnVvbFw&s",
    url: "https://drive.google.com/file/d/1Ht2kPJrsjfF8wG3Jl1Bnat1db3cUCfSv/view?usp=drive_link",
  },
];

export default function CertificationsCourses() {
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Certifications & Courses</h2>
      <div style={gridStyle}>
        {certifications.map(({ id, title, issuer, year, image, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
            title={`${title} issued by ${issuer}`}
          >
            <img src={image} alt={title} style={imageStyle} loading="lazy" />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{title}</h3>
              <p style={issuerStyle}>
                {issuer} | {year}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: 900,
  margin: "50px auto",
  padding: 30,
  backgroundColor: "#1e293b",
  borderRadius: 12,
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
};

const headingStyle = {
  color: "#60a5fa",
  fontSize: "1.8rem",
  fontWeight: 700,
  marginBottom: 30,
  textAlign: "center",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 24,
};

const cardStyle = {
  backgroundColor: "#273549",
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 15,
  transition: "transform 0.3s ease",
};

const imageStyle = {
  width: "100%",
  maxHeight: 160,
  objectFit: "contain",
  borderRadius: 8,
  marginBottom: 15,
};

const contentStyle = {
  textAlign: "center",
};

const titleStyle = {
  fontWeight: 700,
  fontSize: "1.1rem",
  marginBottom: 8,
};

const issuerStyle = {
  fontWeight: 600,
  fontSize: "0.9rem",
  color: "#a5b4fc",
};
