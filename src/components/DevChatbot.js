import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What languages do you code in?",
    answer: "I primarily code in Python, JavaScript (React/Node.js), and I am familiar with C++ and Java.",
  },
  {
    question: "Tell me about your best project.",
    answer: "One of my best projects is a MERN stack chatbot with AI integration that helps users learn programming.",
  },
  {
    question: "Are you open to collaborations?",
    answer: "Yes! I am always excited to collaborate on innovative software projects.",
  },
  {
    question: "How do you approach problem-solving?",
    answer: "I break down problems into smaller parts, research, then systematically implement and test each step.",
  },
];

export default function DevChatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about my skills, projects or programming." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((msgs) => [...msgs, { from: "user", text: input }]);

    // Simple keyword matching in FAQs
    const userText = input.toLowerCase();

    const matchedFaq = faqs.find(
      (faq) =>
        faq.question.toLowerCase().includes(userText) ||
        userText.includes(faq.question.toLowerCase())
    );

    const botReply = matchedFaq
      ? matchedFaq.answer
      : "Sorry, I don't have an answer for that yet. Try asking about my skills or projects.";

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Chat with My Dev Assistant</h2>
      <div style={chatBoxStyle}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...messageStyle,
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#2563eb" : "#334155",
              color: "white",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <input
        type="text"
        style={inputStyle}
        placeholder="Type a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button style={sendButtonStyle} onClick={handleSend}>
        Send
      </button>
    </section>
  );
}

const containerStyle = {
  maxWidth: 600,
  margin: "40px auto",
  backgroundColor: "#1e293b",
  borderRadius: 12,
  padding: 30,
  boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  color: "#60a5fa",
  marginBottom: 20,
  fontWeight: 700,
  fontSize: "1.6rem",
};

const chatBoxStyle = {
  display: "flex",
  flexDirection: "column",
  maxHeight: 320,
  overflowY: "auto",
  marginBottom: 15,
  padding: 15,
  backgroundColor: "#273549",
  borderRadius: 12,
};

const messageStyle = {
  maxWidth: "70%",
  padding: 12,
  marginBottom: 8,
  borderRadius: 12,
  fontSize: "1rem",
  lineHeight: 1.3,
};

const inputStyle = {
  width: "calc(100% - 90px)",
  padding: 12,
  fontSize: "1rem",
  borderRadius: 10,
  border: "none",
  outline: "none",
};

const sendButtonStyle = {
  width: 70,
  marginLeft: 10,
  padding: "12px 0",
  borderRadius: 10,
  backgroundColor: "#2563eb",
  border: "none",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};
