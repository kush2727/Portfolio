import React, { useState } from "react";

const flashcards = [
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its own scope, the outer function's scope, and the global scope even after the outer function has returned.",
  },
  {
    question: "Explain the concept of Promises in JavaScript.",
    answer:
      "Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer: "== compares values after type coercion; === compares values and types without coercion.",
  },
  {
    question: "What is the time complexity of binary search?",
    answer: "O(log n)",
  },
  {
    question: "Explain RESTful APIs.",
    answer:
      "RESTful APIs follow REST architecture principles, using HTTP methods for CRUD operations, stateless communication, and resource-based URLs.",
  },
];

export default function TechFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Technical Q&A Flashcards</h2>
      <div style={cardStyle} onClick={() => setShowAnswer(!showAnswer)} title="Click to flip">
        <p style={questionStyle}>
          {showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
        </p>
        <small style={flipHintStyle}>Click card to {showAnswer ? "show question" : "show answer"}</small>
      </div>
      <div style={navButtons}>
        <button onClick={prevCard} style={navButton} aria-label="Previous question">
          &lt; Prev
        </button>
        <button onClick={nextCard} style={navButton} aria-label="Next question">
          Next &gt;
        </button>
      </div>
    </section>
  );
}

const containerStyle = {
  maxWidth: 600,
  margin: "40px auto",
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "1.7rem",
  marginBottom: 25,
  color: "#60a5fa",
  fontWeight: 700,
};

const cardStyle = {
  backgroundColor: "#273549",
  borderRadius: 15,
  padding: 30,
  minHeight: 120,
  fontSize: "1.2rem",
  cursor: "pointer",
  userSelect: "none",
  boxShadow: "0 3px 12px rgba(0,0,0,0.5)",
  transition: "background-color 0.3s ease",
  marginBottom: 20,
};

const questionStyle = {
  whiteSpace: "pre-line",
};

const flipHintStyle = {
  marginTop: 10,
  fontSize: "0.85rem",
  color: "#94a3b8",
  fontStyle: "italic",
};

const navButtons = {
  display: "flex",
  justifyContent: "center",
  gap: 20,
};

const navButton = {
  padding: "10px 20px",
  borderRadius: 20,
  border: "none",
  backgroundColor: "#2563eb",
  color: "white",
  fontWeight: "700",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
