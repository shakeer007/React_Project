import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <span className="info-emoji">📍</span>
            <h3>Visit us</h3>
            <p>
              123 React Street
              <br />
              WebDev City, 90210
            </p>
          </div>
          <div className="info-card">
            <span className="info-emoji">📧</span>
            <h3>Email</h3>
            <p>hello@reacthookspro.com</p>
          </div>
          <div className="info-card">
            <span className="info-emoji">📱</span>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
          {submitted && (
            <div className="success-message">✅ Message sent! (Demo)</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
