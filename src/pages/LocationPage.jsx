// src/pages/TeamPage.jsx
import React from 'react';

// Importamos los componentes necesarios
import Navbar from '../components/Navbar';
import PageHero from './PageHero';
import Location from '../components/Location';
import Footer from '../components/Footer';

function LocationPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'team' */}
        <Navbar activePage="team" />

        {/* Le pasamos el título "Our Team" a nuestro Hero genérico */}
        <PageHero title="Our Team" />
      </div>

      {/* Reutilizamos el componente Team */}
      <Location />
      
      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default LocationPage;