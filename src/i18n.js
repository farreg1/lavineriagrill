// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta el idioma del usuario
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    // Archivos de traducción
    resources: {
      es: {
        translation: {
          // --- Navbar ---
          navHome: 'Inicio',
          navAbout: 'Nosotros',
          navServices: 'Servicios',
          navMenu: 'Menú',
          navContact: 'Contacto',
          // --- Hero ---
          heroTitle: 'Sabores de la Patagonia en Nuestra Parrilla y Cava',
          heroSubtitle: 'En el corazón de El Chaltén, nuestro restaurante combina la pasión por la parrilla argentina y una cava de vinos única. Ingredientes locales y fuegos lentos para una experiencia inolvidable.',
          bookTable: 'Reservar Mesa',
          // --- Servicios ---
          servicesTitle: 'Nuestros Pilares',
          card1_title: 'Carnes Premium',
          card1_text: 'Seleccionamos los mejores cortes de Argentina, madurados a la perfección y cocinados lentamente a las brasas para un sabor inigualable.',
          card2_title: 'Nuestra Cava',
          card2_text: 'Descubrí una selección exclusiva de vinos de la Patagonia, curada por expertos para maridar perfectamente con nuestros platos.',
          card3_title: 'Servicio de Excelencia',
          card3_text: 'Nuestro equipo está dedicado a hacer de tu visita una experiencia memorable, con un servicio cálido y atento a cada detalle.',
        // --- Nosotros (About) ---
          about_subtitle: 'Nuestra Historia',
          about_title: 'Bienvenidos a La Vinería Grill',
          about_text: 'En el corazón de la Patagonia, La Vinería Grill es tu restaurante en El Chaltén. Viví la auténtica experiencia de la parrilla argentina, con los cortes más tradicionales asados lentamente sobre leña de quebracho colorado. Nuestra cava te invita a un recorrido por las mejores regiones vitivinícolas del país, con más de 100 etiquetas seleccionadas. Además, deleitate con nuestras pastas caseras y sorprendentes opciones vegetarianas. Disfrutá de todo esto en un amplio salón con vistas exclusivas al cerro Fitz Roy, atendido por nuestro personal bilingüe, listo para hacer de tu cena en El Chaltén un momento inolvidable.',
          stat1_number: '+100',
          stat1_line1: 'Etiquetas',
          stat1_line2: 'en Cava',
          stat2_number: 'Única',
          stat2_line1: 'Vista al',
          stat2_line2: 'Fitz Roy',
          read_more: 'Leer Más',
          // --- Menú ---
          menu_section_title: 'Nuestro Menú',
          menu_title_featured: 'Nuestros Platos Destacados',
          menu_title_full: 'Explorá Nuestra Carta',
          menu_tab_appetizers: 'Entradas',
          menu_tab_grill: 'Parrilla',
          menu_tab_pastas: 'Pastas',
          menu_tab_desserts: 'Postres',
          see_full_menu: 'Ver Menú Completo',
          // --- Ubicación ---
          location_subtitle: "Ubicación",
          location_title: "¿Dónde Encontrarnos?",
          location_map_title: "Mapa de La Vinería Grill",
          location_button: "Ver en Google Maps",
           // --- Admin ---
          manager_login_title: 'Acceso de Administrador',
          manager_password_label: 'Contraseña',
          manager_login_button: 'Ingresar',
          manager_login_error: 'Contraseña incorrecta',
          manager_edit_title: 'Editar Precios del Menú',
          manager_logout_button: 'Cerrar Sesión',
          manager_note: 'Los precios guardados son válidos para el navegador en uso. Para que los cambios sean visibles, deben ser guardados.',
          manager_save_button: 'Guardar Precios',
          manager_saved_message: '¡Precios guardados y actualizados!',
          // --- Navbar ---
          navHome: 'Inicio',
          navAbout: 'Nosotros',
          navServices: 'Servicios',
          navMenu: 'Menú',
          navContact: 'Contacto',
          navDropdownTitle: 'Idioma', // Nueva clave para el título del menú desplegable
          navBooking: 'Reservar Mesa', // Nueva clave para el botón y enlace de reserva
          navTeam: 'Nuestro Equipo', // Nueva clave para el enlace /team
          navTestimonial: 'Testimonios', // Nueva clave para el enlace /testimonial
          // --- Footer --- 👈 Nuevo bloque
          footerCompanyTitle: 'Compañía',
          footerAbout: 'Nosotros',
          footerContact: 'Contacto',
          footerReservation: 'Reservas',
          footerPrivacy: 'Política de Privacidad',
          footerTerms: 'Términos y Condiciones',
          
          footerContactTitle: 'Contacto',
          footerAddress: 'Andreas Madsen N° 71, El Chalten, Santa Cruz', // Ajusta si tienes una dirección real
          footerPhone: '+54 9 2966 44-8001', // Ajusta si tienes un teléfono real
          footerEmail: 'info@example.com', // Ajusta si tienes un email real
          
          footerOpeningTitle: 'Horarios',
          footerDays: 'Lunes - Domingo',
          footerSunday: 'Domingo',
          footerHoursWeek: '18:00 - 23:30', // Horario real
          footerHoursSunday: '10AM - 08PM', // Horario real
          
          footerNewsletterTitle: 'Newsletter',
          footerNewsletterText: 'Suscríbete para recibir nuestras últimas novedades y ofertas especiales.',
          footerEmailPlaceholder: 'Tu correo electrónico',
          footerSignUpButton: 'Suscribirse',

          footerCopyright: '© La Vineria Grill, Todos los derechos reservados.',
          footerDesignedBy: 'Diseñado por',
          
          footerMenuHome: 'Inicio',
          footerMenuCookies: 'Cookies',
          footerMenuHelp: 'Ayuda',
          footerMenuFaqs: 'Preguntas Frecuentes',

        }
      },
      en: {
        translation: {
          // --- Navbar ---
          navHome: 'Home',
          navAbout: 'About',
          navServices: 'Service',
          navMenu: 'Menu',
          navContact: 'Contact',
          // --- Hero ---
          heroTitle: 'The Authentic Taste of Patagonia: Our Grill & Wine Cellar',
          heroSubtitle: 'In the heart of El Chaltén, our restaurant blends a passion for the Argentine grill with a one-of-a-kind wine cellar, using local ingredients and slow fires to create an unforgettable experience.',
          bookTable: 'Book A Table',
          // --- Services ---
          servicesTitle: 'Our Pillars',
          card1_title: 'Premium Meats',
          card1_text: 'We select the finest cuts of Argentine beef, aged to perfection and slow-grilled over embers to achieve an unparalleled flavor.',
          card2_title: 'Our Wine Cellar',
          card2_text: 'Discover an exclusive selection of Patagonian wines, expertly curated to pair perfectly with our dishes.',
          card3_title: 'Exceptional Service',
          card3_text: 'Our team is dedicated to making your visit a memorable experience, providing warm and attentive service down to the last detail.',
           // --- About Us ---
          about_subtitle: 'Our Story',
          about_title: 'Welcome to La Vinería Grill',
          about_text: 'In the heart of Patagonia, La Vinería Grill is your restaurant in El Chaltén. Live the authentic Argentine grill experience, with the most traditional cuts slow-roasted over red quebracho firewood. Our wine cellar invites you on a journey through the country\'s best wine regions, with over 100 selected labels. In addition, delight in our homemade pastas and surprising vegetarian options. Enjoy all of this in a spacious dining room with exclusive views of Mount Fitz Roy, served by our bilingual staff, ready to make your dinner in El Chaltén an unforgettable moment.',
          stat1_number: '100+',
          stat1_line1: 'Wines',
          stat1_line2: 'in Cellar',
          stat2_number: 'Exclusive',
          stat2_line1: 'View of',
          stat2_line2: 'Fitz Roy',
          read_more: 'Read More',
          // --- Menu ---
          menu_section_title: 'Our Menu',
          menu_title_featured: 'Our Most Popular Dishes',
          menu_title_full: 'Explore Our Menu',
          menu_tab_appetizers: 'Appetizers',
          menu_tab_grill: 'Grill',
          menu_tab_pastas: 'Pastas',
          menu_tab_desserts: 'Desserts',
            see_full_menu: 'See Full Menu',
            // --- Location ---
          location_subtitle: "Location",
          location_title: "Where To Find Us",
          location_map_title: "La Vinería Grill Map",
          location_button: "View on Google Maps",
                     // --- Admin ---
          manager_login_title: 'Acceso de Administrador',
          manager_password_label: 'Contraseña',
          manager_login_button: 'Ingresar',
          manager_login_error: 'Contraseña incorrecta',
          manager_edit_title: 'Editar Precios del Menú',
          manager_logout_button: 'Cerrar Sesión',
          manager_note: 'Los precios guardados son válidos para el navegador en uso. Para que los cambios sean visibles, deben ser guardados.',
          manager_save_button: 'Guardar Precios',
          manager_saved_message: '¡Precios guardados y actualizados!',
        // --- Navbar ---
          navHome: 'Home',
          navAbout: 'About',
          navServices: 'Service',
          navMenu: 'Menu',
          navContact: 'Contact',
          navDropdownTitle: 'Language', // Nueva clave para el título del menú desplegable
          navBooking: 'Book A Table', // Nueva clave para el botón y enlace de reserva
          navTeam: 'Our Team', // Nueva clave para el enlace /team
          navTestimonial: 'Testimonial', // Nueva clave para el enlace /testimonial
          // --- Footer --- 👈 Nuevo bloque
          footerCompanyTitle: 'Company',
          footerAbout: 'About Us',
          footerContact: 'Contact Us',
          footerReservation: 'Reservation',
          footerPrivacy: 'Privacy Policy',
          footerTerms: 'Terms & Condition',

          footerContactTitle: 'Contact',
          footerAddress: 'Andreas Madsen N° 71, El Chalten, Santa Cruz', // Adjust if you have a real address
          footerPhone: '+54 9 2966 44-8001', // Adjust if you have a real phone
          footerEmail: 'info@example.com', // Adjust if you have a real email

          footerOpeningTitle: 'Opening',
          footerDays: 'Monday - Sunday',
          footerSunday: 'Sunday',
          footerHoursWeek: '06PM - 11:30PM', // Real hours
          footerHoursSunday: '10AM - 08PM', // Real hours

          footerNewsletterTitle: 'Newsletter',
          footerNewsletterText: 'Subscribe to receive our latest news and special offers.',
          footerEmailPlaceholder: 'Your email',
          footerSignUpButton: 'Sign Up',
          
          footerCopyright: '© La Vineria Grill, All Right Reserved.',
          footerDesignedBy: 'Designed By',

          footerMenuHome: 'Home',
          footerMenuCookies: 'Cookies',
          footerMenuHelp: 'Help',
          footerMenuFaqs: 'FQAs',

        }
      }
    },
    fallbackLng: 'en', // Idioma por defecto si el detectado no está disponible
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;