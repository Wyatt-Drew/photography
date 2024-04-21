import React from 'react';
import styles from './Home.module.css';
import heroImage from '../assets/hero.jpg';
import GalleryPreview from '../components/GalleryPreview'; 

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img src={heroImage} alt="Hero" className={styles.heroImage}/>
        <div className={styles.heroText}>
          <h1>Capturing Moments That Matter</h1>
          <p>Your special moments deserve to be immortalized with the beauty and professionalism they deserve.</p>
          <button className={styles.ctaButton}>Book Your Session</button>
        </div>
      </section>
      <section className={styles.about}>
        <h2>About Sask Photography</h2>
        <p>We specialize in wedding photography, portrait sessions, and commercial shoots, ensuring high-quality, memorable captures.</p>
      </section>
      <section className={styles.galleryPreview}>
        <h2>Gallery</h2>
        <p>Take a look at some of our stunning works.</p>
        <GalleryPreview />
      </section>
    </div>
  );
}

export default Home;
