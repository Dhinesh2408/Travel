import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import './BookingForm.css';

const BookingForm = () => {
  useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    vehicleType: 'Sedan',
    passengers: 1,
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { id: 'tour', name: 'Tour Package', description: 'Guided tour with attractions' },
    { id: 'ride', name: 'Transportation Only', description: 'Just a ride to your destination' },
    { id: 'custom', name: 'Custom Service', description: 'Tailored experience' }
  ];

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan', capacity: '4 passengers', description: 'Comfortable for small groups' },
    { id: 'suv', name: 'SUV', capacity: '6 passengers', description: 'Spacious for families' },
    { id: 'minivan', name: 'Tata Ace', capacity: 'Goods', description: 'Great for medium and small goods' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          pickupLocation: '',
          destination: '',
          date: '',
          time: '',
          vehicleType: 'Sedan',
          passengers: 1,
          specialRequests: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Booking error:', error);
      alert('Sorry, there was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="booking">
        <div className="container">
          <div className="booking-success">
            <div className="success-icon">✅</div>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for choosing MAVL Travels. We'll contact you soon to confirm the details.</p>
            <div className="success-details">
              <p><strong>Service:</strong> {serviceTypes.find(s => s.id === formData.serviceType)?.name}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Vehicle:</strong> {vehicleTypes.find(v => v.id === formData.vehicleType)?.name}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="booking-header">
          <h2>Book Your Service</h2>
          <p className="lead">Fill in the details below to book your ride or tour with MAVL Travels</p>
        </div>

        <div className="booking-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Service Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location *</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="Enter pickup location"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Destination *</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Enter destination"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Service Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Vehicle & Passengers</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vehicleType">Vehicle Type *</label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                  >
                    {vehicleTypes.map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.capacity} ({vehicle.description})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="passengers">Number of Passengers *</label>
                    <select
                      id="passengers"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Special Requests</h3>
              <div className="form-group">
                <label htmlFor="specialRequests">Any special requirements or requests?</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Let us know about any special requirements, accessibility needs, or specific places you'd like to visit..."
                />
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading"></span>
                    Submitting Booking...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;