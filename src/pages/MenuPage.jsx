// src/pages/MenuPage.jsx
import React from 'react';

// Importamos todos los componentes que vamos a reutilizar
import Navbar from '../components/Navbar';
import PageHero from '../pages/PageHero';
import Menu from '../components/Menu'; // Usamos el mismo componente de la página de inicio
import Footer from '../components/Footer';

function MenuPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        {/* Le decimos al Navbar que la página activa es 'menu' */}
        <Navbar />

        {/* Le pasamos el título "Food Menu" a nuestro Hero genérico */}
        <PageHero title="Food Menu" />
      </div>

      {/* Reutilizamos el componente del Menú */}
      <Menu />
      
      {/* Reutilizamos el componente Footer */}
      <Footer />

      <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default MenuPage;