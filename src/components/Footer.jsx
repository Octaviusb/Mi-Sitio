import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const hideFooterPaths = ['/about', '/contact'];

  if (hideFooterPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-list">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:obuitragocamelo@yahoo.es">obuitragocamelo@yahoo.es</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+573124458684">+57 312 445 8684</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Villavicencio, Meta, Colombia</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://github.com/Octaviusb" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/octaviusb" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/octaviusb" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="quick-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre mí</Link></li>
            <li>
              <a 
                href="https://octaviusb.github.io/Portfolio---HTML--CSS--JS/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Portafolio
              </a>
            </li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ener Octavio Buitrago. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
