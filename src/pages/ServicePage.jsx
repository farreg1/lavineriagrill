// src/pages/ServicePage.jsx
import React from 'react';

// Importamos todos los componentes que vamos a reutilizar
import Navbar from '../components/Navbar';
import PageHero from './PageHero';
import Services from '../components/Services'; // El mismo componente de la página de inicio
import Footer from '../components/Footer';

function ServicePage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'service' */}
        <Navbar activePage="service" />

        {/* Le pasamos el título "Services" a nuestro Hero genérico */}
        <PageHero title="Services" />
      </div>

      {/* Reutilizamos el componente de Servicios */}
      <Services />
      
      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default ServicePage;