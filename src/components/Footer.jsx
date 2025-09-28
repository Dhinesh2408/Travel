import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3>MAVL Travels</h3>
              <p className="tagline">Sivaganga District Tourism</p>
              <p className="description">
                Your trusted partner for exploring the rich heritage, natural beauty,
                and spiritual significance of Sivaganga district, Tamil Nadu.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="footer-section">
            <h4>Tour Packages</h4>
            <ul className="footer-links">
              <li><a href="#tours">Heritage Tours</a></li>
              <li><a href="#tours">Nature Tours</a></li>
              <li><a href="#tours">Spiritual Tours</a></li>
              <li><a href="#tours">Custom Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>1/1 Good shed Road, Alagappapuram, Karaikudi, Tamil Nadu</span>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>+91 99769 21206</span>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <span>info@mavltravels.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <span>Mon - Sun: 6:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 MAVL Travels. All rights reserved.</p>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919976921206" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/refund-policy">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
