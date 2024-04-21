import React from 'react';
import Slider from 'react-slick';
import styles from './AboutUs.module.css';
import teamPhoto from '../assets/team.jpg';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.8)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.8)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Sask Photography</h1>
      <img src={teamPhoto} alt="Our Team" className={styles.teamPhoto}/>
      <p className={styles.intro}>
        At Sask Photography, we are dedicated to capturing life's precious moments through the lens. Our 
        experienced team specializes in creating stunning visual narratives.
      </p>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/your_video_id"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="About Sask Photography"
          className={styles.video}
        ></iframe>
      </div>
      <div className={styles.testimonials}>
        <h2 className={styles.subHeader}>What Our Clients Say</h2>
        <Slider {...settings}>
          <div className={styles.testimonialItem}>
            <p>"The best photography team we've worked with. Highly recommend!"</p>
            <strong>- Jane Doe</strong>
          </div>
          <div className={styles.testimonialItem}>
            <p>"Truly amazing service and stunning photographs. Sask Photography captured our day perfectly."</p>
            <strong>- John Smith</strong>
          </div>
          <div className={styles.testimonialItem}>
            <p>"Professional, talented, and so easy to work with. Couldn't be happier with the results!"</p>
            <strong>- Emily Johnson</strong>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AboutUs;
