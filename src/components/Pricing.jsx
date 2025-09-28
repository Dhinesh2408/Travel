import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('heritage');

  const tourPackages = {
    heritage: {
      title: "Heritage Tours",
      icon: "🏛️",
      plans: [
        {
          name: "Sivaganga Palace Tour",
          duration: "4 hours",
          price: 2500,
          features: ["Palace Visit", "Museum Tour", "Historical Gardens", "Professional Guide", "Transportation"],
          popular: false
        },
        {
          name: "Ancient Temples Circuit",
          duration: "6 hours",
          price: 3500,
          features: ["Multiple Temples", "Spiritual Guide", "Cultural Heritage", "Transportation", "Refreshments"],
          popular: true
        },
        {
          name: "Chettinad Heritage Walk",
          duration: "5 hours",
          price: 3000,
          features: ["Chettinad Mansions", "Architecture Tour", "Local Crafts", "Cultural Stories", "Transportation"],
          popular: false
        }
      ]
    },
    nature: {
      title: "Nature Tours",
      icon: "🌿",
      plans: [
        {
          name: "Karaikudi Nature Trail",
          duration: "3 hours",
          price: 2000,
          features: ["Bird Watching", "Nature Photography", "Forest Walk", "Wildlife Spotting", "Guide"],
          popular: false
        },
        {
          name: "Agricultural Farm Visit",
          duration: "4 hours",
          price: 2500,
          features: ["Farm Tour", "Traditional Methods", "Local Produce", "Rural Experience", "Transportation"],
          popular: true
        },
        {
          name: "Sunset Point Adventure",
          duration: "2 hours",
          price: 1500,
          features: ["Sunset Views", "Photography", "Peaceful Environment", "Transportation", "Snacks"],
          popular: false
        }
      ]
    },
    spiritual: {
      title: "Spiritual Tours",
      icon: "🙏",
      plans: [
        {
          name: "Temple Pilgrimage",
          duration: "8 hours",
          price: 4000,
          features: ["Multiple Temples", "Spiritual Guide", "Blessings", "Cultural Rituals", "Transportation"],
          popular: true
        },
        {
          name: "Meditation Retreat",
          duration: "6 hours",
          price: 3000,
          features: ["Meditation Sessions", "Spiritual Guidance", "Peaceful Environment", "Transportation", "Meals"],
          popular: false
        },
        {
          name: "Festival Experience",
          duration: "5 hours",
          price: 2800,
          features: ["Festival Participation", "Cultural Experience", "Local Traditions", "Transportation", "Refreshments"],
          popular: false
        }
      ]
    }
  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-title">
          <h2>Tour Package Pricing</h2>
          <p>Choose from our carefully crafted tour packages for exploring Sivaganga district</p>
        </div>

        <div className="pricing-tabs">
          {Object.entries(tourPackages).map(([key, category]) => (
            <button
              key={key}
              className={`tab-button ${selectedPlan === key ? 'active' : ''}`}
              onClick={() => setSelectedPlan(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        <div className="pricing-grid">
          {tourPackages[selectedPlan].plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="duration">{plan.duration}</div>
              </div>
              <div className="card-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">per person</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="btn btn-primary">Book Now</a>
            </div>
          ))}
        </div>

        <div className="pricing-info">
          <div className="info-grid">
            <div className="info-card">
              <h3>What's Included?</h3>
              <ul>
                <li>Professional tour guide</li>
                <li>Comfortable transportation</li>
                <li>Entry fees to attractions</li>
                <li>Refreshments (where mentioned)</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Additional Services</h3>
              <ul>
                <li>Photography services (+₹500)</li>
                <li>Video documentation (+₹1000)</li>
                <li>Custom itinerary (+₹2000)</li>
                <li>Private group tours</li>
                <li>Multi-day packages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-cta">
          <h3>Need a Custom Package?</h3>
          <p>We can create a personalized tour package based on your interests and requirements</p>
          <a href="#contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
