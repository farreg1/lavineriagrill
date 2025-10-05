// src/data/menuData.js

export const menuData = {
  // ======================================================
  // ENTRADAS / APPETIZERS (Páginas 1 y 2 del PDF)
  // ======================================================
  appetizers: [
    {
      id: 1,
      name: { es: 'Carpaccio', en: 'Carpaccio' },
      description: { es: 'Guanaco, Trucha ahumada o Ojo de bife madurado. Carne cruda con mix de hojas verdes.', en: 'Guanaco, smoked trout or aged beef. Raw meat with fresh green salad.' },
      price: 18000,
      image: '/img/menu-1.jpg',
      featured: true,
    },
    {
      id: 2,
      name: { es: 'Sopa del día', en: 'Soup of the day' },
      description: { es: '', en: '' },
      price: 9000,
      image: '/img/menu-2.jpg',
    },
    {
      id: 3,
      name: { es: 'Crema de vegetales de estación', en: 'Seasonal vegetable cream soup' },
      description: { es: 'Con tostada de pan casero, queso blanco y semillas.', en: 'With home-made bread, cheese spread and seeds.' },
      price: 5000,
      image: '/img/menu-3.jpg',
    },
    {
      id: 4,
      name: { es: 'Empanada', en: 'Empanada' },
      description: { es: 'Ternera, cordero, guanaco o quinoa. Acompañadas de mix de vegetales frescos.', en: 'Beef, lamb, guanaco or quinoa. With a mix of fresh vegetables.' },
      price: 5000,
      image: '/img/menu-4.jpg',
    },
    {
      id: 5,
      name: { es: 'Tabla de salamín y queso', en: 'Salami and cheese platter' },
      description: { es: 'Salame tipo fuet, queso fontina y aceitunas mixtas.', en: 'Salami fuet style, fontina cheese and mix of olives platter.' },
      price: 12000,
      image: '/img/menu-5.jpg',
    },
    {
      id: 6,
      name: { es: 'Brusquetas de vegetales', en: 'Vegetable Bruschetta' },
      description: { es: 'Berenjenas, cherries confitados, cebollas caramelizadas, coronadas con ensalada de verdes y queso crema.', en: 'Grilled eggplant, cherry tomato confit, caramelized onions over home-baked bread with mixed greens salad and cream cheese.' },
      price: 9000,
      image: '/img/menu-6.jpg',
    },
    {
      id: 7,
      name: { es: 'Paté de champignones y nuez (Opción Vegana)', en: 'Pate of champignones and walnut (Vegan Option)' },
      description: { es: 'Pasta untable de champignones y nuez especiado con hierbas aromáticas.', en: 'Mushroom and walnut spread with aromatic herbs.' },
      price: 12000,
      image: '/img/menu-7.jpg',
      vegan: true,
    },
  ],

  // ======================================================
  // ENTRADAS A LAS BRASAS / GRILLED APPETIZERS (Páginas 1 y 2 del PDF)
  // ======================================================
  grilled_appetizers: [
    {
      id: 8,
      name: { es: 'Brochetas de langostino al grill', en: 'Grilled prawn brochette' },
      description: { es: 'Acompañados de vegetales frescos grillados.', en: 'Accompanied by fresh grilled vegetables.' },
      price: 16000,
      image: '/img/menu-8.jpg',
      featured: true,
    },
    {
      id: 9,
      name: { es: 'Brochetas de vegetales grillados con salsa Romesco (Vegana)', en: 'Grilled vegetable brochette with romesco sauce (Vegan)' },
      description: { es: '', en: '' },
      price: 9000,
      image: '/img/menu-8.jpg',
      vegan: true,
    },
    {
      id: 10,
      name: { es: 'Morcilla bombón', en: 'Blood sausage' },
      description: { es: '', en: '' },
      price: 5000,
      image: '/img/menu-8.jpg',
    },
    {
      id: 11,
      name: { es: 'Mollejas vacuna o de cordero', en: 'Veal or lamb sweetbreads' },
      description: { es: 'Según estación.', en: 'According to the season.' },
      price: 20000,
      image: '/img/menu-8.jpg',
    },
    {
      id: 12,
      name: { es: 'Provoleta a la Parrilla', en: 'Roasted Argentinian provolone cheese' },
      description: { es: '', en: '' },
      price: 15000,
      image: '/img/menu-8.jpg',
    },
    {
      id: 13,
      name: { es: 'Provoleta Especial', en: 'Special Argentinian provolone cheese' },
      description: { es: 'Rellena de morrones asados y hongos frescos con orégano y merkén.', en: 'Stuffed with red bell peppers, fresh mushrooms, oregano and merken.' },
      price: 18000,
      image: '/img/menu-8.jpg',
      featured: true,
    },
    {
      id: 14,
      name: { es: 'Chorizo', en: 'Argentinian sausage' },
      description: { es: '', en: '' },
      price: 7000,
      image: '/img/menu-8.jpg',
    },
    {
      id: 15,
      name: { es: 'Mix de achuras', en: 'Mix of sausage & offals' },
      description: { es: 'Chorizo, morcilla, molleja, riñón y provoleta.', en: 'Argentinian sausage, blood sausage, sweetbreads, kidney and provolone cheese.' },
      price: 25000,
      image: '/img/menu-8.jpg',
    },
  ],

  // ======================================================
  // CARNES / MEAT (Páginas 3 y 4 del PDF)
  // ======================================================
  meats: [
    // --- Ternera ---
    { id: 16, name: { es: 'Ojo de bife (450g)', en: 'Rib eye steak (1 lbs)' }, price: 43000, featured: true, category: 'Ternera' },
    { id: 17, name: { es: 'Bife de chorizo (450g)', en: 'New York strip loin (1 lbs)' }, price: 40000, category: 'Ternera' },
    { id: 18, name: { es: 'Babe bife de chorizo (280g)', en: 'Petite NY Strip loin (1/2 lbs)' }, price: 30000, category: 'Ternera' },
    { id: 19, name: { es: 'Babe ojo de bife (280g)', en: 'Petite rib eye steak (1/2 lbs)' }, price: 33000, category: 'Ternera' },
    { id: 20, name: { es: 'Medallón de lomo (450g)', en: 'Beef tenderloin (1 lbs)' }, price: 50000, category: 'Ternera' },
    { id: 21, name: { es: 'Bife de Costilla/Tomahawk (550g)', en: 'Tomahawk (1.8 lbs)' }, price: 55000, featured: true, category: 'Ternera' },
    // --- Carnes Maduradas ---
    { id: 22, name: { es: 'Carnes Maduradas: Bife de costilla/Tomahawk (550g)', en: 'Dry age steak: Tomahawk (1.8 lbs)' }, description: { es: 'Curación lenta y controlada de temperatura, humedad y circulación de aire.', en: 'Slow and controlled curing process.' }, price: 70000, category: 'Carnes Maduradas' },
    { id: 23, name: { es: 'Carnes Maduradas: Bife de chorizo (450g)', en: 'Dry age steak: New York strip loin (1 lbs)' }, price: 53000, category: 'Carnes Maduradas' },
    // --- Parrilladas Mixtas ---
    { id: 24, name: { es: 'Parrillada de Mar c/guarnición (2p)', en: 'Mix Grilled Seafood with side dish (2p)' }, description: { es: 'Pulpo, langostinos, salmón, vieira, centolla. Acompañado de puré mixto y ensalada.', en: 'Octopus, prawn, salmon, scallop, crab with mixed puree and salad.' }, price: 140000, category: 'Parrilladas Mixtas' },
    { id: 25, name: { es: 'Mix de carnes c/guarnición (2p)', en: 'Mix of Meats with side dish(2p)' }, description: { es: 'Ternera 200g, Cerdo 200g, Cordero 200g, Pollo 200g, Guanaco 200g, acompañado de papas fritas y ensalada.', en: 'Beef 200 g, Pork 200 g, Lamb 200 g, Chicken 200g. Guanaco 200g with french fries and salad.' }, price: 120000, category: 'Parrilladas Mixtas' },
    // --- Cerdo ---
    { id: 26, name: { es: 'Bife de bondiola pintada (450g)', en: 'Pork shoulder fillet (1 lbs)' }, description: { es: 'Con mostaza y chutney.', en: 'With mustard and chutney.' }, price: 33000, category: 'Cerdo' },
    { id: 27, name: { es: 'Matambrito de cerdo', en: 'Pork flank steak' }, price: 33000, category: 'Cerdo' },
    // --- Cordero ---
    { id: 28, name: { es: 'Porción de cordero (Costilla y pata)', en: 'Lamb (Rack, leg and shoulder of lamb)' }, price: 35000, category: 'Cordero' },
    // --- Pescado ---
    { id: 29, name: { es: 'Salmón rosado', en: 'Salmon steak' }, price: 48000, category: 'Pescado' },
    { id: 30, name: { es: 'Trucha', en: 'Trout' }, price: 41000, category: 'Pescado' },
    // --- Guanaco ---
    { id: 31, name: { es: 'Bife de Guanaco (450g)', en: 'Guanaco steak (1 lbs)' }, price: 35000, category: 'Guanaco' },
  ],

  // ======================================================
  // PASTAS / PASTA (Páginas 7 y 8 del PDF)
  // *Todas las pastas incluyen bowl de ensalada del día
  // ======================================================
  pastas: [
    {
      id: 32,
      name: { es: 'Fettuccini al huevo con salsa de la casa', en: 'Egg fettuccine with house sauce' },
      description: { es: 'Salteados en cebollas, cherries confitados y pesto de albahaca con praliné de semillas. (Opción Mariscos +13000)', en: 'Sauteed with onions, cherry tomato confit, and basil pesto with seed praline. (SEAFOOD OPTION +13000)' },
      price: 22000,
      featured: true,
    },
    {
      id: 33,
      name: { es: 'Raviolones de remolacha rellenos de trucha', en: 'Trout stuffed beet ravioli' },
      description: { es: 'Trucha ahumada y curada en masa de remolacha en salsa de puerros y crema de leche.', en: 'Beet ravioli with a smoked and cured trout filling topped with a leek cream sauce.' },
      price: 30000,
    },
    {
      id: 34,
      name: { es: 'Lasagna de verduras', en: 'Vegetable lasagna' },
      description: { es: 'Con ragú de ternera, ragú de cordero o salsa rosa. Base de espinacas, ricota, berenjenas y tomates.', en: 'With beef or lamb ragout or cream sauce. Filled with spinach, ricotta, sliced eggplants and tomatoes.' },
      price: 30000,
    },
    {
      id: 35,
      name: { es: 'Sorrentinos Kale', en: 'Cheese and Muzzarella "Sorrentinos Kale"' },
      description: { es: 'Muzzarella, queso de cabra, tomates deshidratados y quinoa con salsa tripomodoro.', en: '"Sorrentinos" (big ravioli) stuffed with a variety of cheeses, quinoa and triple-tomato sauce.' },
      price: 30000,
      featured: true,
    },
    {
      id: 36,
      name: { es: 'Risoto de hongos', en: 'Mushroom Risotto' },
      description: { es: 'Cremoso de arroz con champignones, portobello y hongos de pino. (Opción Mariscos +10000)', en: 'Creamy rice cooked with a mix of sliced pine, portobello and button mushrooms. (SEAFOOD OPTION +10000)' },
      price: 35000,
    },
    {
      id: 37,
      name: { es: 'Ratatouille (Opción Vegana)', en: 'Ratatouille (Vegan Option)' },
      description: { es: 'Verduras cocidas sobre base de salsa de tomate.', en: 'Cooked vegetables on a tomato sauce base.' },
      price: 30000,
      vegan: true,
    },
  ],

  // ======================================================
  // POSTRES / DESSERTS (Páginas 13 y 14 del PDF)
  // ======================================================
  desserts: [
    {
      id: 38,
      name: { es: 'Mousse de chocolate y naranjas en almíbar (Vegana)', en: 'Dark chocolate mousse and sliced oranges with simple syrup (Vegan Option)' },
      description: { es: 'Crema aireada de chocolate amargo equilibrada con cítricos de naranja.', en: 'Creamy dark chocolate mousse paired with sliced oranges in simple syrup.' },
      price: 13000,
      vegan: true,
    },
    {
      id: 39,
      name: { es: 'Strudel de manzana con crema de leche', en: 'Apple strudel with whipped cream' },
      description: { es: 'Masa plegada rellena de manzana, nueces y pasas en ron, acompañada de crema de leche.', en: 'Very thin folder dough stuffed with apple, walnuts and raisins drunk in ron, accompanied with whipped cream.' },
      price: 13000,
    },
    {
      id: 40,
      name: { es: 'Panqueque con helado (Opción Vegana)', en: 'Pancake with ice cream (Vegan Option)' },
      description: { es: 'Panqueques con dulce de leche o frutos rojos con helado.', en: 'Pancake with dulce de leche or red berries and ice cream.' },
      price: 13000,
      vegan: true,
      featured: true,
    },
    {
      id: 41,
      name: { es: 'Cheesecake de maracuyá con trufas', en: 'Passion fruit cheesecake with chocolate truffles' },
      description: { es: 'Crema de queso, crocante de cookies, bolitas de chocolate y gel de la pasión.', en: 'Soft fresh cream cheese, buttery cracker crust, chocolate truffle balls, coconut flakes and passion fruit gel.' },
      price: 13000,
    },
    {
      id: 42,
      name: { es: 'Brownie de chocolate con helado', en: 'Brownie with ice cream and berries sauce' },
      description: { es: 'Biscocho de chocolate, nueces, helado de queso mascarpone y salsa de frutos rojos.', en: 'Chocolate brownie with nuts, mascarpone ice cream and berries sauce.' },
      price: 13000,
      featured: true,
    },
    {
      id: 43,
      name: { es: 'Helados Artesanales por Bocha', en: 'Scoop of artisan ice cream' },
      description: { es: 'Crema Americana, Vainilla, Chocolate, Calafate, Menta, Frambuesa, Dulce de leche o Mascarpone.', en: 'Americam cream sundae, vanilla, calafate, patagonian chocolate, dulce de leche with chocolate flakes, mint with chocolates flakes, raspberry cream, mascarpone with red berries.' },
      price: 4500,
    },
    {
      id: 44,
      name: { es: 'Copas "La Vineria"', en: 'Ice Creams "La Vineria"' },
      description: { es: 'Con Whisky, helado de crema y nueces / Con Ron, helado de menta / Con helado de vino tinto, reducción al Malbec.', en: 'With whisky, walnut and ice cream / With ron, chocolate flakes and mint ice cream / Wine ice cream in a Malbec reduction and red fruit.' },
      price: 13000,
    },
    {
      id: 45,
      name: { es: 'Degustación de postres', en: 'Dessert tasting' },
      description: { es: 'A elección del chef para 4 personas.', en: 'Chefs selection of varied desserts for 4 people.' },
      price: 24000,
    },
    {
      id: 46,
      name: { es: 'Affogato', en: 'Affogato' },
      description: { es: 'Café espresso con helado de vainilla y crocante de frutos secos.', en: 'Espresso coffee with vanilla ice cream and crunch nuts.' },
      price: 8000,
    },
  ],
};

