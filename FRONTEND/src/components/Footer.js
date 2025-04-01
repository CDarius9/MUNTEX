import React, { useState } from 'react';
import './Footer2.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaMountain } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset subscribed state after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="footer-logo">
            <FaMountain className="logo-icon" />
            <h3>MUNTEX</h3>
          </div>
          <p>
            Echipamente premium pentru aventurile tale în aer liber. 
            Calitate, durabilitate și performanță pentru pasionații de munte.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Str. Muntilor 123, Cluj-Napoca</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+40 123 456 789</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>contact@muntex.ro</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3>Link-uri Rapide</h3>
          <ul>
            <li><a href="#">Acasă</a></li>
            <li><a href="#">Produse</a></li>
            <li><a href="#">Despre Noi</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section legal">
          <h3>Informații Legale</h3>
          <ul>
            <li><a href="#">Termeni și Condiții</a></li>
            <li><a href="#">Politica de Confidențialitate</a></li>
            <li><a href="#">Politica de Cookies</a></li>
            <li><a href="#">Politica de Retur</a></li>
            <li><a href="#">ANPC</a></li>
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Abonează-te la Newsletter</h3>
          <p>Primește noutăți și oferte speciale direct în inbox-ul tău.</p>
          <form onSubmit={handleSubscribe}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Adresa ta de email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                Abonează-te
              </button>
            </div>
            {subscribed && (
              <div className="success-message">
                Mulțumim pentru abonare!
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {currentYear} MUNTEX. Toate drepturile rezervate.</p>
        </div>
        
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;