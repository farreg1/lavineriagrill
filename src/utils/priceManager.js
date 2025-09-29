import { menuData } from '../data/menuData';

const STORAGE_KEY = 'menuPricesOverride';

/**
 * Guarda los precios actualizados en localStorage.
 * @param {object} newPrices - Objeto con {itemId: newPrice, ...}
 */
export const savePricesToLocalStorage = (newPrices) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrices));
    console.log("Precios guardados en localStorage.");
  } catch (error) {
    console.error("Error al guardar precios en localStorage:", error);
  }
};

/**
 * Carga los precios sobreescritos desde localStorage.
 * @returns {object} Un objeto de mapeo {itemId: price} o un objeto vacío.
 */
const loadPricesFromLocalStorage = () => {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : {};
  } catch (error) {
    console.error("Error al cargar precios desde localStorage:", error);
    return {};
  }
};

/**
 * Obtiene el menú completo, aplicando los precios sobreescritos si existen.
 * @returns {object} El objeto menuData con precios actualizados.
 */
export const getMenuWithCurrentPrices = () => {
  const pricesOverride = loadPricesFromLocalStorage();
  const menuWithPrices = {};

  // Iterar sobre las categorías (appetizers, meats, etc.)
  for (const category in menuData) {
    menuWithPrices[category] = menuData[category].map(item => {
      const overriddenPrice = pricesOverride[item.id];
      // Si el id del item está en pricesOverride, usa ese precio; sino, usa el precio por defecto.
      const currentPrice = overriddenPrice !== undefined ? overriddenPrice : item.price;

      return {
        ...item,
        price: currentPrice, // ¡Precio actualizado!
      };
    });
  }

  return menuWithPrices;
};

// Función de utilidad para obtener todos los items planos con el precio actual
export const getAllItemsFlat = () => {
  const menu = getMenuWithCurrentPrices();
  return Object.values(menu).flat();
};