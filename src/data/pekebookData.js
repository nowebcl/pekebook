export const STORE_INFO = {
  name: "PEKEBOOK",
  subtitle: "Librería & Bazar en Puerto Montt",
  tagline: "Todo lo que necesitas para tu creatividad, negocio y estudio en un solo lugar.",
  phone: "+56 9 6748 6503",
  whatsappNumber: "56967486503",
  email: "contacto@pekebook.cl",
  address: "Mañihual 285, Local 3, Puerto Montt, Chile",
  hours: "Lunes a Viernes: 09:30 - 19:30 | Sábados: 10:00 - 16:00",
  mapsUrl: "https://maps.google.com/maps?q=Ma%C3%B1ihual%20285%2C%20Local%203%2C%20Puerto%20Montt%2C%20Chile.",
  logoUrl: "/banners/exact_logo.png",
  iconUrl: "https://pekebook.cl/wp-content/uploads/2025/07/cropped-Recurso-3.webp",
  nowebLogo: "https://pekebook.cl/wp-content/uploads/2025/07/Recurso-18-scaled.webp",
};

export const STORE_GALLERY = [
  {
    url: "https://pekebook.cl/wp-content/uploads/2025/07/Imagen-de-WhatsApp-2025-07-21-a-las-21.16.13_5bb572c2.jpg",
    title: "Nuestro Local en Puerto Montt",
    tag: "Tienda Física"
  },
  {
    url: "https://pekebook.cl/wp-content/uploads/2025/07/IMG-20250721-WA0006.jpg",
    title: "Stock Permanente de Insumos",
    tag: "Variedad"
  },
  {
    url: "https://pekebook.cl/wp-content/uploads/2025/07/IMG-20250721-WA0010.jpg",
    title: "Área de Impresión y Encuadernación",
    tag: "Taller"
  },
  {
    url: "https://pekebook.cl/wp-content/uploads/2025/07/491445813_17913224271098232_4509710459591268297_n-1.jpg",
    title: "Papelería Creativa & Útiles",
    tag: "Novedades"
  },
  {
    url: "https://pekebook.cl/wp-content/uploads/2025/07/491497905_17913224322098232_6545544990052419857_n-1.jpg",
    title: "Artículos de Bazar y Regalos",
    tag: "Detalles"
  }
];

export const CATEGORIES = [
  { id: "todos", name: "Todo el catálogo", icon: "Sparkles", count: 18 },
  { id: "papeleria", name: "Papelería & Adhesivos", icon: "FileText", count: 5 },
  { id: "encuadernacion", name: "Encuadernación", icon: "BookOpen", count: 4 },
  { id: "sublimacion", name: "Sublimación & DTF", icon: "Printer", count: 4 },
  { id: "bazar", name: "Bazar & Regalos", icon: "Gift", count: 3 },
  { id: "servicios", name: "Servicios de Taller", icon: "Wrench", count: 2 },
];

