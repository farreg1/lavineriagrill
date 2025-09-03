// src/data/menuData.js

export const menuData = {
  // ======================================================
  // ENTRADAS / APPETIZERS
  // ======================================================
  appetizers: [
    {
      id: 1,
      name: { es: 'Carpaccio de Guanaco, Trucha Ahumada o Bife Curado', en: 'Guanaco, Smoked Trout or Aged Beef Carpaccio' },
      description: { es: 'Finas láminas de carne cruda con ensalada de verdes frescos.', en: 'Raw meat with a fresh green salad.' },
      price: 12000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 2,
      name: { es: 'Sopa del Día', en: 'Soup of the Day' },
      description: { es: 'Sopa crema de vegetales de estación con pan casero, queso crema y semillas.', en: 'Seasonal vegetable cream soup with home-made bread, cheese spread and seeds.' },
      price: 9800,
      image: '/img/menu-test.webp',
    },
    {
      id: 3,
      name: { es: 'Empanada de Carne, Cordero, Guanaco o Quinoa', en: 'Beef, Lamb, Guanaco or Quinoa Empanada' },
      description: { es: 'Empanada a elección con mix de vegetales frescos.', en: 'Empanada of your choice with a mix of fresh vegetables.' },
      price: 5000,
      image: '/img/menu-test.webp',
    },
    {
      id: 4,
      name: { es: 'Tabla de Salame y Queso', en: 'Salami and Cheese Platter' },
      description: { es: 'Salame estilo fuet, queso fontina y mix de aceitunas.', en: 'Salami fuet style, fontina cheese and a mix of olives platter.' },
      price: 9000,
      image: '/img/menu-test.webp',
    },
    {
      id: 5,
      name: { es: 'Bruschetta de Vegetales', en: 'Vegetable Bruschetta' },
      description: { es: 'Berenjena grillada, tomates cherry confitados y cebolla caramelizada sobre pan casero con ensalada de verdes y queso crema.', en: 'Grilled eggplant, cherry tomato confit, caramelized onions over home-baked bread with mixed greens salad and cream cheese.' },
      price: 8700,
      image: '/img/menu-test.webp',
    },
    {
      id: 6,
      name: { es: 'Paté de Champiñones y Nuez', en: 'Pate of Champignons and Walnut' },
      description: { es: 'Pasta untable de champiñones y nueces con hierbas aromáticas.', en: 'Mushroom and walnut spread with aromatic herbs.' },
      price: 9000,
      image: '/img/menu-test.webp',
      vegan: true,
    },
  ],

  // ======================================================
  // ENTRADAS A LA PARRILLA / GRILLED APPETIZERS
  // ======================================================
  grilled_appetizers: [
    {
      id: 7,
      name: { es: 'Brochette de Langostinos a la Parrilla', en: 'Grilled Prawn Brochette' },
      description: { es: 'Acompañado de vegetales frescos grillados.', en: 'Accompanied by fresh grilled vegetables.' },
      price: 12500,
      image: '/img/menu-test.webp',
    },
    {
      id: 8,
      name: { es: 'Provoleta Clásica Argentina', en: 'Roasted Argentinian Provolone Cheese' },
      description: { es: 'Queso provolone dorado a la parrilla.', en: 'Grilled provolone cheese.' },
      price: 18000,
      image: '/img/menu-test.webp',
    },
    {
      id: 9,
      name: { es: 'Provoleta Especial "La Vinería"', en: 'Special Argentinian Provolone Cheese' },
      description: { es: 'Provoleta rellena con morrones, champiñones frescos, orégano y merkén.', en: 'Grilled provolone cheese stuffed with red bell peppers, fresh mushrooms, oregano and merken.' },
      price: 23000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 10,
      name: { es: 'Mollejas de Ternera o Cordero', en: 'Veal or Lamb Sweetbreads' },
      description: { es: 'Según la estación.', en: 'According to the season.' },
      price: 15000,
      image: '/img/menu-test.webp',
    },
    {
      id: 11,
      name: { es: 'Mix de Achuras y Provoleta', en: 'Mix of Sausage & Offals' },
      description: { es: 'Chorizo, morcilla, mollejas, riñón y provoleta.', en: 'Argentinian sausage, blood sausage, sweetbreads, kidney and provolone cheese.' },
      price: 23000,
      image: '/img/menu-test.webp',
    },
  ],

  // ======================================================
  // NUESTRAS CARNES / OUR MEAT
  // ======================================================
  meats: [
    {
      id: 12,
      name: { es: 'Ojo de Bife (450g)', en: 'Rib Eye Steak (1lb)' },
      description: { es: 'El corazón del bife ancho, tierno y con un marmoleado perfecto.', en: 'The heart of the rib roast, tender and perfectly marbled.' },
      price: 36000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 13,
      name: { es: 'Bife de Chorizo (450g)', en: 'New York Strip Loin (1 lbs)' },
      description: { es: 'Un corte clásico argentino, magro y con un borde de grasa que le da un sabor inigualable.', en: 'A classic Argentinian cut, lean with a flavorful fat cap.' },
      price: 33000,
      image: '/img/menu-test.webp',
    },
    {
      id: 14,
      name: { es: 'Lomo (450g)', en: 'Beef Tenderloin (1 lbs)' },
      description: { es: 'El corte más tierno y magro de la res, de sabor suave.', en: 'The most tender and lean cut of beef, with a mild flavor.' },
      price: 40000,
      image: '/img/menu-test.webp',
    },
    {
      id: 15,
      name: { es: 'Tomahawk (800g)', en: 'Tomahawk (1.8 lbs)' },
      description: { es: 'Un imponente Ojo de Bife con hueso, ideal para compartir.', en: 'An impressive bone-in Rib Eye, perfect for sharing.' },
      price: 45000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 16,
      name: { es: 'Cordero Patagónico', en: 'Patagonian Lamb' },
      description: { es: 'Costillar, pierna y paleta de cordero local.', en: 'Rack, leg, and shoulder of local lamb.' },
      price: 33000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 17,
      name: { es: 'Bife de Guanaco (450g)', en: 'Guanaco Steak (1 lbs)' },
      description: { es: 'Carne exótica y magra de la región, de sabor intenso y único.', en: 'Exotic and lean meat from the region, with an intense and unique flavor.' },
      price: 30000,
      image: '/img/menu-test.webp',
    },
  ],
  
  // ======================================================
  // PASTAS
  // ======================================================
  pastas: [
    {
      id: 18,
      name: { es: 'Fettuccine al Huevo con Salsa de la Casa', en: 'Egg Fettuccine with House Sauce' },
      description: { es: 'Fettuccine salteado con cebolla, tomates cherry confitados y pesto de albahaca con praliné de semillas.', en: 'Egg fettuccine sauteed with onions, cherry tomato confit, and basil pesto with seed praline.' },
      price: 24000,
      image: '/img/menu-test.webp',
    },
    {
      id: 19,
      name: { es: 'Ravioles de Remolacha Rellenos de Trucha', en: 'Trout Stuffed Beet Ravioli' },
      description: { es: 'Ravioles de remolacha rellenos de trucha curada y ahumada, con salsa de crema de puerros.', en: 'Beet ravioli with a smoked and cured trout filling, topped with a leek cream sauce.' },
      price: 27000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 20,
      name: { es: 'Lasaña de Vegetales', en: 'Vegetable Lasagna' },
      description: { es: 'Rellena de espinaca, ricota, berenjenas y tomates, con salsa a elección.', en: 'Filled with spinach, ricotta, sliced eggplants and tomatoes, with your choice of sauce.' },
      price: 27000,
      image: '/img/menu-test.webp',
    },
    {
      id: 21,
      name: { es: 'Sorrentinos de Muzzarella y Kale', en: 'Cheese and Muzzarella "Sorrentinos Kale"' },
      description: { es: 'Grandes ravioles rellenos de quesos, quinoa y salsa triple tomate.', en: '"Sorrentinos" (big ravioli) stuffed with a variety of cheeses, quinoa and triple-tomato sauce.' },
      price: 27000,
      image: '/img/menu-test.webp',
    },
  ],

  // ======================================================
  // POSTRES / DESSERTS
  // ======================================================
  desserts: [
    {
      id: 22,
      name: { es: 'Mousse de Chocolate Amargo', en: 'Dark Chocolate Mousse' },
      description: { es: 'Cremoso mousse de chocolate amargo acompañado de naranjas en almíbar.', en: 'Creamy dark chocolate mousse paired with sliced oranges in simple syrup.' },
      price: 13000,
      image: '/img/menu-test.webp',
      vegan: true,
    },
    {
      id: 23,
      name: { es: 'Panqueque con Dulce de Leche y Helado', en: 'Pancake with Ice Cream' },
      description: { es: 'Panqueque con dulce de leche o frutos rojos y helado.', en: 'Pancake with dulce de leche or red berries and ice cream.' },
      price: 13000,
      image: '/img/menu-test.webp',
      featured: true,
    },
    {
      id: 24,
      name: { es: 'Brownie con Helado y Salsa de Berries', en: 'Brownie with Ice Cream and Berries Sauce' },
      description: { es: 'Brownie de chocolate con nueces, helado de mascarpone y salsa de frutos rojos.', en: 'Chocolate brownie with nuts, mascarpone ice cream and berries sauce.' },
      price: 13000,
      image: '/img/menu-test.webp',
    },
  ],
  

};

// ======================================================
// MENÚ GRUPAL / GROUP MENU (datos separados)
// ======================================================
export const groupMenuData = {
    // ...
};