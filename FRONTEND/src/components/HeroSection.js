import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHiking, 
  FaCompass, 
  FaLeaf,
  FaChevronDown,
  FaMountain,
  FaStar
} from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle initial animation on load
  useEffect(() => {
    setIsLoaded(true);
   
    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToProducts = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <section 
      className={`hero ${isLoaded ? 'hero-loaded' : ''}`}
      style={{ backgroundPositionY: `calc(50% + ${scrollPosition * 0.15}px)` }}
    >
      <div className="hero-overlay"></div>
      
      {/* Hero Content with Enhanced Animations */}
      <div className="hero-content">
        <div className="hero-logo">
          <FaMountain className="hero-logo-icon" />
        </div>
        
        <h1 className="hero-title">
          {Array.from("MUNTEX").map((letter, index) => (
            <span 
              key={index} 
              className="hero-title-letter"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        <p className="hero-subtitle">Aventura Ta, Echipamentul Nostru</p>
       
        {/* Featured Item Banner */}
        <div className="featured-banner">
          <div className="featured-badge">
            <FaStar />
            <span>New</span>
          </div>
          <p>Noua colecție de iarnă - <strong>ALPINIST PRO</strong> - disponibilă acum!</p>
          <Link to="/men" className="featured-link">
            Vezi colecția
          </Link>
        </div>
        
        <div className="cta-container">
          <Link to="/categories" className="cta-button primary">
            Explorează 
            <FaChevronDown className="cta-icon" />
          </Link>
          <Link to="/about" className="cta-button secondary">
            Despre Noi
          </Link>
        </div>
      </div>
     
      {/* Highlights with Enhanced Effects */}
      <div className="hero-highlights">
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <FaHiking className="highlight-icon" />
          </div>
          <h3 className="highlight-title">Durabilitate</h3>
          <p>Construit pentru cele mai dificile terenuri.</p>
        </div>
       
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <FaCompass className="highlight-icon" />
          </div>
          <h3 className="highlight-title">Precizie</h3>
          <p>Echipament proiectat pentru performanță maximă.</p>
        </div>
       
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <FaLeaf className="highlight-icon" />
          </div>
          <h3 className="highlight-title">Sustenabilitate</h3>
          <p>Design ecologic pentru aventurierii responsabili.</p>
        </div>
      </div>
     
      {/* Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={scrollToProducts}>
        <FaChevronDown className="scroll-icon pulse" />
      </div>
    </section>
  );
};

export default HeroSection;