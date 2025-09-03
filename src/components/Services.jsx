// src/components/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Título de la sección, ahora traducible */}
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">La Vinería</h5>
          <h1 className="mb-5">{t('servicesTitle')}</h1>
        </div>

        {/* Contenedor de las 3 tarjetas de servicio */}
        <div className="row g-4 justify-content-center"> {/* Usamos justify-content-center para alinear */}
          
          {/* Card 1: Carnes Premium */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-drumstick-bite text-primary mb-4"></i>
                <h5>{t('card1_title')}</h5>
                <p>{t('card1_text')}</p>
              </div>
            </div>
          </div>

          {/* Card 2: Nuestra Cava */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-wine-glass-alt text-primary mb-4"></i>
                <h5>{t('card2_title')}</h5>
                <p>{t('card2_text')}</p>
              </div>
            </div>
          </div>

          {/* Card 3: Servicio de Excelencia */}
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-concierge-bell text-primary mb-4"></i>
                <h5>{t('card3_title')}</h5>
                <p>{t('card3_text')}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Services;