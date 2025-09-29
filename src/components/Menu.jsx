import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Asegúrate de que esta utilidad esté importada correctamente para obtener los precios
import { getMenuWithCurrentPrices } from '../utils/priceManager';
import { Link } from 'react-router-dom'; // Se agrega Link para el botón "Ver menú completo"

// Pequeño componente interno para renderizar cada plato de forma bilingüe
const MenuItem = ({ id, name, description, price, image }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // Detecta el idioma actual ('es' o 'en')

  // Blindaje: Si no hay nombre, no renderiza nada.
  if (!name) {
    return null;
  }

  // Utiliza el encadenamiento opcional (?.) para evitar el error "Cannot read properties of undefined"
  // en caso de que alguna traducción falte en el objeto name o description.
  const dishName = name?.[currentLanguage] || name?.es || `Item ID ${id}`;
  const dishDescription = description?.[currentLanguage] || description?.es || '';

  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        {/* Puedes descomentar la imagen si deseas que aparezca */}
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

  // Estado para almacenar el menú con los precios actuales 
  const [menuData, setMenuData] = useState(getMenuWithCurrentPrices());

  useEffect(() => {
    // Recargar la data al montar el componente
    setMenuData(getMenuWithCurrentPrices());
  }, []);

  // 1. Obtener todos los platos planos para la lógica de destacados
  // Filtramos con Boolean para eliminar cualquier null/undefined antes de aplanar
  const allItemsFlat = Object.values(menuData).flat().filter(Boolean);

  // 2. Filtrar para destacados (máximo 6)
  const featuredItems = allItemsFlat
    .filter(item => item.featured)
    .slice(0, 6);

  // 3. Lógica para agrupar los ítems de Parrilla por categoría
  const groupedMeats = (menuData.meats || []).filter(Boolean).reduce((groups, item) => {
    // Usa la categoría definida en menuData.js o "Varios" si no existe
    const category = item.category || 'Varios';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

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
              {/* Pestañas */}
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
              {/* PESTAÑA: ENTRADAS (Combinación) */}
              <div id="tab-appetizers" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {
                    [...(menuData.appetizers || []), ...(menuData.grilled_appetizers || [])]
                      .filter(Boolean)
                      .map(item => <MenuItem key={item.id} {...item} />)
                  }
                </div>
              </div>

              {/* PESTAÑA: PARRILLA (MEATS) - CON SEPARACIÓN POR CATEGORÍA */}
              <div id="tab-grill" className="tab-pane fade show p-0">
                {/* Iteramos sobre las categorías agrupadas (Ternera, Cerdo, etc.) */}
                {Object.entries(groupedMeats).map(([category, items]) => (
                  <React.Fragment key={category}>
                    {/* Encabezado de la categoría */}
                    <h3 className="text-start text-primary border-bottom border-primary pb-2 mt-4 mb-4">
                      {category.toUpperCase()}
                    </h3>

                    {/* Listado de ítems en esta categoría */}
                    <div className="row g-4 mb-5">
                      {items.map(item => (
                        <MenuItem key={item.id} {...item} />
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* PESTAÑA: PASTAS */}
              <div id="tab-pastas" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {(menuData.pastas || []).filter(Boolean).map(item => <MenuItem key={item.id} {...item} />)}
                </div>
              </div>

              {/* PESTAÑA: POSTRES */}
              <div id="tab-desserts" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {(menuData.desserts || []).filter(Boolean).map(item => <MenuItem key={item.id} {...item} />)}
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