import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: t('heroTitle1'),
      //subtitle: t('heroSubtitle1'),
      backgroundImage: "/siv.png",
      cta: t('heroCta1'),
      description: "Experience the grandeur of Sivaganga Palace and ancient temples",
    },
    {
      title: t('heroTitle2'),
      //subtitle: t('heroSubtitle2'),
      backgroundImage: "/s11.png",
      cta: t('heroCta2'),
      description: "Discover pristine nature trails and wildlife in their natural habitat",
    },
    {
      title: t('heroTitle3'),
      //subtitle: t('heroSubtitle3'),
      backgroundImage: "/s12.png",
      cta: t('heroCta3'),
      description: "Find inner peace through spiritual journeys and temple visits",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-slides">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">{slide.cta}</button>
                <button className="btn btn-outline">{t('exploreMore')}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      {/*<div className="hero-indicators">
        {heroSlides.map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>*/}
    </section>
  );
};

export default Hero;
