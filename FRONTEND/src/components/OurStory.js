import React from 'react';
import { FaMountain, FaCompass, FaLeaf } from 'react-icons/fa';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="background-elements">
        <div className="mountain-silhouette"></div>
      </div>
      
      <div className="our-story-container">
        <div className="our-story-content">
          <div className="story-header">
            <h2 className="story-title">Povestea Noastră</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="story-body">
            <p className="story-text">
              La <strong>MUNTEX</strong>, credem că fiecare aventură măreață începe cu echipamentul potrivit. Fondată de entuziaști ai
              muntelui, misiunea noastră este să oferim exploratorilor outdoor echipamente premium și durabile care rezistă testului
              timpului. De la cele mai înalte vârfuri până la cele mai adânci păduri, MUNTEX echipează aventurieri din întreaga lume
              cu echipamente concepute pentru orice provocare.
            </p>
          </div>
          
          <div className="story-values">
            <div className="value-card">
              <div className="value-icon">
                <FaMountain />
              </div>
              <div className="value-content">
                <h3>Născuți în Munți</h3>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaCompass />
              </div>
              <div className="value-content">
                <h3>Ghidați de Aventură</h3>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <div className="value-content">
                <h3>Materiale Ecologice</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;