// src/pages/AboutPage.jsx
import React from 'react';

// Importamos los componentes necesarios
import Navbar from '../components/Navbar';
import PageHero from './PageHero';
import About from '../components/About';
import Location from '../components/Location'; // Asegúrate de crear este componente
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'about' */}
        <Navbar activePage="about" />

        {/* Le pasamos el título a nuestro Hero genérico */}
        <PageHero title="About Us" />
      </div>

      {/* Reutilizamos el componente About */}
      <About />

      {/* Reutilizamos el componente Location */}
      <Location />

      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default AboutPage;