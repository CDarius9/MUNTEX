import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartDropdown from './CartDropdown';
import './Navbar.css';

// Icons - you'll need to install: npm install lucide-react
import { ShoppingBag, User, Menu, X } from 'lucide-react';

// You can replace this with your preferred icon sizes
const ICON_SIZE = 22;

function Navbar({ isAuthenticated, user, onLogout }) {
  const { cart } = useContext(CartContext);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  
  const navRef = useRef(null);
  const userMenuRef = useRef(null);
  const cartRef = useRef(null);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCartDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <div className="muntex-navbar-wrapper">
      <nav ref={navRef} className="muntex-navbar">
        <div className="muntex-navbar-container">
          {/* Logo - Left Section */}
          <div className="muntex-navbar-left">
            <Link to="/" className="muntex-navbar-logo">
              <span className="muntex-logo-text">MUNTEX</span>
            </Link>
          </div>
          
          {/* Navigation Links - Center Section */}
          <div className="muntex-navbar-center">
            <div className={`muntex-navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Acasa
              </Link>
              <Link to="/men" className={location.pathname === '/men' ? 'active' : ''}>
                Barbati
              </Link>
              <Link to="/women" className={location.pathname === '/women' ? 'active' : ''}>
                Femei
              </Link>
              <Link to="/equipment" className={location.pathname === '/equipment' ? 'active' : ''}>
                Echipament
              </Link>
              <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                Despre noi
              </Link>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </div>
          </div>
          
          {/* User and Cart Actions - Right Section */}
          <div className="muntex-navbar-right">
            <div className="muntex-navbar-actions">
              {/* Mobile menu toggle */}
              <button 
                className="muntex-mobile-menu-toggle" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={ICON_SIZE} /> : <Menu size={ICON_SIZE} />}
              </button>
              
              {isAuthenticated ? (
                <div className="muntex-user-menu-container" ref={userMenuRef}>
                  <button 
                    className="muntex-user-button"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    aria-expanded={userMenuOpen}
                    title="Contul meu"
                  >
                    <User size={ICON_SIZE} />
                  </button>
                  
                  {userMenuOpen && (
                    <div className="muntex-user-dropdown">
                      <div className="muntex-user-dropdown-header">
                        <span>Bună, {user?.username}</span>
                      </div>
                      <div className="muntex-user-dropdown-body">
                        <Link to="/my-account">Contul meu</Link>
                        <Link to="/orders">Comenzile mele</Link>
                        <Link to="/wishlist">Lista de dorințe</Link>
                        <button onClick={onLogout} className="muntex-logout-button">
                          Deconectează-te
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="muntex-auth-buttons">
                  <Link to="/login" className="muntex-auth-button muntex-login-button">
                    Conectare
                  </Link>
                  <Link to="/register" className="muntex-auth-button muntex-register-button">
                    Cont nou
                  </Link>
                </div>
              )}
              
              <div className="muntex-cart-container" ref={cartRef}>
                <button 
                  className="muntex-cart-button" 
                  onClick={() => setShowCartDropdown(!showCartDropdown)}
                  aria-expanded={showCartDropdown}
                  title="Coșul meu"
                >
                  <ShoppingBag size={ICON_SIZE} />
                  {cart.length > 0 && (
                    <span className="muntex-cart-badge">{cart.length}</span>
                  )}
                </button>
                
                {showCartDropdown && (
                  <CartDropdown onClose={() => setShowCartDropdown(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;