// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="/img/about-1.jpg" alt={t('about_title')} />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="/img/about-2.jpg" alt="Cava de vinos de La Vinería en El Chaltén" style={{ marginTop: '25%' }} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="/img/about-3.jpg" alt="Parrilla argentina con carne premium" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="/img/about-4.jpg" alt="Plato de pastas caseras del restaurante" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('about_subtitle')}</h5>
            <h1 className="mb-4">{t('about_title')}</h1>
            <p className="mb-4">{t('about_text')}</p>
            {/* Las cajas de estadísticas ahora son dinámicas y relevantes */}
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0">{t('stat1_number')}</h1>
                  <div className="ps-4">
                    <p className="mb-0">{t('stat1_line1')}</p>
                    <h6 className="text-uppercase mb-0">{t('stat1_line2')}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;