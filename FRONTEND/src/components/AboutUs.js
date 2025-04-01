import React from 'react';
import { FaMountain, FaHeart, FaUsers } from 'react-icons/fa';
import './AboutUs2.css';

function AboutUs() {
  return (
    <div className="about-section2-page">
      <div className="about-section2-container">
        <div className="about-section2-content">
          <div className="about-section2-header">
            <FaMountain className="about-section2-mountain-icon" />
            <h1>Despre noi</h1>
            <div className="about-section2-underline"></div>
          </div>
          
          <div className="about-section2-content-grid">
            <div className="about-section2-main-text">
              <p className="about-section2-lead-text">
                Bine ați venit în lumea MUNTEX, unde pasiunea pentru munte și sporturile montane se întâlnește cu profesionalismul și inovația.
              </p>
              <p>
                Suntem o echipă dedicată iubitorilor de natură și aventură, oferind produse și servicii de cea mai bună calitate pentru a vă îndeplini nevoile și dorințele în materie de echipament montan.
              </p>
            </div>

            <div className="about-section2-values-grid">
              <div className="about-section2-value-card">
                <FaHeart className="about-section2-value-icon" />
                <h3>Pasiune</h3>
                <p>Împărtășim dragostea pentru munte și aventură cu fiecare client</p>
              </div>
              
              <div className="about-section2-value-card">
                <FaUsers className="about-section2-value-icon" />
                <h3>Experiență</h3>
                <p>15+ ani de expertiză în echipamente montane</p>
              </div>
              
              <div className="about-section2-value-card">
                <FaMountain className="about-section2-value-icon" />
                <h3>Calitate</h3>
                <p>Selecție premium de echipamente pentru toate aventurile</p>
              </div>
            </div>

            <div className="about-section2-offering">
              <h2>Ce oferim?</h2>
              <p>
                La noi veți găsi o gamă largă de echipamente și accesorii pentru toate anotimpurile, indiferent că sunteți pasionați de drumeții, alpinism, schi sau snowboard. Ne mândrim cu selecția noastră de produse de top, atent alese pentru a vă satisface cerințele și a vă asigura o experiență de neuitat în natură.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;