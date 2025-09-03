// src/components/Location.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function Location() {
   const { t } = useTranslation();
  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('location_subtitle')}</h5>
          <h1 className="mb-5">{t('location_title')}</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rounded overflow-hidden shadow">
              <iframe
                title={t('location_map_title')}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2600.0846892558607!2d-72.8844312!3d-49.3316154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbd0377d8318b0b%3A0x2037def7ca920d7c!2sLa%20Viner%C3%ADa%20Grill%20-%20Vinos%20y%20Pastas%20(Steakhouse)%20El%20Chalt%C3%A9n%20-%20Patagonia!5e0!3m2!1ses-419!2sar!4v1756930468444!5m2!1ses-419!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://maps.app.goo.gl/ZbbUrawyjyDeKAtz6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
              >
{t('location_button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;