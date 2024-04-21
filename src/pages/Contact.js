import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.header}>Contact Us</h1>
      <div className={styles.contactContent}>
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@saskphotography.com</p>
          <p><strong>Address:</strong> 123 Photography Lane, Creative City, PC 12345</p>
          {/* Assuming Google Maps embed URL */}
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4860929980555!2d-79.39817348450208!3d43.65322647912133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d0d76faa49%3A0x840d9b1ba4621c4a!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1599832405626"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