export const SERVICES = [
  {
    id: "serv-encuadernacion",
    title: "Encuadernación Profesional",
    description: "Encuadernación de libros, tesis universitarias, cuadernos personalizados, agendas corporativas y proyectos.",
    category: "encuadernacion",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__generate-an-image-of-a-professional-bookbinding-se__15632-r92hhkn8rbwn250600i4jdnvcg33ailcg20h87qyj4.jpeg",
    priceRange: "Desde $3.500",
    features: ["Tapa dura o rústica", "Anillado doble cero y espiral", "Acabado mate o brillante", "Entrega rápida en Puerto Montt"]
  },
  {
    id: "serv-sublimacion",
    title: "Insumos & Sublimación",
    description: "Venta de insumos para estampado y personalización de tazas, textiles, láminas DTF UV y botellas térmicas.",
    category: "sublimacion",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__create-a-realistic-image-of-a-section-of-a-store-d__15633-r92hihjlej5ochodnwq2gnd04xkxrx7y8kuh0we6hc.jpeg",
    priceRange: "Venta por unidad y mayorista",
    features: ["Tazones calidad AAA", "Papel de sublimación de secado rápido", "Tintas especializadas", "Precios preferentes club emprendedor"]
  },
  {
    id: "serv-impresion",
    title: "Impresión Digital de Alta Precisión",
    description: "Impresión de documentos, folletería comercial, tarjetas de presentación, pósters y etiquetas en diversos gramajes.",
    category: "impresiones",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__create-a-professional-realistic-image-of-a-digital__15631-r92hgpmkhsq6f098153fr3hnqqbz8i67bshge30y8g.jpeg",
    priceRange: "Desde $150 / página",
    features: ["Impresión B/N y Color láser", "Papel bond, opalina, fotográfico", "Corte guillotina de precisión", "Revisión técnica de archivos"]
  },
  {
    id: "serv-bazar",
    title: "Bazar & Papelería Diaria",
    description: "Artículos para el hogar, oficina, estudiantes y kits listos para regalar o emprender.",
    category: "bazar",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__generate-a-realistic-highquality-image-of-a-bazaar__15630-r92hfulw89jprvia29oqytbg50kv6hr27iyfjyaxxs.jpeg",
    priceRange: "Variedad de opciones",
    features: ["Lápices y marcadores", "Organizadores y planners", "Kits escolares y de oficina", "Atención cercana y personalizada"]
  },
  {
    id: "serv-asesoria",
    title: "Asesoría Personalizada para Emprendedores",
    description: "Orientación técnica y de insumos para quienes inician en el mundo de la papelería, encuadernación y estampados.",
    category: "asesoria",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/women-cutting-paper-in-printing-shop-DGH9QFZ-r92fgr3dae7xlos481bmv97akt0dyohyrmj9rhpykw.jpg",
    priceRange: "Gratuita con tu compra",
    features: ["Recomendación de máquinas y troqueles", "Cálculo de costos y materiales", "Soporte vía WhatsApp y en local"]
  }
];

