import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './Header.css';

const navItems = [
  { href: "#home", label: "Home", primary: true },
  { href: "#tours", label: "Tours", primary: true },
  { href: "#booking", label: "Booking", primary: true },
  { href: "#services", label: "Services", primary: false },
  { href: "#destinations", label: "Destinations", primary: false },
  { href: "#contact", label: "Contact", primary: false }
];

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, idx) => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveLink(navItems[idx].href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className={`header floating-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo" tabIndex={-1}>
          <span>
            <span className="brand">MAVL Travels</span>
          </span>
        </div>

        {/* Desktop Nav - only primary links */}
        <nav className="desktop-nav">
          {navItems.filter(item => item.primary).map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeLink === item.href ? "active" : ""}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <LanguageSwitcher />
          <button
            className={`mobile-menu-toggle${isMobileMenuOpen ? ' active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - all links */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={activeLink === item.href ? "active" : ""}
          >
            {t(item.label)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
