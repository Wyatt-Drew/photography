import React from 'react';
import styles from './Services.module.css';
import weddingIcon from '../assets/wedding-icon.png'; // Placeholder icon for wedding service
import portraitIcon from '../assets/portrait-icon.png'; // Placeholder icon for portrait service
import commercialIcon from '../assets/commercial-icon.png'; // Placeholder icon for commercial service

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.header}>Our Services</h1>
      <div className={styles.servicesList}>
        <div className={styles.service}>
          <img src={weddingIcon} alt="Wedding Photography" className={styles.icon}/>
          <h2>Wedding Photography</h2>
          <p>We capture the essence of your special day with elegance and creativity, creating memories that last a lifetime.</p>
        </div>
        <div className={styles.service}>
          <img src={portraitIcon} alt="Portrait Sessions" className={styles.icon}/>
          <h2>Portrait Sessions</h2>
          <p>From individual portraits to family shoots, we bring out the best in your personalities in every shot.</p>
        </div>
        <div className={styles.service}>
          <img src={commercialIcon} alt="Commercial Shoots" className={styles.icon}/>
          <h2>Commercial Shoots</h2>
          <p>Our commercial photography services enhance your brand and business, providing high-quality imagery for all professional needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
