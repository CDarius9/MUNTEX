import React, { useEffect, useRef } from 'react';
import './AboutUsSection.css';
import Columbia from './columbia.png';
import Deuter from './deuter.png';
import Mamut from './mamut.png';
import Northface from './northface.png';
import Petzl from './petzl.png';
import Solomon from './salomon.png';

const AboutUsSection = () => {
  const brandsRef = useRef(null);
  
  const brands = [
    { name: 'Columbia', logo: Columbia },
    { name: 'Deuter', logo: Deuter },
    { name: 'Mamut', logo: Mamut },
    { name: 'The North Face', logo: Northface },
    { name: 'Petzl', logo: Petzl },
    { name: 'Salomon', logo: Solomon }
  ];

  useEffect(() => {
    // Simple animation when component enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (brandsRef.current) {
      observer.observe(brandsRef.current);
    }

    return () => {
      if (brandsRef.current) {
        observer.unobserve(brandsRef.current);
      }
    };
  }, []);

  return (
    <section className="brands-section">
      <div className="brands-content">
        <div className="brands-header">
          <h2>Branduri cu care lucrăm</h2>
          <div className="accent-line"></div>
        </div>
        
        <div className="brands-grid" ref={brandsRef}>
          {brands.map((brand, index) => (
            <div 
              className="brand-item" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="brand-logo-container">
                <img src={brand.logo} alt={brand.name} />
                <div className="logo-overlay">
                  <span>{brand.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="brands-decoration">
        <div className="decoration-element element-1"></div>
        <div className="decoration-element element-2"></div>
      </div>
    </section>
  );
};

export default AboutUsSection;