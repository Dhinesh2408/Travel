import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './Destinations.css';

const Destinations = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
    {
      id: 1,
      name: "Sivaganga Palace",
      category: "heritage",
      description: "A magnificent palace showcasing royal architecture and historical significance",
      image: '/palace.jpeg',
      highlights: ["Royal Architecture", "Historical Museum", "Beautiful Gardens", "Cultural Heritage"],
      duration: "2-3 hours",
      bestTime: "Morning",
      rating: 4.8
    },
    {
      id: 2,
      name: "Karaikudi Temples",
      category: "spiritual",
      description: "One and only temple for tamil thaai with intricate architecture and spiritual significance",
      image: '/tamil.jpg',
      highlights: ["Ancient Architecture", "Spiritual Experience", "Cultural Rituals", "Peaceful Environment"],
      duration: "3-4 hours",
      bestTime: "Early Morning",
      rating: 4.9
    },
    {
      id: 3,
      name: "Chettinad Mansions",
      category: "heritage",
      description: "Traditional Chettinad mansions with unique architectural features",
      image: '/mansion.jpeg',
      highlights: ["Traditional Architecture", "Local Crafts", "Cultural Stories", "Photography"],
      duration: "2-3 hours",
      bestTime: "Afternoon",
      rating: 4.7
    },
    {
      id: 4,
      name: "Karaikudi Nature Trail",
      category: "nature",
      description: "Beautiful nature walk with opportunities for bird watching and wildlife spotting",
      image: '/bird.jpg',
      highlights: ["Bird Watching", "Nature Photography", "Wildlife Spotting", "Fresh Air"],
      duration: "2-3 hours",
      bestTime: "Early Morning",
      rating: 4.6
    },
    {
      id: 5,
      name: "Agricultural Farms",
      category: "nature",
      description: "Experience traditional farming methods and rural life",
      image: '/s11.png',
      highlights: ["Farm Tour", "Traditional Methods", "Local Produce", "Rural Experience"],
      duration: "3-4 hours",
      bestTime: "Morning",
      rating: 4.5
    },
    {
      id: 6,
      name: "Karpaga Vinayagar temple for lord ganesha",
      category: "spiritual",
      description: "Complete spiritual journey through major temples in the district",
      image: '/god1.jpeg',
      highlights: ["Multiple Temples", "Spiritual Guidance", "Blessings", "Cultural Rituals"],
      duration: "6-8 hours",
      bestTime: "Full Day",
      rating: 4.9
    },
    {
      id: 7,
      name: "Swarna Kaaleeshwarar temple for lord shiva",
      category: "spiritual",
      description: "Find inner peace in serene temple surroundings",
      image: '/god2.jpeg',
      highlights: ["Historical stories", "Spiritual Guidance", "Peaceful Environment", "Mindfulness"],
      duration: "2-3 hours",
      bestTime: "Morning",
      rating: 4.7
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations'},
    { id: 'heritage', name: 'Heritage'},
    { id: 'nature', name: 'Nature'},
    { id: 'spiritual', name: 'Spiritual'}
  ];

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <section id="destinations" className="destinations section">
      <div className="container">
        <div className="destinations-header">
          <h2>Explore Our Destinations</h2>
          <p>Discover the most beautiful and significant places in Sivaganga district</p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <span className="destination-icon">{destination.image}</span>
                <div className="card-badge">
                  <span className="rating">⭐ {destination.rating}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
                
                <div className="destination-info">
                  <div className="info-item">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{destination.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Best Time:</span>
                    <span className="info-value">{destination.bestTime}</span>
                  </div>
                </div>

                <div className="highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions">
                  <a href="#booking" className="btn btn-primary">Book Tour</a>
                  <a href="#map" className="btn btn-outline">View on Map</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-cta">
          <h3>Can't Find What You're Looking For?</h3>
          <p>We can create a custom itinerary based on your interests and preferences</p>
          <a href="#contact" className="btn btn-secondary">Plan Custom Tour</a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

