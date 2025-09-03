// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="d-flex align-items-center">
      <button onClick={() => changeLanguage('es')} className="btn btn-sm btn-outline-light me-2">ES</button>
      <button onClick={() => changeLanguage('en')} className="btn btn-sm btn-outline-light">EN</button>
    </div>
  );
}

export default LanguageSwitcher;