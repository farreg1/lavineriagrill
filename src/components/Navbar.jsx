import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 👈 Importar useTranslation
import LanguageSwitcher from './LanguageSwitcher'
import imgLogo from '/img/lavineria_logo.png';


function Navbar() {

  const { t } = useTranslation(); // 👈 Inicializar el hook

  const location = useLocation();
  const activePage = location.pathname;

  // Se modificó el array para incluir todos los enlaces internos del dropdown
  const dropdownPages = ['/booking', '/team', '/testimonial'];

  // Función para determinar si una ruta está activa
  const isActive = (path) => activePage === path;
  
  // Función para determinar si el dropdown está activo
  // Nota: Mantiene el isDropdownActive, pero ahora el dropdown contendrá los enlaces internos
  const isDropdownActive = dropdownPages.some(path => activePage.startsWith(path));
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
            <img src={imgLogo}alt="La Vinería Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          
          {/* Se usan las claves de traducción con t() */}
          <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>{t('navHome')}</Link>
          <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>{t('navAbout')}</Link>
          <Link to="/service" className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`}>{t('navServices')}</Link>
          <Link to="/menu" className={`nav-item nav-link ${isActive('/menu') ? 'active' : ''}`}>{t('navMenu')}</Link>
          <div className="nav-item dropdown">
            <a href="/#" className={`nav-link dropdown-toggle ${isDropdownActive ? 'active' : ''}`} data-bs-toggle="dropdown">{t('navDropdownTitle')}</a>
            <div className="dropdown-menu m-0 p-0">
              {/* Componente LanguageSwitcher */}
              <LanguageSwitcher />
            </div>
          </div>

          
        </div>
        {/* Botón de "Reservar Mesa" */}
       <a 
  href="https://wa.me/5492966448001" 
  className="btn btn-primary py-2 px-4" 
  target="_blank" 
  rel="noopener noreferrer"
>
  {t('navBooking')}
</a>
      </div>
    </nav>
  );
}

export default Navbar;