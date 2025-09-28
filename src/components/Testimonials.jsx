import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './Testimonials.css';

const Testimonials = () => {
  useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Amazing experience with MAVL Travels! The Chettinad Palace tour was breathtaking. Our guide made history come alive.",
      avatar: "/person1.jpeg",
      tour: "Chettinad Heritage Tour"
    },
    {
      id: 2,
      name: "Lily",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Vettangudi Bird Sanctuary was paradise for nature lovers! The guide identified all species, perfect for photography enthusiasts.",
      avatar: "/person2.jpeg",
      tour: "Vettangudi Bird Sanctuary"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToTestimonial = (index) => setCurrentTestimonial(index);

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>

        <div className="testimonial-card">
          <div className="testimonial-text">{testimonials[currentTestimonial].text}</div>
          <div className="testimonial-author">
            <img
              src={testimonials[currentTestimonial].avatar}
              alt={testimonials[currentTestimonial].name}
              className="author-avatar"
            />
            <div className="author-info">
              <h4>{testimonials[currentTestimonial].name}</h4>
              <p className="author-location">{testimonials[currentTestimonial].location}</p>
              <span className="tour-name">{testimonials[currentTestimonial].tour}</span>
            </div>
          </div>

          <div className="testimonial-rating">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
          </div>
        </div>

        <div className="testimonial-navigation">
          <button className="nav-btn" onClick={prevTestimonial}>←</button>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
          <button className="nav-btn" onClick={nextTestimonial}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
