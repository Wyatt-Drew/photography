import React from 'react';
import styles from './Gallery.module.css'; 
import wyattImage from '../assets/wyatt.jpg';


function Gallery() {
  const images = Array(9).fill(wyattImage); // Creating an array of 9 images for the grid
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <div key={index} className={styles.photoWrap}>
          <img src={img} alt="Gallery item" className={styles.photo} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
