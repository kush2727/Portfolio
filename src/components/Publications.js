import React from "react";

const publications = [
  {
    id: 1,
    title: "Proactive Disaster Detection",
    authors: "Boddu Kushwanth Sai, Vadlamudi Narendra, Abhi CN, Rahul.",
    journal: "IJSERM",
    year: "2024",
    link: "https://ijsrem.com/download/proactive-disaster-detection/#1665222436327-e14bb5c1-2267",
    abstract: "This paper presents the Disaster Prediction Dashboard, a machine learning tool for forecasting risks from hurricanes, earthquakes, and floods. It supports user-uploaded data, handles missing values, and uses models like random forest and logistic regression. With a simple interface and clear risk indicators, it enhances disaster preparedness and decision-making.",
    logo: "https://ijsrem.com/wp-content/uploads/2019/05/LOGO.png"
  },
  {
    id: 2,
    title: "Online Chatbot Based Ticketing System",
    authors: "Boddu Kushwanth Sai, Vadlamudi Narendra, Abhi CN, Rahul.",
    journal: "IJSREM",
    year: "2025",
    link: "https://ijsrem.com/download/online-chatbot-based-ticketing-system/",
    abstract: "The Online Chatbot-Based Ticketing System for museums allows users to explore museum details, such as exhibits, timings, and ticket prices, before booking. The chatbot guides users through the selection and reservation process, offering real-time assistance for a smooth and efficient experience.",
    logo: "https://ijsrem.com/wp-content/uploads/2019/05/LOGO.png"
  }
];

export default function Publications() {
  const [expandedId, setExpandedId] = React.useState(null);

  // Add console log to verify component is rendering
  React.useEffect(() => {
    console.log("Publications component mounted!");
    console.log("Publications data:", publications);
  }, []);

  const toggleAbstract = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>📚 Publications</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#cbd5e0' }}>
        Published research works and papers
      </p>
      <div style={publicationsContainer}>
        {publications.map((pub) => (
          <div key={pub.id} style={publicationCardStyle}>
            <div style={headerContainer}>
              <div style={textContainer}>
                <h3 style={publicationTitleStyle}>{pub.title}</h3>
                <p style={authorStyle}>{pub.authors}</p>
                <p style={journalStyle}>
                  <em>{pub.journal}</em>, {pub.year}
                </p>
              </div>
              {pub.logo && (
                <div style={logoContainer}>
                  <img 
                    src={pub.logo} 
                    alt={`${pub.journal} logo`} 
                    style={logoStyle}
                    onError={(e) => {
                      console.error("Image failed to load:", pub.logo);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
            
            <div style={actionContainer}>
              <button 
                style={abstractButtonStyle} 
                onClick={() => toggleAbstract(pub.id)}
                onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
              >
                {expandedId === pub.id ? "Hide Abstract" : "Show Abstract"}
              </button>
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={linkStyle}
              >
                View Publication →
              </a>
            </div>
            
            {expandedId === pub.id && (
              <div style={abstractStyle}>
                <strong>Abstract:</strong>
                <p style={{ marginTop: '10px' }}>{pub.abstract}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const containerStyle = {
  maxWidth: 900,
  margin: "40px auto",
  padding: 30,
  backgroundColor: "#1e293b",
  borderRadius: 12,
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
  minHeight: '200px',
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: 10,
  color: "#60a5fa",
  textAlign: "center",
};

const publicationsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: 25,
};

const publicationCardStyle = {
  backgroundColor: "#2d3748",
  borderRadius: 8,
  padding: 20,
  boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "1px solid #3d4758",
};

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: 15,
  gap: 20,
};

const textContainer = {
  flex: "1",
  minWidth: "250px",
};

const logoContainer = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  width: 120,
  height: 100,
  objectFit: "contain",
  borderRadius: 4,
  backgroundColor: "#fff",
  padding: 8,
};

const publicationTitleStyle = {
  fontSize: "1.3rem",
  fontWeight: 600,
  marginBottom: 10,
  color: "#60a5fa",
  lineHeight: 1.4,
};

const authorStyle = {
  fontSize: "0.95rem",
  marginBottom: 8,
  color: "#cbd5e0",
};

const journalStyle = {
  fontSize: "0.9rem",
  marginBottom: 15,
  color: "#94a3b8",
};

const actionContainer = {
  display: "flex",
  gap: 15,
  flexWrap: "wrap",
  alignItems: "center",
};

const abstractButtonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: 6,
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const linkStyle = {
  backgroundColor: "#10b981",
  color: "white",
  padding: "10px 20px",
  borderRadius: 6,
  fontWeight: 600,
  fontSize: "0.9rem",
  textDecoration: "none",
  display: "inline-block",
  transition: "background-color 0.3s ease",
};

const abstractStyle = {
  marginTop: 15,
  padding: 20,
  backgroundColor: "#1a202c",
  borderRadius: 8,
  fontSize: "0.95rem",
  lineHeight: 1.7,
  borderLeft: "3px solid #60a5fa",
};