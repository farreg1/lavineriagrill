// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa TODOS los componentes de página que has creado
import HomePage from './pages/HomePage'; // Asegúrate de crear este para tu index.html
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import TestimonialPage from './pages/TestimonialPage';
import PriceManager from './components/priceManager';

// ...importa las páginas que falten (ej. BookingPage)

function App() {
  return (
    <Router basename="/lavineriagrill/">
      <Routes>
        {/* Define una ruta para cada página */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/menu" element={<MenuPage />} />
        
        <Route path="/location" element={<LocationPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/admin-prices" element={<PriceManager />} />
      </Routes>
    </Router>
  );
}

export default App;