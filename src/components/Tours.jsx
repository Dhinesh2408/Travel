import React, { useState } from 'react';
import './Tours.css';

const Tours = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  const tourCategories = {
    heritage: {
      title: "Heritage Tours",
      tours: [
        {
          id: 1,
          name: "Sivaganga Palace Tour",
          duration: "4 hours",
          price: "₹2,500",
          description: "Explore the magnificent Sivaganga Palace and learn about the royal history",
          highlights: ["Palace Architecture", "Royal Artifacts", "Historical Gardens", "Museum Visit"],
          image: '/palace.jpeg',
        },
        {
          id: 2,
          name: "Karpaga vinayagar temple for lord ganesha",
          duration: "6 hours",
          price: "₹3,500",
          description: "Visit the most sacred and ancient temples in Sivaganga district",
          highlights: ["Karaikudi Temples", "Chettinad Architecture", "Spiritual Experience", "Cultural Heritage"],
         image: '/god1.jpeg',
        },
        {
          id: 3,
          name: "Temple of Tamil Thaai",
          duration: "1 hours",
          price: "₹2,000",
          description: "Discover the unique Temple for tamil and their architectural marvels",
          highlights: ["Tamil Thaai Temple", "Traditional Architecture", "Local Crafts", "Cultural Stories"],
          image: '/tamil.jpg',
        }
      ]
    },
    nature: {
      title: "Nature Tours",
      tours: [
        {
          id: 4,
          name: "Vettangudi Nature Trail",
          duration: "3 hours",
          price: "₹2,000",
          description: "Explore the natural beauty and wildlife around Karaikudi",
          highlights: ["Bird Watching", "Nature Photography", "Forest Walk", "Wildlife Spotting"],
         image: '/bird.jpg',
        },
        {
          id: 5,
          name: "Agricultural Farm Visit",
          duration: "4 hours",
          price: "₹2,500",
          description: "Experience traditional farming methods and local agriculture",
          highlights: ["Farm Tour", "Traditional Methods", "Local Produce", "Rural Life"],
          image: '/s11.png',
        },
      ]
    },
    spiritual: {
      title: "Spiritual Tours",
      tours: [
        {
          id: 6,
          name: "Temple Pilgrimage",
          duration: "8 hours",
          price: "₹4,000",
          description: "Complete spiritual journey through major temples",
          highlights: ["Multiple Temples", "Spiritual Guidance", "Blessings", "Cultural Rituals"],
          image: '/god2.jpeg',
        },
      ]
    }
  };

  const handleBookTour = (tour) => {
    // This will be connected to the booking system
    console.log('Booking tour:', tour);
    // Scroll to booking section
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tours" className="tours section">
      <div className="container">
        <div className="section-title">
          <h2>Explore Sivaganga District</h2>
          <p>Discover the rich heritage, natural beauty, and spiritual significance of our district</p>
        </div>

        <div className="tour-tabs">
          {Object.entries(tourCategories).map(([key, category]) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        <div className="tours-grid">
          {tourCategories[activeTab].tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <span className="tour-emoji">{tour.image}</span>
                <div className="tour-badge">
                  <span className="duration">{tour.duration}</span>
                </div>
              </div>
              
              <div className="tour-content">
                <h3>{tour.name}</h3>
                <p className="tour-description">{tour.description}</p>
                
                <div className="tour-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {tour.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="tour-footer">
                  <div className="tour-price">
                    <span className="price">{tour.price}</span>
                    <span className="per-person">per person</span>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleBookTour(tour)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tours-cta">
          <h3>Customize Your Experience</h3>
          <p>Don't see what you're looking for? We can create a custom tour package just for you!</p>
          <a href="#contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Tours;

