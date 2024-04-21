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
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162563.53384196718!2d-104.8002190193597!3d50.458696467976026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e40fba53deb%3A0x354a3296b77b54b1!2sRegina%2C%20SK!5e0!3m2!1sen!2sca!4v1713712667584!5m2!1sen!2sca"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            style={{ border: 0, width: '100%', height: '250px' }}  
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
