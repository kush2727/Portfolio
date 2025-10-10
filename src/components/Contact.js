import React, { useState, useRef } from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";
import emailjs from "@emailjs/browser";

// No-hover link style handled by rowLink; no separate interactive link needed

// Request to Connect form section with EmailJS integration
function RequestConnectForm() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Extract form values
    const formData = new FormData(formRef.current);
    const subject = formData.get("subject");
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    // EmailJS config
    const serviceId = "service_dsd6mx6";
    const adminTemplateId = "template_appe17b"; // admin notification (Contact Us)
    const userAutoReplyTemplateId = "template_nb44f8h"; // auto-reply to sender
    const publicKey = "Kt3WSbYgBrZOZW_-D";
    const adminEmail = "kushwanth178@gmail.com";

    try {
      if (!senderEmail || typeof senderEmail !== "string" || !senderEmail.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }

      // 1) Admin notification (Contact Us template)
      const adminResult = await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          subject,
          title: subject, // for templates using {{title}}
          message,
          sender_email: senderEmail,
          email: senderEmail, // for templates using {{email}}
          reply_to: senderEmail,
          // If your template supports dynamic recipient, also pass to_email: adminEmail
        },
        publicKey
      );

      // 2) User auto-reply (Auto Reply template): only attempt if sender email looks valid
      let userResult = null;
      try {
        userResult = await emailjs.send(
          serviceId,
          userAutoReplyTemplateId,
          {
            subject,
            title: subject,
            message,
            sender_email: adminEmail,
            email: senderEmail, // Auto-reply template expects {{email}}
            reply_to: adminEmail,
          },
          publicKey
        );
      } catch (userErr) {
        console.warn("User auto-reply failed; check template allows dynamic recipient (to_email).", userErr);
      }

      console.log("Admin Email Sent:", adminResult);
      if (userResult) console.log("User Auto-reply Sent:", userResult);

      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      const errorMessage = err?.text || err?.message || JSON.stringify(err);
      setError("Failed to send message: " + errorMessage);
    }
  };

  return (
    <div style={formSectionStyle}>
      <h3 style={{ color: "#60a5fa", marginBottom: 16 }}>Request to Connect</h3>
      <form ref={formRef} onSubmit={handleSubmit} style={formStyle} autoComplete="off">
        <input type="text" name="subject" placeholder="Subject" style={inputStyle} required />
        <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
        <textarea name="message" placeholder="Your Message" rows={4} style={textareaStyle} required />
        <button type="submit" style={submitBtnStyle}>Send Request</button>

        {error && <p style={{ color: "red", wordBreak: "break-word" }}>{error}</p>}
        {submitted && <p style={successMsgStyle}>Message submitted! Thank you 💬</p>}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <ScrollRevealWrapper>
      <section id="contact" style={sectionStyle}>
        <h2>Contact Me</h2>

        <div style={listContainer}>
          <a href="mailto:kushwanth178@gmail.com" style={rowLink}>
            <span style={iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#60a5fa" strokeWidth="1.6"/><path d="M22 7 13 13a2 2 0 0 1-2 0L2 7" stroke="#60a5fa" strokeWidth="1.6"/></svg>
            </span>
            <span style={rowText}>kushwanth178@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/kushwanthsai/" style={rowLink} target="_blank" rel="noreferrer">
            <span style={iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.329-.027-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.371 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM3.56 20.452h3.558V9H3.56v11.452z"/></svg>
            </span>
            <span style={rowText}>linkedin.com/in/kushwanthsai</span>
          </a>

          <a href="https://github.com/kush2727" style={rowLink} target="_blank" rel="noreferrer">
            <span style={iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#e0e0e0" d="M12 .5a11.5 11.5 0 0 0-3.637 22.417c.576.106.786-.25.786-.556 0-.275-.01-1.005-.016-1.974-3.2.695-3.876-1.542-3.876-1.542-.524-1.332-1.28-1.688-1.28-1.688-1.046-.715.08-.7.08-.7 1.157.081 1.766 1.188 1.766 1.188 1.028 1.762 2.697 1.253 3.354.958.105-.745.402-1.253.73-1.541-2.555-.291-5.242-1.278-5.242-5.686 0-1.255.45-2.281 1.187-3.086-.12-.292-.515-1.468.113-3.06 0 0 .967-.31 3.17 1.18a10.98 10.98 0 0 1 2.886-.389c.98.005 1.968.133 2.893.389 2.2-1.49 3.166-1.18 3.166-1.18.63 1.592.236 2.768.116 3.06.74.805 1.185 1.831 1.185 3.086 0 4.42-2.693 5.392-5.257 5.678.412.357.78 1.062.78 2.142 0 1.546-.014 2.792-.014 3.172 0 .309.206.669.794.555A11.503 11.503 0 0 0 12 .5z"/></svg>
            </span>
            <span style={rowText}>github.com/kush2727</span>
          </a>

          <a href="tel:+919885990979" style={rowLink}>
            <span style={iconWrap} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="#60a5fa" strokeWidth="1.6"/></svg>
            </span>
            <span style={rowText}>+91 98859 90979</span>
          </a>
        </div>

        {/* New "Request to Connect" Form */}
        <RequestConnectForm />
      </section>
    </ScrollRevealWrapper>
  );
}

// --- Styling ---
const sectionStyle = {
  marginBottom: "50px",
  background: "#1e293b",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 5px 12px rgba(0,0,0,0.7)",
  color: "#e0e0e0",
};
const listContainer = { display: "flex", flexDirection: "column", gap: 18, marginTop: 12 };
const rowLink = { display: "flex", alignItems: "center", gap: 12, color: "#60a5fa", textDecoration: "none" };
const iconWrap = { width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#0b1220", borderRadius: 6 };
const rowText = { color: "#e0e0e0" };
const linkStyle = {
  color: "#4a90e2",
  textDecoration: "none",
  transition: "color 0.3s ease, transform 0.3s ease",
  display: "inline-block",
  cursor: "pointer",
};
const linkHover = { color: "#1e60d9", transform: "scale(1.05)" };
const formSectionStyle = {
  marginTop: 30,
  padding: 22,
  background: "#233048",
  borderRadius: 9,
  boxShadow: "0 2px 8px #0006",
  color: "#e0e0e0",
  maxWidth: 400,
};
const formStyle = { display: "flex", flexDirection: "column", gap: 15 };
const inputStyle = {
  border: "1px solid #334155",
  borderRadius: 6,
  padding: "12px",
  background: "#1e293b",
  color: "#e0e0e0",
  fontSize: "1rem",
};
const textareaStyle = { ...inputStyle, minHeight: 72, resize: "vertical" };
const submitBtnStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 0",
  borderRadius: 25,
  fontWeight: "700",
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: 8,
  transition: "background 0.3s",
};
const successMsgStyle = {
  color: "#22d3ee",
  marginTop: 14,
  fontWeight: "600",
};
