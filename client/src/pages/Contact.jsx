import React from "react";
import "../style/Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="left-panel">
          <h1>Let’s Connect.</h1>
          <p>Whether it's coding, collaboration, or coffee ☕ — I'm always down to chat.</p>
        </div>

        <div className="right-panel">
          <a href="mailto:Lizbeth.vaz0915@gmail.com" className="contact-card" target="_blank" rel="noreferrer">
            <span>📧</span> Lizbeth.vaz0915@gmail.com
          </a>

          <a href="https://github.com/liz0612" className="contact-card" target="_blank" rel="noreferrer">
            <span>🐙</span> github.com/liz0612
          </a>

          <a href="https://www.linkedin.com/in/lizbeth-v-7929a42b7/" className="contact-card" target="_blank" rel="noreferrer">
            <span>💼</span> linkedin.com/in/lizbeth-v
          </a>

          <a href="tel:+19543937816" className="contact-card">
            <span>📱</span> +1 (954) 393-7816
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;