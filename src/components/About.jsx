import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './About.css';

const About = () => {
  useLanguage();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <h2>About MAVL Travels</h2>
          <p>Your trusted partner for exploring Sivaganga district's rich heritage and natural beauty</p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="story-text">
              <h3>Our Story</h3>
              <p>
                MAVL Travels was founded with a passion for showcasing the hidden gems of Sivaganga district, 
                Tamil Nadu. We believe that every corner of our district has a story to tell, from the majestic 
                Sivaganga Palace to the serene nature trails and ancient temples.
              </p>
              <p>
                With years of experience in tourism and deep local knowledge, we have been helping visitors 
                discover the authentic beauty of our region. Our team consists of local experts who are not 
                just guides but storytellers, sharing the rich history and culture of Sivaganga.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="image-icon">🏛️</span>
                <p>Sivaganga Palace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

