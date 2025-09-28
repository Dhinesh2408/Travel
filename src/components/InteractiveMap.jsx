import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './InteractiveMap.css';

const InteractiveMap = () => {
  useLanguage();
  const [userLocation, setUserLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const touristPlaces = [
    {
      id: 1,
      name: "Sivaganga Palace",
      description: "Historic palace with royal architecture and beautiful gardens",
      coordinates: { lat: 9.8568, lng: 78.4818 },
      type: "heritage",
      icon: "🏛️",
      rating: 4.9,
      duration: "2-3 hours",
      bestTime: "Morning",
      highlights: ["Royal Architecture", "Historical Museum", "Beautiful Gardens", "Cultural Heritage"]
    },
    {
      id: 2,
      name: "Kanadukathan",
      description: "Small town famous for Chettinad style houses and local cuisine. Features majestic houses with temple-like entrances and traditional water harvesting techniques.",
      coordinates: { lat: 10.0668, lng: 78.7833 },
      type: "heritage",
      icon: "🏘️",
      rating: 4.8,
      duration: "3-4 hours",
      bestTime: "Morning",
      highlights: ["Chettinad Architecture", "Local Cuisine", "Water Harvesting", "Traditional Houses"]
    },
    {
      id: 3,
      name: "Chettinadu Palace",
      description: "Lavish palace built in 1912 by Dr. Annamalai Chettiyar. Features imported materials from East Asia and Europe, with 1900 sq.ft area including 9 car sheds and a lift.",
      coordinates: { lat: 10.0668, lng: 78.7833 },
      type: "heritage",
      icon: "🏰",
      rating: 4.9,
      duration: "2-3 hours",
      bestTime: "9:00 AM - 5:00 PM",
      highlights: ["Palatial Architecture", "Antiques", "Historical Significance", "Teak Pillars"],
      visitingHours: "9:00 AM - 5:00 PM (All days)",
      phone: "0423-2533333"
    },
    {
      id: 4,
      name: "Athangudi",
      description: "Village famous for hand-made terracotta tiles. Located 24km from Karaikudi, known for unique tile patterns and custom designs for houses and lawns.",
      coordinates: { lat: 10.1000, lng: 78.8000 },
      type: "heritage",
      icon: "🏺",
      rating: 4.6,
      duration: "2-3 hours",
      bestTime: "Morning",
      highlights: ["Terracotta Tiles", "Handicrafts", "Custom Designs", "Traditional Art"]
    },
    {
      id: 5,
      name: "Aayiram Jannal Veedu",
      description: "Famous house with 1000 windows built in 1941. Features 25 rooms, 5 halls, 20 doors and 1000 windows on 20,000 sq.ft area.",
      coordinates: { lat: 9.9000, lng: 78.6000 },
      type: "heritage",
      icon: "🏠",
      rating: 4.7,
      duration: "1-2 hours",
      bestTime: "Afternoon",
      highlights: ["Unique Architecture", "1000 Windows", "Historical Building", "Photography"]
    },
    {
      id: 6,
      name: "Kaviarasu Kannadasan Manimandapam",
      description: "Memorial built for famous Tamil poet Kavi Arasar Kannadasan. Honors the revolutionary writer who contributed to Tamil literature and film industry.",
      coordinates: { lat: 9.8000, lng: 78.7000 },
      type: "heritage",
      icon: "📚",
      rating: 4.5,
      duration: "1 hour",
      bestTime: "Morning",
      highlights: ["Literary Heritage", "Tamil Culture", "Poet Memorial", "Cultural Significance"]
    },
    {
      id: 7,
      name: "Vettangudi Bird Sanctuary",
      description: "40-hectare sanctuary near Thirupathur, home to winter migratory birds. Breeding habitat for Grey Herons, Darters, Spoonbills and many other species.",
      coordinates: { lat: 9.7500, lng: 78.5000 },
      type: "nature",
      icon: "🦅",
      rating: 4.8,
      duration: "3-4 hours",
      bestTime: "November - February",
      highlights: ["Migratory Birds", "Bird Watching", "Nature Photography", "Wildlife"],
      bestSeason: "November - February"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Places', icon: '🌟', color: 'var(--gray-500)' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️', color: 'var(--primary-500)' },
    { id: 'nature', name: 'Nature', icon: '🌿', color: 'var(--secondary-500)' },
    { id: 'spiritual', name: 'Spiritual', icon: '🙏', color: 'var(--accent-500)' }
  ];

  const filteredPlaces = activeFilter === 'all' 
    ? touristPlaces 
    : touristPlaces.filter(place => place.type === activeFilter);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Error getting location:', error);
          setUserLocation({ lat: 9.8568, lng: 78.4818 });
        }
      );
    } else {
      setUserLocation({ lat: 9.8568, lng: 78.4818 });
    }
  }, []);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <section id="map" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Explore Sivaganga District</h2>
          <p className="lead">
            Discover tourist attractions and plan your perfect itinerary with our interactive map
          </p>
        </div>

        <div className="map-container">
          <div className="map-sidebar">
            <div className="sidebar-header">
              <h3>Tourist Attractions</h3>
              <p>Click on any place to see details and plan your visit</p>
            </div>

            <div className="filter-tabs">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                  style={{ '--filter-color': filter.color }}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>

            <div className="places-list">
              {filteredPlaces.map((place) => (
                <div
                  key={place.id}
                  className={`place-item ${selectedPlace?.id === place.id ? 'selected' : ''}`}
                  onClick={() => handlePlaceSelect(place)}
                >
                  <div className="place-icon">{place.icon}</div>
                  <div className="place-info">
                    <h4>{place.name}</h4>
                    <p>{place.description}</p>
                    <div className="place-meta">
                      <span className="rating">⭐ {place.rating}</span>
                      <span className="duration">⏱️ {place.duration}</span>
                      <span className="best-time">🕐 {place.bestTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="map-main">
            <div className="map-visual">
              <div className="map-header">
                <h3>Interactive Map</h3>
                <p>Explore all tourist attractions in Sivaganga district</p>
              </div>
              
              <div className="map-grid">
                {filteredPlaces.map((place, index) => (
                  <div
                    key={place.id}
                    className={`map-marker ${place.type} ${selectedPlace?.id === place.id ? 'selected' : ''}`}
                    style={{
                      top: `${15 + (index * 12)}%`,
                      left: `${25 + (index % 3) * 25}%`
                    }}
                    onClick={() => handlePlaceSelect(place)}
                  >
                    <span className="marker-icon">{place.icon}</span>
                    <span className="marker-name">{place.name}</span>
                  </div>
                ))}
                
                {userLocation && (
                  <div className="user-location">
                    <span className="location-icon">📍</span>
                    <span className="location-text">Your Location</span>
                  </div>
                )}
              </div>
            </div>

            {selectedPlace && (
                <div className="place-details">
                <div className="details-header">
                  <span className="place-icon-large">{selectedPlace.icon}</span>
                  <div className="place-title">
                    <h4>{selectedPlace.name}</h4>
                    <div className="place-rating">
                      <span>⭐ {selectedPlace.rating}</span>
                      <span>⏱️ {selectedPlace.duration}</span>
                      <span>🕐 {selectedPlace.bestTime}</span>
                    </div>
                  </div>
                </div>
                
                <p className="place-description">{selectedPlace.description}</p>
                
                {(selectedPlace.visitingHours || selectedPlace.phone || selectedPlace.bestSeason) && (
                  <div className="place-info">
                    {selectedPlace.visitingHours && (
                      <div className="info-item">
                        <span className="info-label">Visiting Hours:</span>
                        <span className="info-value">{selectedPlace.visitingHours}</span>
                      </div>
                    )}
                    {selectedPlace.phone && (
                      <div className="info-item">
                        <span className="info-label">Phone:</span>
                        <span className="info-value">{selectedPlace.phone}</span>
                      </div>
                    )}
                    {selectedPlace.bestSeason && (
                      <div className="info-item">
                        <span className="info-label">Best Season:</span>
                        <span className="info-value">{selectedPlace.bestSeason}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="place-highlights">
                  <h5>Highlights:</h5>
                  <div className="highlights-tags">
                    {selectedPlace.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>
                
                <div className="place-actions">
                  <button className="btn btn-primary">Get Directions</button>
                  <button className="btn btn-outline">Add to Itinerary</button>
                  <button className="btn btn-secondary">Book Tour</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="map-features">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Live Tracking</h3>
            <p>Track your pickup location in real-time with GPS integration</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Interactive Map</h3>
            <p>Explore all tourist attractions with detailed information and photos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Easy Navigation</h3>
            <p>Get turn-by-turn directions to any location in the district</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
