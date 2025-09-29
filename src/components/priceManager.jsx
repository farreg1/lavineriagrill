import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllItemsFlat, savePricesToLocalStorage } from '../utils/priceManager';

// Define una contraseña simple. ¡NOTA: Esto es inseguro y solo para fines de demo sin backend!
const ADMIN_PASSWORD = 'MarceVineria123!'; 

const PriceManager = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // 1. Estados para la lógica de acceso
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 2. Estado para los datos del menú y los precios a editar
  const [menuItems, setMenuItems] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  // 3. Cargar el menú al inicio y al guardar
  useEffect(() => {
    // Al cargar, siempre obtenemos los datos con los precios de localStorage si existen
    setMenuItems(getAllItemsFlat());
  }, [isAuthenticated, isSaved]);

  // Manejador del formulario de login
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword(''); // Limpia la contraseña
    } else {
      alert(t('manager_login_error') || 'Contraseña incorrecta');
      setPassword('');
    }
  };

  // Manejador del cambio de precio
  const handlePriceChange = (id, newPrice) => {
    setMenuItems(prevItems => prevItems.map(item => 
      item.id === id ? { ...item, price: Number(newPrice) } : item
    ));
    setIsSaved(false); // Indica que hay cambios sin guardar
  };

  // Manejador del formulario de precios
  const handleSavePrices = (e) => {
    e.preventDefault();
    const pricesToSave = menuItems.reduce((acc, item) => {
      // Solo guardamos los precios si son diferentes al precio inicial del archivo,
      // pero para simplicidad, guardaremos todos los precios actuales.
      acc[item.id] = item.price;
      return acc;
    }, {});

    savePricesToLocalStorage(pricesToSave);
    setIsSaved(true);
    // Nota: Llama a la función de guardado y los componentes de menú reflejarán el cambio.
  };

  // --- Renderización del formulario de Login ---
  if (!isAuthenticated) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow p-4">
              <h3 className="card-title text-center mb-4">{t('manager_login_title') || 'Acceso de Administrador'} 🔑</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">{t('manager_password_label') || 'Contraseña'}</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">{t('manager_login_button') || 'Ingresar'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Renderización del panel de Edición de Precios ---
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">{t('manager_edit_title') || 'Editar Precios del Menú'} 📝</h2>
      
      <div className="text-center mb-4">
        <button 
          onClick={() => setIsAuthenticated(false)} 
          className="btn btn-sm btn-danger me-2"
        >
          {t('manager_logout_button') || 'Cerrar Sesión'}
        </button>
        <p className="mt-3 text-muted fst-italic">
          {t('manager_note') || 'Los cambios solo serán visibles en este navegador hasta que se borre el caché o se guarden nuevos precios.'}
        </p>
      </div>

      <form onSubmit={handleSavePrices}>
        <div className="row g-4">
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.name[currentLanguage] || item.name.es}</h5>
                  <p className="card-text text-muted small">{item.description[currentLanguage] || item.description.es}</p>
                  <div className="input-group mt-3">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      className="form-control"
                      value={item.price}
                      onChange={(e) => handlePriceChange(item.id, e.target.value)}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-success btn-lg px-5">
            {t('manager_save_button') || 'Guardar Precios'}
          </button>
          {isSaved && <p className="text-success mt-2 fw-bold">{t('manager_saved_message') || '¡Precios guardados y actualizados!'}</p>}
        </div>
      </form>
    </div>
  );
};

export default PriceManager;