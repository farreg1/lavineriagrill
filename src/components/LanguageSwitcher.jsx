// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // Obtener el idioma actual

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="dropdown-item d-flex align-items-center justify-content-center px-2 py-1 language-switcher"> 
      

      <button 
        onClick={() => changeLanguage('es')} 
        className={`btn btn-sm ${currentLanguage === 'es' ? 'lang-active' : 'lang-inactive'} me-2`}
      >
        ESPAÑOL
      </button>

      {/* Botón Inglés */}
      <button 
        onClick={() => changeLanguage('en')} 
        className={`btn btn-sm ${currentLanguage === 'en' ? 'lang-active' : 'lang-inactive'}`}
      >
        ENGLISH
      </button>
    </div>
  );
}

export default LanguageSwitcher;