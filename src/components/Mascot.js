import React, { useState, useEffect } from "react";

export default function Mascot({ message }) {
  const [blink, setBlink] = useState(false);

  // Blinking effect every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={mascotStyle}>
        <img
          src="/protection.png" // cute owl icon
          alt="Mascot"
          style={{ width: 80, transition: "transform 0.3s" }}
        />
      </div>

      {/* Speech bubble */}
      <div style={bubbleStyle}>
        <div style={greetingStyle}>Hi, I am Chichu...</div>
        {(() => {
          const text = message;
          const prefix = "You are viewing ";
          if (typeof text === "string" && text.length > 0) {
            if (text.startsWith(prefix)) {
              const rest = text.slice(prefix.length);
              return (
                <div style={{ marginTop: 6 }}>
                  {prefix}
                  <strong>{rest}</strong>
                </div>
              );
            }
            return <div style={{ marginTop: 6 }}>{text}</div>;
          }
          return null;
        })()}
      </div>

      {/* Blinking eyes */}
      <div
        style={{
          ...eyeStyle,
          opacity: blink ? 0.1 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        👀
      </div>
    </div>
  );
}

const containerStyle = {
  position: "fixed",
  bottom: 30,
  right: 30,
  width: 250,
  backgroundColor: "#1e293b",
  borderRadius: "12px",
  padding: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
  fontSize: 14,
  cursor: "default",
  userSelect: "none",
  zIndex: 1000,
};

const mascotStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 8,
};

const bubbleStyle = {
  fontStyle: "italic",
  minHeight: 40,
};

const greetingStyle = {
  fontWeight: 700,
};

const eyeStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  fontSize: 24,
  pointerEvents: "none",
};
