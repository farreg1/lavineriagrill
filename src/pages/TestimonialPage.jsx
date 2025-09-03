// src/pages/TestimonialPage.jsx
import React from 'react';

// Importamos los componentes necesarios
import Navbar from '../components/Navbar';
import PageHero from './PageHero';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function TestimonialPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'testimonial' */}
        <Navbar activePage="testimonial" />

        {/* Le pasamos el título "Testimonial" a nuestro Hero genérico */}
        <PageHero title="Testimonial" />
      </div>

      {/* Reutilizamos el componente Testimonial */}
      <Testimonial />
      
      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default TestimonialPage;