export const PROMO_BANNERS = [
  {
    id: "banner-1",
    image: "/banners/hero.jpg",
    title: "Papelería Creativa & Encuadernación",
    subtitle: "Insumos premium, espirales wire-o y papeles especiales",
    tag: "NUEVA TEMPORADA",
    cta: "Ver Insumos",
    category: "papeleria"
  },
  {
    id: "banner-2",
    image: "/banners/sublimacion.jpg",
    title: "Sublimación, DTF UV & Estampados",
    subtitle: "Tazones AAA, láminas UV sin calor y prensas térmicas",
    tag: "TENDENCIA",
    cta: "Explorar Sublimación",
    category: "sublimacion"
  },
  {
    id: "banner-3",
    image: "/banners/taller.jpg",
    title: "Taller de Encuadernación & Tesis",
    subtitle: "Impresión de alta resolución y acabados en el día",
    tag: "TALLER LOCAL",
    cta: "Cotizar Trabajo",
    action: "servicios"
  },
  {
    id: "banner-4",
    image: "/banners/emprende.jpg",
    title: "Kits Emprende & Club Mayorista",
    subtitle: "Todo lo que necesitas para lanzar tu marca artesanal",
    tag: "PACKS EMPRENDEDOR",
    cta: "Ver Kits",
    category: "bazar"
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Papel Adhesivo Fotográfico A4 Brillante (Pack 20 hojas)",
    category: "papeleria",
    price: 4990,
    originalPrice: 6200,
    badge: "MÁS VENDIDO",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80",
    description: "Papel autoadhesivo fotográfico de alta adherencia y secado instantáneo. Ideal para etiquetas escolares, packaging y stickers de alta definición.",
    specs: ["Formato: A4 (21 x 29.7 cm)", "Gramaje: 135 gr/m²", "Acabado: Glossy impermeable", "Pack: 20 unidades"]
  },
  {
    id: "prod-2",
    name: "Tazón Cerámica Blanco 11oz Calidad Premium AAA",
    category: "sublimacion",
    price: 1990,
    originalPrice: 2600,
    badge: "OFERTA",
    stock: "En stock local",
    image: "/products/mug.jpg",
    description: "Taza de cerámica tratada con polímero especial para sublimación de máxima nitidez y resistencia a microondas y lavavajillas.",
    specs: ["Capacidad: 325 ml (11oz)", "Color: Blanco brillante parejo", "Calidad: AAA importado", "Listo para prensar"]
  },
  {
    id: "prod-2b",
    name: "Libreta Artesanal Tapa Dura Pastel Lilac Wire-O A5",
    category: "encuadernacion",
    price: 6990,
    originalPrice: 8500,
    badge: "DESTACADO",
    stock: "En stock local",
    image: "/products/notebook.jpg",
    description: "Libreta de encuadernación artesanal con tapas duras forradas en lino lavanda, anillado Wire-O cobre y 100 hojas de papel bond suave punteado.",
    specs: ["Tamaño: A5 (15 x 21 cm)", "Hojas: 100 hojas punteadas", "Acabado: Lino textil lavanda", "Hecho en taller Pekebook"]
  },
  {
    id: "prod-3",
    name: "Cartón Piedra A4 1.5mm Para Encuadernación (Pack 10 un)",
    category: "encuadernacion",
    price: 4500,
    originalPrice: null,
    badge: "TALLER",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    description: "Cartón contracolado de alta densidad, corte parejo y sin curvaturas. La base perfecta para tapas duras de agendas, libretas y álbumes.",
    specs: ["Espesor: 1.5 mm", "Medida: 21.5 x 30.5 cm (A4 extendido)", "Cantidad: 10 unidades", "Resistencia superior"]
  },
  {
    id: "prod-4",
    name: "Anillos Doble Cero Metálicos Paso 2:1 (Pack 10 unidades)",
    category: "encuadernacion",
    price: 3890,
    originalPrice: 4500,
    badge: null,
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80",
    description: "Espirales metálicos Wire-O paso 2:1 para acabado premium en cuadernos, agendas y calendarios de escritorio.",
    specs: ["Paso: 2:1 (2 orificios por pulgada)", "Diámetro: 5/8 pulgada (150 hojas)", "Color: Blanco o Negro clásico", "Pack: 10 unidades"]
  },
  {
    id: "prod-5",
    name: "Lámina DTF UV Por Metro Para Superficies Rígidas",
    category: "sublimacion",
    price: 10990,
    originalPrice: 15990,
    badge: "OFERTA",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1572945553531-15594e9f7ebc?w=600&auto=format&fit=crop&q=80",
    description: "Stickers DTF UV con barniz de relieve listos para transferir sin calor en tazas, botellas plásticas, madera o vidrio. Alta durabilidad al tacto.",
    specs: ["Medida: 30 x 100 cm", "Acabado: Relieve brillante UV", "Aplicación: Frío (sin plancha)", "Resistente al agua"]
  },
  {
    id: "prod-6",
    name: "Papel Fotográfico Matte Doble Cara A4 220g (50 hojas)",
    category: "papeleria",
    price: 7490,
    originalPrice: 8900,
    badge: "CALIDAD PRO",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
    description: "Papel fotográfico mate de alto gramaje para interiores de agendas de lujo, catálogos y recuerdos fotográficos.",
    specs: ["Formato: A4", "Gramaje: 220 gr", "Impresión: Ambas caras", "Pack: 50 hojas"]
  },
  {
    id: "prod-7",
    name: "Guillotina & Cizalla 2 en 1 Para Papel A4/A3",
    category: "encuadernacion",
    price: 18990,
    originalPrice: 22000,
    badge: "HERRAMIENTA",
    stock: "Últimas unidades",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__generate-an-image-of-a-professional-bookbinding-se__15632-r92hhkn8rbwn250600i4jdnvcg33ailcg20h87qyj4.jpeg",
    description: "Base metálica con regla milimétrica y cuchilla autoafilable de acero templado. Corta hasta 10 hojas simultáneamente sin desgarro.",
    specs: ["Corte máximo: Longitud A4/A3", "Regla guía con grados", "Protector de seguridad acrílico", "Uso intensivo"]
  },
  {
    id: "prod-8",
    name: "Estampadora Plana Compacta 23x30 cm Para Sublimación",
    category: "sublimacion",
    price: 119990,
    originalPrice: 139990,
    badge: "EQUIPAMIENTO",
    stock: "Bajo pedido / Local",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__create-a-realistic-image-of-a-section-of-a-store-d__15633-r92hihjlej5ochodnwq2gnd04xkxrx7y8kuh0we6hc.jpeg",
    description: "Prensa térmica plana compacta ideal para empezar tu emprendimiento de parches, poleras, mouse pads, llaveros y bolsas tote.",
    specs: ["Área de calor: 23 x 30 cm", "Control digital tiempo y temp.", "Placa de aluminio teflonada", "Garantía y soporte en local"]
  },
  {
    id: "prod-9",
    name: "50 Porta Foto Con Imán Acrílico (Club Emprendedor)",
    category: "bazar",
    price: 11000,
    originalPrice: 15000,
    badge: "MAYORISTA",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
    description: "Marcos acrílicos transparentes con banda magnética trasera para fotos de 5x7 cm o recuerdos de bautizos y cumpleaños.",
    specs: ["Cantidad: 50 unidades", "Medida exterior: 5.5 x 8 cm", "Fácil ensamblaje a presión", "Imán de sujeción firme"]
  },
  {
    id: "prod-10",
    name: "Vinilo Adhesivo Holográfico Imprimible Inkjet A4 (10 un)",
    category: "papeleria",
    price: 6500,
    originalPrice: null,
    badge: "TENDENCIA",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80",
    description: "Vinilo autoadhesivo de polímero con destellos arcoíris holográficos. Compatible con cualquier impresora de inyección de tinta casera.",
    specs: ["Efecto: Arcoíris tornasol", "Formato: A4", "100% resistente al roce", "Pack: 10 hojas"]
  },
  {
    id: "prod-11",
    name: "Laminado Térmico BOPP Soft Touch / Holográfico (Rollo)",
    category: "encuadernacion",
    price: 9900,
    originalPrice: 12500,
    badge: "TERMINACIÓN",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
    description: "Film de polipropileno para termolaminado de portadas de agendas y libretas con sensación aterciopelada y protección contra manchas.",
    specs: ["Ancho: 32 cm", "Largo: 50 metros", "Sensación terciopelo de lujo", "Protección impermeable"]
  },
  {
    id: "prod-12",
    name: "Vaso Plástico Reutilizable Tipo Cafetero 500ml (7 un)",
    category: "bazar",
    price: 3990,
    originalPrice: 5000,
    badge: "OFERTA",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    description: "Vasos de polipropileno extra rígido libre de BPA con tapa a presión antiderrame. Listos para personalizar con vinilo o stickers.",
    specs: ["Capacidad: 500 ml", "Pack: 7 unidades colores surtidos", "Material libre de BPA", "Reutilizable ecológico"]
  },
  {
    id: "prod-13",
    name: "Planner Semanal de Escritorio & To-Do List Pekebook",
    category: "bazar",
    price: 4290,
    originalPrice: null,
    badge: "DISEÑO PROPIO",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&auto=format&fit=crop&q=80",
    description: "Planificador de escritorio perpetuo para organizar tareas semanales, metas y notas con diseño limpio y papel bond de 106 gr que no traspasa la tinta.",
    specs: ["Medida: 24 x 17 cm", "Páginas: 52 semanas (1 año)", "Encuadernación encolada desprendible", "Papel bond grueso"]
  },
  {
    id: "prod-14",
    name: "Papel Kraft Autoadhesivo A4 (Pack 20 hojas)",
    category: "papeleria",
    price: 3990,
    originalPrice: null,
    badge: "ECO",
    stock: "En stock local",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    description: "Etiquetas autoadhesivas marrón kraft con textura rústica para marcas artesanales, botellas, sobres y repostería casera.",
    specs: ["Tono: Marrón natural cálido", "Formato: A4", "Adhesivo permanente", "Pack: 20 unidades"]
  },
  {
    id: "prod-15",
    name: "Servicio de Anillado & Encuadernación Express en Local",
    category: "servicios",
    price: 3500,
    originalPrice: null,
    badge: "SERVICIO IN-SITU",
    stock: "Realizado en el día",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/women-cutting-paper-in-printing-shop-DGH9QFZ-r92fgr3dae7xlos481bmv97akt0dyohyrmj9rhpykw.jpg",
    description: "Trae tus documentos o tesis y te los encuadernamos en pocos minutos con mica protectora transparente/ahumada y espiral a elección.",
    specs: ["Tiempo: 15 a 30 minutos", "Incluye micas y espiral", "Hasta 400 hojas", "Sucursal Mañihual 285"]
  },
  {
    id: "prod-16",
    name: "Impresión de Planos & Pósters Alta Resolución",
    category: "servicios",
    price: 2500,
    originalPrice: null,
    badge: "SERVICIO",
    stock: "Atención inmediata",
    image: "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__create-a-professional-realistic-image-of-a-digital__15631-r92hgpmkhsq6f098153fr3hnqqbz8i67bshge30y8g.jpeg",
    description: "Impresión de planos de arquitectura, láminas escolares, mapas o afiches gráficos en papel bond de 90g o fotográfico.",
    specs: ["Formatos: A3, A2, A1", "Tintas resistentes a la luz", "Envío de archivos vía WhatsApp", "Retiro sin filas"]
  }
];

