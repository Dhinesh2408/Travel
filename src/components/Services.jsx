import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './Services.css';

const Services = () => {
  useLanguage();

  const services = [
    {
      icon: "🏛️",
      title: "Heritage Tourism",
      description: "Explore Sivaganga's rich cultural heritage with guided tours of palaces, temples, and historical sites.",
      features: ["Palace Tours", "Temple Visits", "Historical Sites", "Cultural Heritage"],
      color: "var(--primary-500)",
      gradient: "linear-gradient(135deg, var(--primary-500), var(--primary-600))",
      image: "/palace.jpeg"
    },
    {
      title: "Vettangudi Bird Sanctuary",
      description: "Discover the natural beauty of Sivaganga district with eco-tourism and wildlife experiences.",
      features: ["Nature Trails", "Wildlife Spotting", "Bird Watching", "Eco Tourism"],
      color: "var(--secondary-500)",
      gradient: "linear-gradient(135deg, var(--secondary-500), var(--secondary-600))",
      image: "/bird.jpg"
    },
    {
      title: "Spiritual Journeys",
      description: "Embark on spiritual pilgrimages to ancient temples and sacred places in the district.",
      features: ["Temple Pilgrimages", "Meditation Retreats", "Spiritual Guidance", "Festival Tours"],
      color: "var(--accent-500)",
      gradient: "linear-gradient(135deg, var(--accent-500), var(--accent-600))",
      image: "/god1.jpeg"
    },
    {
      title: "Premium Transportation",
      description: "Comfortable and reliable transportation services for all your travel needs within Sivaganga.",
      features: ["Airport Transfers", "City Tours", "Inter-city Travel", "Custom Routes"],
      color: "var(--primary-600)",
      gradient: "linear-gradient(135deg, var(--primary-600), var(--primary-700))",
      image: "/suv.jpeg"
    },
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in local culture with traditional performances, crafts, and cuisine.",
      features: ["Cultural Shows", "Local Crafts", "Traditional Cuisine", "Festival Participation"],
      color: "var(--secondary-600)",
      gradient: "linear-gradient(135deg, var(--secondary-600), var(--secondary-700))",
      image: "/mansion.jpg"
    },
    {
      title: "Custom Packages",
      description: "Personalized tour packages designed according to your interests and preferences.",
      features: ["Tailored Itineraries", "Flexible Schedules", "Personal Guide", "Special Requests"],
      color: "var(--accent-600)",
      gradient: "linear-gradient(135deg, var(--accent-600), var(--accent-700))",
      image: "/cw.jpeg"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Premium Services</h2>
          <p className="lead">
            Discover the best of Sivaganga district with our comprehensive and personalized tourism services
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ '--service-color': service.color, '--service-gradient': service.gradient }}
            >
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What We Offer:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-actions">
                  <button className="btn btn-outline">Learn More</button>
                  <button className="btn btn-primary">Book Service</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Explore Sivaganga?</h3>
              <p>Let us create the perfect tourism experience tailored to your interests and schedule</p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;