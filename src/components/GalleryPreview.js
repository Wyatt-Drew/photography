import React from 'react';
import styles from './GalleryPreview.module.css';
import sampleImage1 from '../assets/sample1.jpg'; 
import sampleImage2 from '../assets/sample2.jpg';
import sampleImage3 from '../assets/sample3.jpg';

function GalleryPreview() {
  return (
    <div className={styles.gallery}>
      <img src={sampleImage1} alt="Gallery Preview" className={styles.image}/>
      <img src={sampleImage2} alt="Gallery Preview" className={styles.image}/>
      <img src={sampleImage3} alt="Gallery Preview" className={styles.image}/>
    </div>
  );
}

export default GalleryPreview;
