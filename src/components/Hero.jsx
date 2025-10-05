// src/components/Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importa el hook

function Hero() {
  const { t } = useTranslation(); // 2. Llama al hook

  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            {/* 3. Reemplaza el texto con la función t() y la clave de traducción */}
            <h1
              className="display-3 text-white animated slideInLeft"
              dangerouslySetInnerHTML={{ __html: t('heroTitle') }}
            />
            <p className="text-white animated slideInLeft mb-4 pb-2">{t('heroSubtitle')}</p>
            <a target="_blank"
              rel="noopener noreferrer" href="https://wa.me/5492966448001" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">{t('bookTable')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;