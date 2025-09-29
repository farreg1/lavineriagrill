// src/pages/HomePage.jsx
import React from 'react';

// 1. Importa todos los componentes que forman tu página de inicio
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Menu from '../components/Menu';
import Location from '../components/Location';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* El Navbar y el Hero principal van juntos en este div */}
      <div className="container-xxl position-relative p-0">
        <Navbar activePage="/" />
        <Hero />
      </div>

      {/* 2. Añade el resto de los componentes en el orden correcto */}
      <Services />
      <About />
      <Menu featuredOnly={true} />
      <Location />
      <Testimonial />
      <Footer />

      {/* Botón "Back to Top" */}
      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default HomePage;