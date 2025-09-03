// src/components/Menu.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { menuData } from '../data/menuData'; // Importamos nuestros datos del menú

// Pequeño componente interno para renderizar cada plato de forma bilingüe
const MenuItem = ({ name, description, price, image }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // Detecta el idioma actual ('es' o 'en')

  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img className="flex-shrink-0 img-fluid rounded" src={image} alt={name[currentLanguage]} style={{ width: '80px' }} />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{name[currentLanguage]}</span>
            <span className="text-primary">${price.toLocaleString('es-AR')}</span>
          </h5>
          <small className="fst-italic">{description[currentLanguage]}</small>
        </div>
      </div>
    </div>
  );
};

// Componente principal del Menú, ahora 100% dinámico
function Menu({ featuredOnly = false }) {
  const { t } = useTranslation();

  // Si 'featuredOnly' es true, filtramos los platos destacados de todas las categorías
  const featuredItems = Object.values(menuData)
    .flat() // Junta todos los arrays de categorías en uno solo
    .filter(item => item.featured)
    .slice(0, 6); // Mostramos un máximo de 6 en la página de inicio

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('menu_section_title')}</h5>
          <h1 className="mb-5">{t(featuredOnly ? 'menu_title_featured' : 'menu_title_full')}</h1>
        </div>

        {/* Si NO es solo destacados, mostramos el menú completo con pestañas */}
        {!featuredOnly ? (
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-appetizers">
                  <i className="fa fa-star fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_appetizers')}</h6></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-grill">
                  <i className="fa fa-drumstick-bite fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_grill')}</h6></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-pastas">
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_pastas')}</h6></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-desserts">
                  <i className="fa fa-ice-cream fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_desserts')}</h6></div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-appetizers" className="tab-pane fade show p-0 active">
                <div className="row g-4">{[...menuData.appetizers, ...menuData.grilled_appetizers].map(item => <MenuItem key={item.id} {...item} />)}</div>
              </div>
              <div id="tab-grill" className="tab-pane fade show p-0">
                <div className="row g-4">{menuData.meats.map(item => <MenuItem key={item.id} {...item} />)}</div>
              </div>
              <div id="tab-pastas" className="tab-pane fade show p-0">
                <div className="row g-4">{menuData.pastas.map(item => <MenuItem key={item.id} {...item} />)}</div>
              </div>
              <div id="tab-desserts" className="tab-pane fade show p-0">
                <div className="row g-4">{menuData.desserts.map(item => <MenuItem key={item.id} {...item} />)}</div>
              </div>
            </div>
          </div>
        ) : (
          // Si es solo destacados, mostramos la lista filtrada
          <div className="row g-4">
            {featuredItems.map(item => <MenuItem key={item.id} {...item} />)}
          </div>
        )}
        {/* Botón para ver el menú completo si NO es solo destacados */}
        {featuredOnly && (
          <div className="text-center mt-5">
            <a href="/menu" className="btn btn-primary px-4 py-2">
              {t('see_full_menu') || 'Ver menú completo'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;