import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import StatisticsSection from './components/StatisticsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <StatisticsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