export const FAQS = [
  {
    question: "¿Realizan servicios de impresión en PEKEBOOK?",
    answer: "¡Sí! Ofrecemos servicios de impresión digital para documentos, pósters, tarjetas, fotografías y mucho más, con la mejor calidad y a precios competitivos tanto para particulares como empresas en Puerto Montt."
  },
  {
    question: "¿PEKEBOOK ofrece servicios de encuadernación?",
    answer: "Sí, ofrecemos encuadernación profesional para libros, proyectos, tesis universitarias y agendas, asegurando acabados duraderos con tapas duras personalizadas, termolaminados o anillados metálicos."
  },
  {
    question: "¿Qué es la sublimación y qué productos ofrecen para ello?",
    answer: "La sublimación es una técnica que permite transferir diseños a todo color a productos como tazas, botellas, camisetas y llaveros. En PEKEBOOK vendemos tanto los productos sublimables terminados como los insumos y equipos (papel, tintas, estampadoras) para que montes tu propio negocio."
  },
  {
    question: "¿Puedo recibir asesoramiento sobre productos antes de comprar?",
    answer: "¡Por supuesto! Nuestro equipo está siempre disponible para orientarte de forma personalizada sobre gramajes de papel, técnicas de encuadernación y parámetros de sublimación. Puedes consultarnos en tienda o por WhatsApp."
  },
  {
    question: "¿Cómo puedo hacer un pedido o encargar un trabajo?",
    answer: "Puedes armar tu carrito directamente en esta web y presionar 'Enviar Pedido por WhatsApp'. Te responderemos al instante con la confirmación de stock, formas de pago (Transferencia / Redcompra) y horario de retiro o despacho."
  },
  {
    question: "¿Hacen envíos dentro de Puerto Montt o a regiones?",
    answer: "Sí, despachamos en Puerto Montt y Puerto Varas vía delivery local coordinado, y enviamos a todo Chile mediante Starken, Chilexpress o Correos de Chile con cargo al destinatario."
  }
];
