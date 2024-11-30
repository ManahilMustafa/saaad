import React, { useRef } from 'react';
import './contact.css';
import Swal from 'sweetalert2'

const Contact = () => {
  // Create a ref to access the form
  const formRef = useRef(null);

  // form submission handler
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35963544-864c-4656-8dcf-6cccd3041695");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire("Message sent successfully!");
      
      // Reset the form fields
      formRef.current.reset();
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">Feel free to get in touch with me anytime.</p>

        <div className="contact-container">
          <div className="contact-header">
            <h1>Let’s Connect and Bring Your Idea to Life!</h1>
            <p>Have a question, a project idea, or just want to chat? I’m here to create high-quality, user-friendly apps designed to meet your needs perfectly.</p>
            <h3>Why Choose Me?</h3>
            <ul>
              <li>✔ User-Centric Design.</li>
              <li>✔ Clear Communication.</li>
              <li>✔ On-Time Project Delivery.</li>
              <li>✔ Dedicated Post-Launch Support.</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Reach out today!</h2>
            <form onSubmit={onSubmit} ref={formRef}>
              <div className="input-row">
                <input type="text" placeholder="Enter your name" name='name' required />
              </div>
              <input type="email" placeholder="Enter your email address" name='email' required />
              <input type="phone" placeholder="Enter your phone number" name='number' />
              <textarea placeholder="Your message" name='message' required></textarea>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
