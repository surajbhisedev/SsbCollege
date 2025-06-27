import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-page page">
    <h1>📩 Contact Us</h1>
    <p>If you have any questions, feedback, or inquiries, feel free to reach out using the form below.</p>

    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field" 
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don’t fill this out if you’re human: 
          <input name="bot-field" />
        </label>
      </p>

      <label>Name:</label>
      <input type="text" name="name" required placeholder="Your Full Name" />

      <label>Email:</label>
      <input type="email" name="email" required placeholder="your@email.com" />

      <label>Message:</label>
      <textarea name="message" required placeholder="Type your message here..." rows="5"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
