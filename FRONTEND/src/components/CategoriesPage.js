import React from 'react';
import './CategoriesPage.css';
import { Link } from 'react-router-dom';
import { FaMountain, FaHiking, FaCampground } from 'react-icons/fa';

const CategoriesPage = () => {
  return (
    <div className="page-wrapper">
      <header className="categories-header">
        <h1>Mountain Gear</h1>
        <p>Echipament și îmbrăcăminte de calitate pentru aventurile tale</p>
      </header>
      
      <div className="categories-container">
        <Link to="/men" className="category-box men">
          <div className="category-content">
            <FaHiking className="category-icon" />
            <h3>Barbati</h3>
            <p className="category-description">Îmbrăcăminte și echipamente pentru bărbați</p>
          </div>
        </Link>
        
        <Link to="/women" className="category-box women">
          <div className="category-content">
            <FaMountain className="category-icon" />
            <h3>Femei</h3>
            <p className="category-description">Îmbrăcăminte și echipamente pentru femei</p>
          </div>
        </Link>
        
        <Link to="/equipment" className="category-box equipment">
          <div className="category-content">
            <FaCampground className="category-icon" />
            <h3>Echipament</h3>
            <p className="category-description">Accesorii și echipamente pentru drumeții și camping</p>
          </div>
        </Link>
      </div>
      
      <footer className="categories-footer">
        <p>Echipamente de calitate pentru aventuri de neuitat</p>
      </footer>
    </div>
  );
};

export default CategoriesPage;