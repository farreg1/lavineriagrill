// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import imgVineriaMadera from '/img/vineria-madera-2.jpeg';
import imgVinoCopa from '/img/bife_vino.JPG';
import imgParrilla from '/img/parrilla.JPG';
import videoVino from '/img/vino_gif.gif';

function About() {
  const { t } = useTranslation();
  
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
    <div className="row g-3">
        <div id='firstImg' className="col-6 text-end ">
            <img  className="img-fluid about-img rounded w-75 h-75 wow zoomIn" data-wow-delay="0.1s" src={imgVineriaMadera} alt={t('about_title')} />
        </div>
        
        <div className="col-6 text-start">
            <img className="img-fluid about-img rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={imgVinoCopa} alt="Cava de vinos de La Vinería en El Chaltén" style={{ marginTop: '25%' }} />
        </div>
        

        <div className="col-6 text-end">
            <img className="img-fluid rounded about-img w-75 wow zoomIn" data-wow-delay="0.5s" src={imgParrilla} alt="Parrilla argentina con carne premium" />
        </div>
        <div className="col-6 text-start">
            <img 
                className="img-fluid rounded about-img w-75 wow zoomIn" 
                data-wow-delay="0.7s" 
                src={videoVino}
                alt="Animación de La Vinería" 

            />
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