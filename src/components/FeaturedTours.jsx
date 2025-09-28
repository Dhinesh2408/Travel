import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './FeaturedTours.css';

const FeaturedTours = () => {
  useLanguage();
  const [activeCategory, setActiveCategory] = useState('heritage');
  const [setSelectedTour] = useState(null);

  const tourCategories = {
    heritage: {
      title: "Heritage & Culture",
      icon: "🏛️",
      description: "Explore the rich cultural heritage and historical monuments",
      color: "var(--primary-500)"
    },
    nature: {
      title: "Nature & Wildlife",
      icon: "🌿",
      description: "Discover pristine nature trails and wildlife experiences",
      color: "var(--secondary-500)"
    },
    spiritual: {
      title: "Spiritual Journeys",
      icon: "🙏",
      description: "Embark on spiritual pilgrimages and temple visits",
      color: "var(--accent-500)"
    }
  };

  const tours = [
    {
      id: 1,
      category: 'heritage',
      name: "Sivaganga Palace Experience",
      duration: "4 hours",
      rating: 4.9,
      reviews: 127,
      description: "Explore the magnificent Sivaganga Palace and learn about royal history",
      highlights: ["Palace Architecture", "Royal Artifacts", "Historical Gardens", "Museum Visit"],
      image: '/t1.jpeg',
      popular: true,
      includes: ["Professional Guide", "Transportation", "Entry Fees", "Refreshments"]
    },
    {
      id: 2,
      category: 'heritage',
      name: "Chettinad Heritage Walk",
      duration: "5 hours",
      rating: 4.8,
      reviews: 89,
      description: "Discover the unique Chettinad mansions and their architectural marvels",
      highlights: ["Chettinad Mansions", "Traditional Architecture", "Local Crafts", "Cultural Stories"],
      image: '/mansion.jpg',
      popular: false,
      includes: ["Expert Guide", "Transportation", "Cultural Show", "Local Snacks"]
    },
    {
      id: 3,
      category: 'nature',
      name: "Vettangudi Nature Trail",
      duration: "3 hours",
      rating: 4.7,
      reviews: 95,
      description: "Explore the natural beauty and wildlife around Karaikudi",
      highlights: ["Bird Watching", "Nature Photography", "Forest Walk", "Wildlife Spotting"],
      image: '/bird.jpg',
      popular: true,
      includes: ["Nature Guide", "Transportation", "Refreshments"]
    },
    {
      id: 4,
      category: 'nature',
      name: "Agriculture farms",
      duration: "3 hours",
      rating: 4.7,
      reviews: 95,
      description: "Explore the natural beauty and agriculture fields around Karaikudi",
      highlights: ["Peaceful Environment", "Nature Photography", "Field walks", "Wildlife Spotting"],
      image: '/s11.png',
      popular: true,
      includes: ["Local Guide","Transportation", "Refreshments"]
    },
    {
      id: 5,
      category: 'spiritual',
      name: "Temple Pilgrimage Circuit",
      duration: "8 hours",
      rating: 4.9,
      reviews: 156,
      description: "Complete spiritual journey through major temples",
      highlights: ["Multiple Temples", "Spiritual Guidance", "Blessings", "Cultural Rituals"],
      image: '/god1.jpeg',
      popular: true,
      includes: ["Spiritual Guide", "Transportation", "Prasad", "Traditional Lunch"]
    },
    {
      id: 6,
      category: 'spiritual',
      name: "Meditation Retreat",
      duration: "6 hours",
      rating: 4.8,
      reviews: 78,
      description: "Find inner peace in serene temple surroundings",
      highlights: ["Meditation Sessions", "Spiritual Guidance", "Peaceful Environment", "Mindfulness"],
      image: '/god2.jpeg',
      popular: false,
      includes: ["Meditation Guide", "Transportation", "Healthy Meals", "Yoga Mat"]
    }
  ];

  const filteredTours = tours.filter(tour => tour.category === activeCategory);

  const handleBookTour = (tour) => {
    setSelectedTour(tour);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tours" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Discover Sivaganga District</h2>
          <p className="lead">
            Experience the perfect blend of heritage, nature, and spirituality with our carefully curated tour packages
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tour-categories">
          {Object.entries(tourCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{ '--category-color': category.color }}
            >
              <span className="category-icon">{category.icon}</span>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="tours-grid">
          {filteredTours.map((tour) => (
            <div key={tour.id} className={`tour-card ${tour.popular ? 'popular' : ''}`}>
              {tour.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="tour-image">
                <img src={tour.image} alt={tour.name} />
                <div className="tour-badges">
                  <span className="duration-badge">{tour.duration}</span>
                  <span className="rating-badge">⭐ {tour.rating} ({tour.reviews})</span>
                </div>
              </div>

              <div className="tour-content">
                <div className="tour-header">
                  <h3 className="tour-name">{tour.name}</h3>
                  <div className="tour-duration">
                    <span className="duration-text">{tour.duration}</span>
                  </div>
                </div>

                <p className="tour-description">{tour.description}</p>

                <div className="tour-highlights">
                  <h4>What's Included:</h4>
                  <ul>
                    {tour.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="tour-features">
                  <h4>Highlights:</h4>
                  <div className="features-tags">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="feature-tag">{highlight}</span>
                    ))}
                  </div>
                </div>

                <div className="tour-actions">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => handleBookTour(tour)}
                  >
                    Book Now
                  </button>
                  <button className="btn btn-outline">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="custom-package-cta">
          <div className="cta-content">
            <h3>Don't See What You're Looking For?</h3>
            <p>We can create a custom tour package tailored to your interests and schedule</p>
            <div className="cta-actions">
              <button className="btn btn-secondary btn-lg">
                Create Custom Package
              </button>
              <button className="btn btn-outline">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
