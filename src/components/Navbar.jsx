// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'


function Navbar() {

  const location = useLocation();
  const activePage = location.pathname; // Obtiene la ruta actual, ej: "/about"

  const dropdownPages = ['/booking', '/team', '/testimonial'];

  // Función para determinar si una ruta está activa
  const isActive = (path) => activePage === path;
  
  // Función para determinar si el dropdown está activo
  const isDropdownActive = dropdownPages.some(path => activePage.startsWith(path));
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
            <img src="/img/logo.jpeg" alt="La Vinería Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/service" className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`}>Service</Link>
          <Link to="/menu" className={`nav-item nav-link ${isActive('/menu') ? 'active' : ''}`}>Menu</Link>
          <div className="nav-item dropdown">
            <a href="/#" className={`nav-link dropdown-toggle ${isDropdownActive ? 'active' : ''}`} data-bs-toggle="dropdown">Language</a>
            <div className="dropdown-menu m-0">
                <LanguageSwitcher />
            </div>
          </div>

          <Link to="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </div>
        <Link to="/booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
      </div>
    </nav>
  );
}

export default Navbar;