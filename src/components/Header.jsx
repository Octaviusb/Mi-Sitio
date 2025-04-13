import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Octaviob</Link>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
