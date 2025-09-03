// src/pages/ContactPage.jsx
import React from 'react';

// Importamos los componentes necesarios
import Navbar from '../components/Navbar';
import PageHero from './PageHero';
import ContactSection from '../components/ContactSection'; // El nuevo componente que creamos
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'contact' */}
        <Navbar activePage="contact" />

        {/* Le pasamos el título "Contact Us" a nuestro Hero genérico */}
        <PageHero title="Contact Us" />
      </div>

      {/* Usamos el nuevo componente de la sección de contacto */}
      <ContactSection />
      
      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default ContactPage;