import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedTours from './components/FeaturedTours.jsx';
import Services from './components/Services.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import Fleet from './components/Fleet.jsx';
import BookingForm from './components/BookingForm.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <FeaturedTours />
        <Services />
        <InteractiveMap />
        <Fleet />
        <BookingForm />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;