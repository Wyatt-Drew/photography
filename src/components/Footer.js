import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: info@saskphotography.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
