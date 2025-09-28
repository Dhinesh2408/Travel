import React, { useState, useEffect } from 'react';
import './Map.css';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const touristPlaces = [
    {
      id: 1,
      name: "Sivaganga Palace",
      description: "Historic palace with royal architecture",
      coordinates: { lat: 9.8568, lng: 78.4818 },
      type: "heritage",
      icon: "🏛️"
    },
    {
      id: 2,
      name: "Karaikudi Temples",
      description: "Ancient temples with spiritual significance",
      coordinates: { lat: 10.0668, lng: 78.7833 },
      type: "spiritual",
      icon: "🕉️"
    },
    {
      id: 3,
      name: "Chettinad Mansions",
      description: "Traditional Chettinad architecture",
      coordinates: { lat: 10.0668, lng: 78.7833 },
      type: "heritage",
      icon: "🏘️"
    },
    {
      id: 4,
      name: "Karaikudi Nature Trail",
      description: "Beautiful nature walk and bird watching",
      coordinates: { lat: 10.1000, lng: 78.8000 },
      type: "nature",
      icon: "🌿"
    },
    {
      id: 5,
      name: "Agricultural Farms",
      description: "Traditional farming and rural experience",
      coordinates: { lat: 9.9000, lng: 78.6000 },
      type: "nature",
      icon: "🌾"
    },
  ];

  useEffect(() => {
    // Get user's current location
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
          // Default to Sivaganga center if location access denied
          setUserLocation({ lat: 9.8568, lng: 78.4818 });
        }
      );
    } else {
      // Default to Sivaganga center
      setUserLocation({ lat: 9.8568, lng: 78.4818 });
    }
  }, []);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="map-header">
          <h2>Explore Sivaganga District</h2>
          <p>Discover tourist attractions and plan your pickup location</p>
        </div>

        <div className="map-container">
          <div className="map-sidebar">
            <h3>Tourist Attractions</h3>
            <div className="places-list">
              {touristPlaces.map((place) => (
                <div
                  key={place.id}
                  className={`place-item ${selectedPlace?.id === place.id ? 'selected' : ''}`}
                  onClick={() => handlePlaceSelect(place)}
                >
                  <div className="place-icon">{place.icon}</div>
                  <div className="place-info">
                    <h4>{place.name}</h4>
                    <p>{place.description}</p>
                    <span className={`place-type ${place.type}`}>
                      {place.type.charAt(0).toUpperCase() + place.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="map-main">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-header-info">
                  <h3>Interactive Map</h3>
                  <p>Click on tourist places to see details</p>
                </div>
                
                <div className="map-visual">
                  <div className="map-grid">
                    {touristPlaces.map((place, index) => (
                      <div
                        key={place.id}
                        className={`map-marker ${place.type} ${selectedPlace?.id === place.id ? 'selected' : ''}`}
                        style={{
                          top: `${20 + (index * 15)}%`,
                          left: `${30 + (index % 3) * 20}%`
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
                    <h4>{selectedPlace.name}</h4>
                    <p>{selectedPlace.description}</p>
                    <div className="place-actions">
                      <button className="btn btn-primary">Get Directions</button>
                      <button className="btn btn-outline">Add to Itinerary</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="map-features">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Live Tracking</h3>
            <p>Track your pickup location in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Interactive Map</h3>
            <p>Explore all tourist attractions easily</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Easy Navigation</h3>
            <p>Get directions to any location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

