import React, { useState } from "react";

const RESUME_PDF_URL = "https://drive.google.com/drive/folders/1ecEkN5opah-ESTHPc1eJVl-Ydoa4p2r_"; // Update to your actual resume PDF URL or path

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Technical Resume</h2>

      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
        <a href={RESUME_PDF_URL} download style={downloadLink}>
          Download Resume (PDF)
        </a>
      </div>

      {showPreview && (
        <iframe
          title="Resume Preview"
          src={RESUME_PDF_URL}
          style={iframeStyle}
        />
      )}
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
  textAlign: "center",
};

const headingStyle = {
  fontSize: "1.8rem",
  fontWeight: 700,
  marginBottom: 30,
  color: "#60a5fa",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
  flexWrap: "wrap",
  marginBottom: 25,
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 30px",
  borderRadius: 25,
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  minWidth: 150,
};

const downloadLink = {
  backgroundColor: "#60a5fa",
  color: "white",
  padding: "12px 30px",
  borderRadius: 25,
  fontWeight: 700,
  fontSize: "1rem",
  textDecoration: "none",
  lineHeight: "1.5",
};

const iframeStyle = {
  width: "100%",
  height: "600px",
  borderRadius: 12,
  border: "none",
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
};
