import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

const Home = () => (
  <>
    <section className="hero-section">
      <div className="profile-container">
        <img 
          src="/images/profile.jpg" 
          alt="Ener Octavio Buitrago" 
          className="profile-image"
        />
        <div className="profile-info">
          <h1>Ener Octavio Buitrago Camelo</h1>
          <p className="profile-description">
            Publicista con más de 30 años de experiencia, actualmente en proceso de aprendizaje como Full Stack Developer.
          </p>
        </div>
      </div>
    </section>

    <section className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="/images/tienda-muebles.jpg" alt="Tienda Muebles" />
          </div>
          <h3>Tienda Muebles</h3>
          <p>Proyecto de e-commerce desarrollado con Python</p>
          <div className="project-links">
            <a href="https://github.com/Octaviusb/Tienda-Muebles" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://tienda-muebles.vercel.app" target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/images/alura-geek.jpg" alt="Alura Geek" />
          </div>
          <h3>Alura Geek</h3>
          <p>E-commerce desarrollado con React y Vite</p>
          <div className="project-links">
            <a href="https://github.com/Octaviusb/Challenge-Alura-Geek" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://challenge-alura-geek-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/images/contablemente.jpg" alt="Contablemente" />
          </div>
          <h3>Contablemente</h3>
          <p>Sistema de contabilidad desarrollado con PHP</p>
          <div className="project-links">
            <a href="https://github.com/Octaviusb/contablemente" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://octaviusb.github.io/contablemente/" target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/images/frontend.jpg" alt="Frontend Projects" />
          </div>
          <h3>Frontend Projects</h3>
          <p>Colección de proyectos frontend</p>
          <div className="project-links">
            <a href="https://github.com/Octaviusb/frontend" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://frontend-projects.vercel.app" target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica para enviar el formulario a un servidor
      // Por ahora solo simulamos un envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-content">
      <div className="contact-form">
        <h3>Contáctame</h3>
        {submitStatus === 'success' && (
          <p style={{ color: 'green', marginBottom: '1rem' }}>
            ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
          </p>
        )}
        {submitStatus === 'error' && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
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
              placeholder="tu@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;