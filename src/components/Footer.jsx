// src/components/Footer.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // 👈 Importar useTranslation

function Footer() {
  const { t } = useTranslation(); // 👈 Inicializar el hook

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          {/* Columna: Company */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{'La Vineria Grill'}</h4>
            {/* Los enlaces de navegación deben usar Link de react-router-dom si son internos */}
            <a className="btn btn-link" href="/about">{t('footerAbout')}</a>
            <a className="btn btn-link" href="/contact">{t('footerContact')}</a>
            <a className="btn btn-link"   target="_blank" 
  rel="noopener noreferrer" href="https://wa.me/5492966448001">{t('footerReservation')}</a>
            {/* Estos son ejemplos de enlaces externos o legales */}
            <a className="btn btn-link" href="/#">{t('footerPrivacy')}</a>
            <a className="btn btn-link" href="/#">{t('footerTerms')}</a>
          </div>

          {/* Columna: Contact */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{t('footerContactTitle')}</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{t('footerAddress')}</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{t('footerPhone')}</p>
            {/* <p className="mb-2"><i className="fa fa-envelope me-3"></i>{t('footerEmail')}</p> */}
            {/* <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="/#"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
          </div>

          {/* Columna: Opening */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{t('footerOpeningTitle')}</h4>
            <h5 className="text-light fw-normal">{t('footerDays')}</h5>
            <p>{t('footerHoursWeek')}</p>
          </div>
        </div>
      </div>

      {/* Derechos de Autor y Menú de Pie de Página */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              {'\u00A9'} <a className="border-bottom" href="/#">La Vineria Grill</a>, {t('footerCopyright').split(',')[1].trim()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;