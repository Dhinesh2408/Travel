import React from 'react';
import './Fleet.css';

const Fleet = () => {
  const vehicles = [
    { 
      name: 'Sedan', 
      capacity: '4 passengers',
      features: ['AC', 'Comfortable Seats', 'GPS Navigation', 'Professional Driver'],
      icon: '🚗',
      description: 'Perfect for small groups and comfortable city tours',
      image: '/sedan.jpeg'
    },
    { 
      name: 'MPV', 
      capacity: '6 passengers',
      features: ['AC', 'Spacious Interior', 'GPS Navigation', 'Professional Driver', 'Extra Luggage Space'],
      icon: '🚙',
      description: 'Ideal for families and groups exploring heritage sites',
      image: '/suv.jpeg'
    },
    { 
      name: 'Tata Ace', 
      capacity: 'Load Vehicle',
      features: ['GPS Navigation', 'Professional Driver', 'Luggage Space','Transport Goods','Timely Delivery'],
      icon: '🚐',
      description: 'Great for Medium level load transports',
      image: '/minivan.jpeg'
    },
  ];

  return (
    <section id="fleet" className="fleet section">
      <div className="container">
        <div className="section-title">
          <h2>Our Vehicle Fleet</h2>
          <p className="lead">
            Choose from our well-maintained fleet of vehicles for your Sivaganga district exploration
          </p>
        </div>

        <div className="fleet-grid">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <div className="vehicle-image">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder">
                  <span className="vehicle-icon">{vehicle.icon}</span>
                </div>
                <div className="vehicle-badge">
                  <span className="capacity-badge">{vehicle.capacity}</span>
                </div>
              </div>
              
              <div className="vehicle-content">
                <h3>{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                
                <div className="vehicle-features">
                  <h4>Features:</h4>
                  <ul>
                    {vehicle.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="vehicle-actions">
                  <button className="btn btn-outline">View Details</button>
                  <button className="btn btn-primary">Book This Vehicle</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fleet-info">
        </div>
      </div>
    </section>
  );
};

export default Fleet;