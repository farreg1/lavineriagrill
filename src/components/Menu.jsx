import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getMenuWithCurrentPrices } from '../utils/priceManager';
import { Link } from 'react-router-dom';

// Componente MenuItem (se mantiene igual)
const MenuItem = ({ id, name, description, price, image }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  if (!name) {
    return null;
  }

  const dishName = name?.[currentLanguage] || name?.es || `Item ID ${id}`;
  const dishDescription = description?.[currentLanguage] || description?.es || '';

  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        {/* <img className="flex-shrink-0 img-fluid rounded" src={image} alt={dishName} style={{ width: '80px' }} /> */}
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{dishName}</span>
            <span className="text-primary">${price.toLocaleString('es-AR')}</span>
          </h5>
          <small className="fst-italic">{dishDescription}</small>
        </div>
      </div>
    </div>
  );
};

function Menu({ featuredOnly = false }) {
  const { t } = useTranslation();

  const [menuData, setMenuData] = useState(getMenuWithCurrentPrices());

  useEffect(() => {
    setMenuData(getMenuWithCurrentPrices());
  }, []);

  const allItemsFlat = Object.values(menuData).flat().filter(Boolean);


  const featuredItems = allItemsFlat
    .filter(item => item.featured)
    .slice(0, 6);

  const groupedMeats = (menuData.meats || []).filter(Boolean).reduce((groups, item) => {
    const category = item.category || 'Varios';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

// --- NUEVA LÓGICA DE AGRUPAMIENTO DE GUARNICIONES/ENSALADAS/REGIONALES ---

  // Se agrupan las guarniciones, ensaladas y regionales para usar el mismo tab,
  // pero separadas por subtítulos.
  const groupedSides = {
    [t('menu_tab_sides')]: menuData.side_dishes || [], // Necesitas definir 'side_dishes' en menuData.js
    [t('menu_tab_salads')]: menuData.salads || [], // Necesitas definir 'salads' en menuData.js
    [t('menu_tab_regional')]: menuData.regional_dishes || [], // Necesitas definir 'regional_dishes' en menuData.js
  };
// --------------------------------------------------------------------------

  // 4. Renderizar el componente
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('menu_section_title')}</h5>
          <h1 className="mb-5">{t(featuredOnly ? 'menu_title_featured' : 'menu_title_full')}</h1>
        </div>

        {/* LÓGICA DE PESTAÑAS (Menú Completo) */}
        {!featuredOnly ? (
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              {/* Pestañas existentes */}
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
              
              {/* --- NUEVAS PESTAÑAS --- */}

              {/* Pestaña de Acompañamientos/Regional/Ensaladas */}
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-sides">
                  <i className="fa fa-leaf fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_sides_group')}</h6></div>
                </a>
              </li>

              {/* Pestaña de Postres (existente) */}
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-desserts">
                  <i className="fa fa-ice-cream fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_desserts')}</h6></div>
                </a>
              </li>
              
              {/* Pestaña de Infusiones */}
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-infusions">
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3"><h6 className="mt-n1 mb-0">{t('menu_tab_infusions')}</h6></div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* PESTAÑA: ENTRADAS (Combinación) - Se mantiene igual */}
              <div id="tab-appetizers" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {
                    [...(menuData.appetizers || []), ...(menuData.grilled_appetizers || [])]
                      .filter(Boolean)
                      .map(item => <MenuItem key={item.id} {...item} />)
                  }
                </div>
              </div>

              {/* PESTAÑA: PARRILLA (MEATS) - Se mantiene igual */}
              <div id="tab-grill" className="tab-pane fade show p-0">
                {Object.entries(groupedMeats).map(([category, items]) => (
                  <React.Fragment key={category}>
                    <h3 className="text-start text-primary border-bottom border-primary pb-2 mt-4 mb-4">
                      {category.toUpperCase()}
                    </h3>
                    <div className="row g-4 mb-5">
                      {items.map(item => (
                        <MenuItem key={item.id} {...item} />
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* PESTAÑA: PASTAS - Se mantiene igual */}
              <div id="tab-pastas" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {(menuData.pastas || []).filter(Boolean).map(item => <MenuItem key={item.id} {...item} />)}
                </div>
              </div>

              {/* PESTAÑA: GUARNICIONES / ENSALADAS / REGIONALES */}
              <div id="tab-sides" className="tab-pane fade show p-0">
                {/* Iteramos sobre las categorías agrupadas (Guarniciones, Ensaladas, Regionales) */}
                {Object.entries(groupedSides).map(([category, items]) => {
                  // Solo renderiza si hay elementos en la categoría
                  if (items.length === 0) return null; 

                  return (
                    <React.Fragment key={category}>
                      <h3 className="text-start text-primary border-bottom border-primary pb-2 mt-4 mb-4">
                        {category.toUpperCase()}
                      </h3>
                      <div className="row g-4 mb-5">
                        {items.filter(Boolean).map(item => (
                          <MenuItem key={item.id} {...item} />
                        ))}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* PESTAÑA: POSTRES - Se mantiene igual */}
              <div id="tab-desserts" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {(menuData.desserts || []).filter(Boolean).map(item => <MenuItem key={item.id} {...item} />)}
                </div>
              </div>

              {/* PESTAÑA: INFUSIONES */}
              <div id="tab-infusions" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {(menuData.infusions || []).filter(Boolean).map(item => <MenuItem key={item.id} {...item} />)}
                </div>
              </div>
            </div>
          </div>
      ) : (
        /* Renderizado de Destacados (para Home) */
        <div className="row g-4">
          {featuredItems.map(item => <MenuItem key={item.id} {...item} />)}
        </div>
      )}

      {/* Botón para ver el menú completo si es la vista de destacados */}
      {featuredOnly && (
        <div className="text-center mt-5">
          <Link to="/menu" className="btn btn-primary px-4 py-2">
            {t('see_full_menu') || 'Ver menú completo'}
          </Link>
        </div>
      )}
    </div>
  </div>
);
}

export default Menu;