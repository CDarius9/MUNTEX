import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Mesajul a fost trimis cu succes! Vă vom contacta în curând.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contactează-ne</h1>
        <p>Suntem aici pentru a vă ajuta cu orice întrebare despre echipamentul pentru munte</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Informații de Contact</h2>
          
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Adresa noastră</h3>
              <p>Bd. Timișoara 26, București 061331</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Telefon</h3>
              <p><a href="tel:0214078464">021 407 8464</a></p>
            </div>
          </div>
          
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:aaaa@gmail.com">aaaa@gmail.com</a></p>
            </div>
          </div>
          
          <div className="contact-detail">
            <FaClock className="contact-icon" />
            <div>
              <h3>Program</h3>
              <p>Luni - Vineri: 10:00 - 20:00</p>
              <p>Sâmbătă: 10:00 - 18:00</p>
              <p>Duminică: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Trimite-ne un Mesaj</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nume</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subiect</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                className="message-field"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Trimite Mesajul</button>
          </form>
        </div>
      </div>
      
      <div className="map-section">
        <h2>Locație</h2>
        <div className="map-container">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.462267088803!2d26.060700815409972!3d44.43726557910161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff6a4a4c4f3f%3A0x4e4dd4c15f2cc3ed!2sPlaza%20Romania!5e0!3m2!1sen!2sro!4v1648925328297!5m2!1sen!2sro"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;