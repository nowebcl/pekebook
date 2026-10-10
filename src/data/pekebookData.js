export const STORE_BRANCHES = [
  {
    id: "peke-1",
    name: "Peke 1",
    title: "Sucursal Peke 1 (Central)",
    address: "Avenida Gabriela Mistral 957, Local N° 7",
    shortAddress: "Av. Gabriela Mistral 957, Local 7",
    city: "Puerto Montt, Chile",
    hours: "Lunes a Viernes: 09:30 - 19:30 | Sábados: 10:00 - 16:00",
    phone: "+56 9 6748 6503",
    mapsUrl: "https://maps.google.com/maps?q=Avenida%20Gabriela%20Mistral%20957%2C%20Puerto%20Montt%2C%20Chile.",
    embedUrl: "https://maps.google.com/maps?q=Avenida%20Gabriela%20Mistral%20957%2C%20Puerto%20Montt%2C%20Chile.&t=m&z=17&output=embed&iwloc=near",
    badge: "Sucursal 1",
    tagline: "Librería, bazar y taller"
  },
  {
    id: "peke-2",
    name: "Peke 2",
    title: "Sucursal Peke 2",
    address: "Avenida Violeta Parra, Local N° 1",
    shortAddress: "Av. Violeta Parra, Local 1",
    city: "Puerto Montt, Chile",
    hours: "Lunes a Viernes: 09:30 - 19:30 | Sábados: 10:00 - 16:00",
    phone: "+56 9 6748 6503",
    mapsUrl: "https://maps.google.com/maps?q=Avenida%20Violeta%20Parra%2C%20Puerto%20Montt%2C%20Chile.",
    embedUrl: "https://maps.google.com/maps?q=Avenida%20Violeta%20Parra%2C%20Puerto%20Montt%2C%20Chile.&t=m&z=17&output=embed&iwloc=near",
    badge: "Sucursal 2",
    tagline: "Librería y bazar"
  }
];

export const STORE_INFO = {
  name: "PEKEBOOK",
  subtitle: "Librería & Bazar en Puerto Montt",
  tagline: "Todo lo que necesitas para tu creatividad, negocio y estudio en un solo lugar.",
  phone: "+56 9 6748 6503",
  whatsappNumber: "56967486503",
  email: "contacto@pekebook.cl",
  address: "Peke 1: Av. Gabriela Mistral 957 Local 7 | Peke 2: Av. Violeta Parra Local 1, Puerto Montt",
  mainAddress: "Av. Gabriela Mistral 957, Local N° 7, Puerto Montt",
  secondAddress: "Av. Violeta Parra, Local N° 1, Puerto Montt",
  hours: "Lunes a Viernes: 09:30 - 19:30 | Sábados: 10:00 - 16:00",
  mapsUrl: "https://maps.google.com/maps?q=Avenida%20Gabriela%20Mistral%20957%2C%20Puerto%20Montt%2C%20Chile.",
  logoUrl: "/banners/exact_logo.png",
  iconUrl: "https://pekebook.cl/wp-content/uploads/2025/07/cropped-Recurso-3.webp",
  nowebLogo: "https://pekebook.cl/wp-content/uploads/2025/07/Recurso-18-scaled.webp",
  branches: STORE_BRANCHES,
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
  {
    "id": "todos",
    "name": "Todo el catálogo",
    "icon": "Sparkles",
    "count": 164
  },
  {
    "id": "arte",
    "name": "Arte & Pintura",
    "icon": "Palette",
    "count": 53
  },
  {
    "id": "oficina",
    "name": "Oficina & Archivo",
    "icon": "FolderArchive",
    "count": 71
  },
  {
    "id": "papeleria",
    "name": "Papelería & Papeles",
    "icon": "FileText",
    "count": 12
  },
  {
    "id": "libros",
    "name": "Libros & Formularios",
    "icon": "BookOpen",
    "count": 8
  },
  {
    "id": "encuadernacion",
    "name": "Encuadernación",
    "icon": "Layers",
    "count": 5
  },
  {
    "id": "sublimacion",
    "name": "Sublimación & DTF",
    "icon": "Printer",
    "count": 3
  },
  {
    "id": "bazar",
    "name": "Bazar & Novedades",
    "icon": "Gift",
    "count": 10
  },
  {
    "id": "servicios",
    "name": "Servicios de Taller",
    "icon": "Wrench",
    "count": 2
  }
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
    "id": "prod-1",
    "name": "Papel Adhesivo Fotográfico A4 Brillante (Pack 20 hojas)",
    "category": "papeleria",
    "brand": "Pekebook",
    "price": 4990,
    "originalPrice": 6200,
    "badge": "MÁS VENDIDO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Papel autoadhesivo fotográfico de alta adherencia y secado instantáneo. Ideal para etiquetas escolares, packaging y stickers de alta definición.",
    "specs": [
      "Formato: A4 (21 x 29.7 cm)",
      "Gramaje: 135 gr/m²",
      "Acabado: Glossy impermeable",
      "Pack: 20 unidades"
    ]
  },
  {
    "id": "prod-2",
    "name": "Tazón Cerámica Blanco 11oz Calidad Premium AAA",
    "category": "sublimacion",
    "brand": "Pekebook",
    "price": 1990,
    "originalPrice": 2600,
    "badge": "OFERTA",
    "stock": "En stock local",
    "image": "/products/mug.jpg",
    "description": "Taza de cerámica tratada con polímero especial para sublimación de máxima nitidez y resistencia a microondas y lavavajillas.",
    "specs": [
      "Capacidad: 325 ml (11oz)",
      "Color: Blanco brillante parejo",
      "Calidad: AAA importado",
      "Listo para prensar"
    ]
  },
  {
    "id": "prod-2b",
    "name": "Libreta Artesanal Tapa Dura Pastel Lilac Wire-O A5",
    "category": "encuadernacion",
    "brand": "Pekebook",
    "price": 6990,
    "originalPrice": 8500,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/products/notebook.jpg",
    "description": "Libreta de encuadernación artesanal con tapas duras forradas en lino lavanda, anillado Wire-O cobre y 100 hojas de papel bond suave punteado.",
    "specs": [
      "Tamaño: A5 (15 x 21 cm)",
      "Hojas: 100 hojas punteadas",
      "Acabado: Lino textil lavanda",
      "Hecho en taller Pekebook"
    ]
  },
  {
    "id": "prod-3",
    "name": "Cartón Piedra A4 1.5mm Para Encuadernación (Pack 10 un)",
    "category": "encuadernacion",
    "brand": "Pekebook",
    "price": 4500,
    "originalPrice": null,
    "badge": "TALLER",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Cartón contracolado de alta densidad, corte parejo y sin curvaturas. La base perfecta para tapas duras de agendas, libretas y álbumes.",
    "specs": [
      "Espesor: 1.5 mm",
      "Medida: 21.5 x 30.5 cm (A4 extendido)",
      "Cantidad: 10 unidades",
      "Resistencia superior"
    ]
  },
  {
    "id": "prod-4",
    "name": "Anillos Doble Cero Metálicos Paso 2:1 (Pack 10 unidades)",
    "category": "encuadernacion",
    "brand": "Pekebook",
    "price": 3890,
    "originalPrice": 4500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Espirales metálicos Wire-O paso 2:1 para acabado premium en cuadernos, agendas y calendarios de escritorio.",
    "specs": [
      "Paso: 2:1 (2 orificios por pulgada)",
      "Diámetro: 5/8 pulgada (150 hojas)",
      "Color: Blanco o Negro clásico",
      "Pack: 10 unidades"
    ]
  },
  {
    "id": "prod-5",
    "name": "Lámina DTF UV Por Metro Para Superficies Rígidas",
    "category": "sublimacion",
    "brand": "Pekebook",
    "price": 10990,
    "originalPrice": 15990,
    "badge": "OFERTA",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Stickers DTF UV con barniz de relieve listos para transferir sin calor en tazas, botellas plásticas, madera o vidrio. Alta durabilidad al tacto.",
    "specs": [
      "Medida: 30 x 100 cm",
      "Acabado: Relieve brillante UV",
      "Aplicación: Frío (sin plancha)",
      "Resistente al agua"
    ]
  },
  {
    "id": "prod-6",
    "name": "Papel Fotográfico Matte Doble Cara A4 220g (50 hojas)",
    "category": "papeleria",
    "brand": "Pekebook",
    "price": 7490,
    "originalPrice": 8900,
    "badge": "CALIDAD PRO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Papel fotográfico mate de alto gramaje para interiores de agendas de lujo, catálogos y recuerdos fotográficos.",
    "specs": [
      "Formato: A4",
      "Gramaje: 220 gr",
      "Impresión: Ambas caras",
      "Pack: 50 hojas"
    ]
  },
  {
    "id": "prod-7",
    "name": "Guillotina & Cizalla 2 en 1 Para Papel A4/A3",
    "category": "encuadernacion",
    "brand": "Pekebook",
    "price": 18990,
    "originalPrice": 22000,
    "badge": "HERRAMIENTA",
    "stock": "Últimas unidades",
    "image": "/placeholder-product.svg",
    "description": "Base metálica con regla milimétrica y cuchilla autoafilable de acero templado. Corta hasta 10 hojas simultáneamente sin desgarro.",
    "specs": [
      "Corte máximo: Longitud A4/A3",
      "Regla guía con grados",
      "Protector de seguridad acrílico",
      "Uso intensivo"
    ]
  },
  {
    "id": "prod-8",
    "name": "Estampadora Plana Compacta 23x30 cm Para Sublimación",
    "category": "sublimacion",
    "brand": "Pekebook",
    "price": 119990,
    "originalPrice": 139990,
    "badge": "EQUIPAMIENTO",
    "stock": "Bajo pedido / Local",
    "image": "/placeholder-product.svg",
    "description": "Prensa térmica plana compacta ideal para empezar tu emprendimiento de parches, poleras, mouse pads, llaveros y bolsas tote.",
    "specs": [
      "Área de calor: 23 x 30 cm",
      "Control digital tiempo y temp.",
      "Placa de aluminio teflonada",
      "Garantía y soporte en local"
    ]
  },
  {
    "id": "prod-9",
    "name": "50 Porta Foto Con Imán Acrílico (Club Emprendedor)",
    "category": "bazar",
    "brand": "Pekebook",
    "price": 11000,
    "originalPrice": 15000,
    "badge": "MAYORISTA",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Marcos acrílicos transparentes con banda magnética trasera para fotos de 5x7 cm o recuerdos de bautizos y cumpleaños.",
    "specs": [
      "Cantidad: 50 unidades",
      "Medida exterior: 5.5 x 8 cm",
      "Fácil ensamblaje a presión",
      "Imán de sujeción firme"
    ]
  },
  {
    "id": "prod-10",
    "name": "Vinilo Adhesivo Holográfico Imprimible Inkjet A4 (10 un)",
    "category": "papeleria",
    "brand": "Pekebook",
    "price": 6500,
    "originalPrice": null,
    "badge": "TENDENCIA",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Vinilo autoadhesivo de polímero con destellos arcoíris holográficos. Compatible con cualquier impresora de inyección de tinta casera.",
    "specs": [
      "Efecto: Arcoíris tornasol",
      "Formato: A4",
      "100% resistente al roce",
      "Pack: 10 hojas"
    ]
  },
  {
    "id": "prod-11",
    "name": "Laminado Térmico BOPP Soft Touch / Holográfico (Rollo)",
    "category": "encuadernacion",
    "brand": "Pekebook",
    "price": 9900,
    "originalPrice": 12500,
    "badge": "TERMINACIÓN",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Film de polipropileno para termolaminado de portadas de agendas y libretas con sensación aterciopelada y protección contra manchas.",
    "specs": [
      "Ancho: 32 cm",
      "Largo: 50 metros",
      "Sensación terciopelo de lujo",
      "Protección impermeable"
    ]
  },
  {
    "id": "prod-12",
    "name": "Vaso Plástico Reutilizable Tipo Cafetero 500ml (7 un)",
    "category": "bazar",
    "brand": "Pekebook",
    "price": 3990,
    "originalPrice": 5000,
    "badge": "OFERTA",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Vasos de polipropileno extra rígido libre de BPA con tapa a presión antiderrame. Listos para personalizar con vinilo o stickers.",
    "specs": [
      "Capacidad: 500 ml",
      "Pack: 7 unidades colores surtidos",
      "Material libre de BPA",
      "Reutilizable ecológico"
    ]
  },
  {
    "id": "prod-13",
    "name": "Planner Semanal de Escritorio & To-Do List Pekebook",
    "category": "bazar",
    "brand": "Pekebook",
    "price": 4290,
    "originalPrice": null,
    "badge": "DISEÑO PROPIO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Planificador de escritorio perpetuo para organizar tareas semanales, metas y notas con diseño limpio y papel bond de 106 gr que no traspasa la tinta.",
    "specs": [
      "Medida: 24 x 17 cm",
      "Páginas: 52 semanas (1 año)",
      "Encuadernación encolada desprendible",
      "Papel bond grueso"
    ]
  },
  {
    "id": "prod-14",
    "name": "Papel Kraft Autoadhesivo A4 (Pack 20 hojas)",
    "category": "papeleria",
    "brand": "Pekebook",
    "price": 3990,
    "originalPrice": null,
    "badge": "ECO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Etiquetas autoadhesivas marrón kraft con textura rústica para marcas artesanales, botellas, sobres y repostería casera.",
    "specs": [
      "Tono: Marrón natural cálido",
      "Formato: A4",
      "Adhesivo permanente",
      "Pack: 20 unidades"
    ]
  },
  {
    "id": "prod-15",
    "name": "Servicio de Anillado & Encuadernación Express en Local",
    "category": "servicios",
    "brand": "Pekebook",
    "price": 3500,
    "originalPrice": null,
    "badge": "SERVICIO IN-SITU",
    "stock": "Realizado en el día",
    "image": "https://pekebook.cl/wp-content/uploads/elementor/thumbs/women-cutting-paper-in-printing-shop-DGH9QFZ-r92fgr3dae7xlos481bmv97akt0dyohyrmj9rhpykw.jpg",
    "description": "Trae tus documentos o tesis y te los encuadernamos en pocos minutos con mica protectora transparente/ahumada y espiral a elección.",
    "specs": [
      "Tiempo: 15 a 30 minutos",
      "Incluye micas y espiral",
      "Hasta 400 hojas",
      "Sucursales Peke 1 y Peke 2"
    ]
  },
  {
    "id": "prod-16",
    "name": "Impresión de Planos & Pósters Alta Resolución",
    "category": "servicios",
    "brand": "Pekebook",
    "price": 2500,
    "originalPrice": null,
    "badge": "SERVICIO",
    "stock": "Atención inmediata",
    "image": "https://pekebook.cl/wp-content/uploads/elementor/thumbs/freepik__create-a-professional-realistic-image-of-a-digital__15631-r92hgpmkhsq6f098153fr3hnqqbz8i67bshge30y8g.jpeg",
    "description": "Impresión de planos de arquitectura, láminas escolares, mapas o afiches gráficos en papel bond de 90g o fotográfico.",
    "specs": [
      "Formatos: A3, A2, A1",
      "Tintas resistentes a la luz",
      "Envío de archivos vía WhatsApp",
      "Retiro sin filas"
    ]
  },
  {
    "id": "prod-py-1",
    "name": "Témpera Metálica 15ml 6 Colores Art And Craft",
    "brand": "Art & Craft",
    "sku": "447436",
    "barcode": "3100004474368",
    "category": "arte",
    "price": 2980,
    "originalPrice": 3700,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-2",
    "name": "Témpera Glitter 15ml 6 Colores Art And Craft",
    "brand": "Art & Craft",
    "sku": "447437",
    "barcode": "3100004474375",
    "category": "arte",
    "price": 2990,
    "originalPrice": 3700,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-3",
    "name": "Témpera 250 ML Rojo Art And Craft",
    "brand": "Art & Craft",
    "sku": "463245",
    "barcode": "3100004632454",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-4",
    "name": "Témpera 250 ML Azul Art And Craft",
    "brand": "Art & Craft",
    "sku": "463248",
    "barcode": "3100004632485",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-5",
    "name": "Témpera 250 ML Amarillo Art And Craft",
    "brand": "Art & Craft",
    "sku": "463254",
    "barcode": "3100004632546",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-6",
    "name": "Témpera 250 ML Verde Art And Craft",
    "brand": "Art & Craft",
    "sku": "463255",
    "barcode": "3100004632553",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-7",
    "name": "Témpera 250 ML Naranjo Art And Craft",
    "brand": "Art & Craft",
    "sku": "463257",
    "barcode": "3100004632577",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-8",
    "name": "Témpera 250 ML Negro Art And Craft",
    "brand": "Art & Craft",
    "sku": "463262",
    "barcode": "3100004632621",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-9",
    "name": "Témpera 250 ML Blanco Art And Craft",
    "brand": "Art & Craft",
    "sku": "463263",
    "barcode": "3100004632638",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-10",
    "name": "Témpera 250 ML Cafée Art And Craft",
    "brand": "Art & Craft",
    "sku": "463265",
    "barcode": "3100004632652",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-11",
    "name": "Témpera 250 ML Rosado Art And Craft",
    "brand": "Art & Craft",
    "sku": "463266",
    "barcode": "3100004632669",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-12",
    "name": "Témpera Solida 10 GRS 6 Colores Art And Craft",
    "brand": "Art & Craft",
    "sku": "519132",
    "barcode": "3100297046280",
    "category": "arte",
    "price": 3290,
    "originalPrice": 4100,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-13",
    "name": "Témpera Sólida 10g 12 Colores Art & Craft",
    "brand": "Art & Craft",
    "sku": "519133",
    "barcode": "3100298076255",
    "category": "arte",
    "price": 5890,
    "originalPrice": 7400,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-14",
    "name": "Témpera Solida Metálica 10 GRS 6 Colores Art And Craft",
    "brand": "Art & Craft",
    "sku": "519134",
    "barcode": "3100249126985",
    "category": "arte",
    "price": 3490,
    "originalPrice": 4400,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-15",
    "name": "Témpera 250 ML Celeste Art And Craft",
    "brand": "Art & Craft",
    "sku": "561345",
    "barcode": "3100278054037",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-16",
    "name": "Témpera 250 ML Verde Claro Art And Craft",
    "brand": "Art & Craft",
    "sku": "561346",
    "barcode": "3100281689530",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-17",
    "name": "Témpera 250 ML Morada Art And Craft",
    "brand": "Art & Craft",
    "sku": "561347",
    "barcode": "3100213421269",
    "category": "arte",
    "price": 2590,
    "originalPrice": 3200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-18",
    "name": "Témpera 250 ML Plateado Art And Craft",
    "brand": "Art & Craft",
    "sku": "561348",
    "barcode": "3100204033518",
    "category": "arte",
    "price": 2790,
    "originalPrice": 3500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-19",
    "name": "Témpera 250 ML Dorado Art And Craft",
    "brand": "Art & Craft",
    "sku": "366815",
    "barcode": "3100269768219",
    "category": "arte",
    "price": 2790,
    "originalPrice": 3500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-20",
    "name": "Plasticina Triangular 12 Colores Fultons",
    "brand": "Fultons",
    "sku": "401956",
    "barcode": "3100004019569",
    "category": "arte",
    "price": 1650,
    "originalPrice": 2100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Fultons",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-21",
    "name": "Plasticina Triangular 12 Col Neon Lavoro",
    "brand": "Lavoro",
    "sku": "506865",
    "barcode": "3100245403271",
    "category": "arte",
    "price": 2490,
    "originalPrice": 3100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Lavoro",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-22",
    "name": "Plasticina Triangular 12 Col Pastel Lavoro",
    "brand": "Lavoro",
    "sku": "506866",
    "barcode": "3100227339840",
    "category": "arte",
    "price": 2490,
    "originalPrice": 3100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Lavoro",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-23",
    "name": "Témpera Torre 250 ML Verde Torre",
    "brand": "Torre",
    "sku": "30618",
    "barcode": "7806505013001",
    "category": "arte",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-24",
    "name": "Témpera Torre 250 ML Roja Torre",
    "brand": "Torre",
    "sku": "30617",
    "barcode": "7806505012998",
    "category": "arte",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-25",
    "name": "Témpera Torre 250 ML Amarilla Torre",
    "brand": "Torre",
    "sku": "30615",
    "barcode": "7806505012974",
    "category": "arte",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-26",
    "name": "Témpera Torre 250 ML Azul Torre",
    "brand": "Torre",
    "sku": "30616",
    "barcode": "7806505012981",
    "category": "arte",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-27",
    "name": "Témpera Torre 250 ML Dorada Torre",
    "brand": "Torre",
    "sku": "30619",
    "barcode": "7806505013018",
    "category": "arte",
    "price": 3250,
    "originalPrice": 4100,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-28",
    "name": "Témpera Torre 250 ML Plateada Torre",
    "brand": "Torre",
    "sku": "30620",
    "barcode": "7806505013025",
    "category": "arte",
    "price": 3250,
    "originalPrice": 4100,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Torre",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-29",
    "name": "Témpera Proarte 120 ML Violeta Proarte",
    "brand": "Proarte",
    "sku": "13087",
    "barcode": "7807265981708",
    "category": "arte",
    "price": 2150,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Proarte",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-30",
    "name": "Témpera Proarte 120 ML Amarilla Proarte",
    "brand": "Proarte",
    "sku": "13082",
    "barcode": "7807265981715",
    "category": "arte",
    "price": 2151,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Proarte",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-31",
    "name": "Témpera Proarte 120 ML Carmin Proarte",
    "brand": "Proarte",
    "sku": "13078",
    "barcode": "7807265981647",
    "category": "arte",
    "price": 2152,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Proarte",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-32",
    "name": "Témpera Proarte 120 ML Amarillo Oro Proarte",
    "brand": "Proarte",
    "sku": "13081",
    "barcode": "7807265981609",
    "category": "arte",
    "price": 2153,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Proarte",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-33",
    "name": "Témpera Proarte 120 ML Naranjo Proarte",
    "brand": "Proarte",
    "sku": "13084",
    "barcode": "7807265981654",
    "category": "arte",
    "price": 2154,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Témpera escolar de colores vivos, secado uniforme y gran poder cubriente. No tóxica y lavable sobre la mayoría de las telas.",
    "specs": [
      "Marca: Proarte",
      "Fórmula: Lavable y no tóxica",
      "Acabado: Colores intensos",
      "Superficie: Papel, cartón, madera y greda"
    ]
  },
  {
    "id": "prod-py-34",
    "name": "Plasticina Rhein 12 Colores Rhein",
    "brand": "Rhein",
    "sku": "553302",
    "barcode": "7804685581204",
    "category": "arte",
    "price": 1890,
    "originalPrice": 2400,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Rhein",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-35",
    "name": "Plasticina Lavoro 12 Colores Pasteles Lavoro",
    "brand": "Lavoro",
    "sku": "506866",
    "barcode": "3100227339840",
    "category": "arte",
    "price": 2490,
    "originalPrice": 3100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Lavoro",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-36",
    "name": "Plasticina 12 Colores Fluor Lavoro",
    "brand": "Lavoro",
    "sku": "506865",
    "barcode": "3100245403271",
    "category": "arte",
    "price": 2490,
    "originalPrice": 3100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Lavoro",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-37",
    "name": "Plasticina 12 Colores Fultons Triangular Fultons",
    "brand": "Fultons",
    "sku": "401956",
    "barcode": "3100004019569",
    "category": "arte",
    "price": 1650,
    "originalPrice": 2100,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Fultons",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-38",
    "name": "Plasticina Faber Castell 12 Colores Faber Castell",
    "brand": "Faber-Castell",
    "sku": "605507",
    "barcode": "7703336605507",
    "category": "arte",
    "price": 3890,
    "originalPrice": 4900,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Plasticina de consistencia suave y fácil de moldear. No mancha las manos, no se reseca y es ideal para actividades escolares y recreativas.",
    "specs": [
      "Marca: Faber-Castell",
      "Presentación: Barras de alta plasticidad",
      "Seguridad: No tóxica",
      "Uso: Escolar y artístico"
    ]
  },
  {
    "id": "prod-py-39",
    "name": "Lápiz Cera Maxi Jumbo 12 Colores Giotto",
    "brand": "Giotto",
    "sku": "202202",
    "barcode": "7501014631059",
    "category": "arte",
    "price": 4150,
    "originalPrice": 5200,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Giotto",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-40",
    "name": "Lápiz Cera Jumbo Filgo 12 Colores Filgo",
    "brand": "Filgo",
    "sku": "75159",
    "barcode": "7795513075159",
    "category": "arte",
    "price": 1590,
    "originalPrice": 2000,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Filgo",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-41",
    "name": "Crayones Maxi 12 Colores Artel Artel",
    "brand": "Artel",
    "sku": "20100030",
    "barcode": "7807210100307",
    "category": "arte",
    "price": 4350,
    "originalPrice": 5400,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Artel",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-42",
    "name": "Lápices de Cera Jumbo Fultons 12 Colores Fultons",
    "brand": "Fultons",
    "sku": "105069",
    "barcode": "4100014467007",
    "category": "arte",
    "price": 1550,
    "originalPrice": 1900,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Fultons",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-43",
    "name": "Lápices de Cera Triangular Jumbo Torre",
    "brand": "Torre",
    "sku": "17931",
    "barcode": "7806505978935",
    "category": "arte",
    "price": 2690,
    "originalPrice": 3400,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Torre",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-44",
    "name": "Tiza Color 100 Barras Art And Craft",
    "brand": "Art & Craft",
    "sku": "103285",
    "barcode": "4100018553003",
    "category": "arte",
    "price": 2350,
    "originalPrice": 2900,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tizas cilíndricas compactas con tecnología anti-polvo para una escritura nítida en pizarras tradicionales y tableros.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Bajo residuo de polvo",
      "Uso: Pizarras y tableros",
      "Textura: Suave al escribir"
    ]
  },
  {
    "id": "prod-py-45",
    "name": "Tiza Blanca 100 Barras Art And Craft",
    "brand": "Art & Craft",
    "sku": "103284",
    "barcode": "4100018552006",
    "category": "arte",
    "price": 2190,
    "originalPrice": 2700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tizas cilíndricas compactas con tecnología anti-polvo para una escritura nítida en pizarras tradicionales y tableros.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Bajo residuo de polvo",
      "Uso: Pizarras y tableros",
      "Textura: Suave al escribir"
    ]
  },
  {
    "id": "prod-py-46",
    "name": "Tiza Color Fluor Jumbo 6 Unidades Art And Craft",
    "brand": "Art & Craft",
    "sku": "447087",
    "barcode": "3100004470872",
    "category": "arte",
    "price": 1990,
    "originalPrice": 2500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tizas cilíndricas compactas con tecnología anti-polvo para una escritura nítida en pizarras tradicionales y tableros.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Bajo residuo de polvo",
      "Uso: Pizarras y tableros",
      "Textura: Suave al escribir"
    ]
  },
  {
    "id": "prod-py-47",
    "name": "Lápices Pastel Graso",
    "brand": "Art & Craft",
    "sku": "205639",
    "barcode": "4100014465003",
    "category": "arte",
    "price": 1490,
    "originalPrice": null,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Art & Craft",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-48",
    "name": "Lupa Plástica Fultons 80mm Fultons",
    "brand": "Fultons",
    "sku": "107197",
    "barcode": "4100018743008",
    "category": "bazar",
    "price": 2490,
    "originalPrice": 3100,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Fultons. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-49",
    "name": "Lápices Pastel Graso Art & Craft",
    "brand": "Fultons",
    "sku": "102345",
    "barcode": "4100018741004",
    "category": "arte",
    "price": 1890,
    "originalPrice": 2400,
    "badge": "ESCOLAR",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Lápices de cera y crayones de trazo suave y colores brillantes. Diseñados ergonómicamente para un agarre cómodo y firme.",
    "specs": [
      "Marca: Fultons",
      "Cuerpo: Extra resistente",
      "Seguridad: No tóxico certificado",
      "Superficie: Papel y cartulinas"
    ]
  },
  {
    "id": "prod-py-50",
    "name": "Lupa Plástica Fultons 80mm",
    "brand": "Fultons",
    "sku": "107175",
    "barcode": "4100017588006",
    "category": "bazar",
    "price": 1290,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Fultons. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-51",
    "name": "Lupa Plástica Fultons 60mm",
    "brand": "Fultons",
    "sku": "107176",
    "barcode": "4100017587009",
    "category": "bazar",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Fultons. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-52",
    "name": "Palos de Helado 50 Unidades Fultons",
    "brand": "Fultons",
    "sku": "102665",
    "barcode": "4100017510007",
    "category": "papeleria",
    "price": 590,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-53",
    "name": "Palos de Helado 50 Unidades Colores Surtidos Fultons",
    "brand": "Fultons",
    "sku": "108199",
    "barcode": "4100017542008",
    "category": "papeleria",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-54",
    "name": "Pizarra Magnética 35x28 CM Art And Craft",
    "brand": "Art & Craft",
    "sku": "401259",
    "barcode": "3100004012591",
    "category": "bazar",
    "price": 5350,
    "originalPrice": 6700,
    "badge": "MÁS VENDIDO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Art & Craft. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Art & Craft",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-55",
    "name": "Pizarra Magnética 28x21 CM Art And Craft",
    "brand": "Art & Craft",
    "sku": null,
    "barcode": "3100004012584",
    "category": "bazar",
    "price": 3990,
    "originalPrice": 5000,
    "badge": "MÁS VENDIDO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Art & Craft. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Art & Craft",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-56",
    "name": "Pizarra Magnética 43x58 cm Art & Craft",
    "brand": "Art & Craft",
    "sku": null,
    "barcode": "3100004012607",
    "category": "bazar",
    "price": 8490,
    "originalPrice": 10600,
    "badge": "MÁS VENDIDO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Art & Craft. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Art & Craft",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-57",
    "name": "Papel Lustre 10x10 Art And Craft",
    "brand": "Art & Craft",
    "sku": "103762",
    "barcode": "4100012405001",
    "category": "arte",
    "price": 350,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Papeles de corte exacto y colores intensos para técnicas de plegado origami, maquetas y actividades de expresión artística.",
    "specs": [
      "Marca: Art & Craft",
      "Formato: Cuadrado preciso",
      "Colores: Surtidos vibrantes",
      "Uso: Origami y manualidades"
    ]
  },
  {
    "id": "prod-py-58",
    "name": "Papel Lustre 16x16 Art And Craft",
    "brand": "Art & Craft",
    "sku": "447473",
    "barcode": "3100004474733",
    "category": "arte",
    "price": 1190,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Papeles de corte exacto y colores intensos para técnicas de plegado origami, maquetas y actividades de expresión artística.",
    "specs": [
      "Marca: Art & Craft",
      "Formato: Cuadrado preciso",
      "Colores: Surtidos vibrantes",
      "Uso: Origami y manualidades"
    ]
  },
  {
    "id": "prod-py-59",
    "name": "Block Papel Origami 16x16 CM Art And Craft",
    "brand": "Art & Craft",
    "sku": "492771",
    "barcode": "3100293365484",
    "category": "arte",
    "price": 1090,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Papeles de corte exacto y colores intensos para técnicas de plegado origami, maquetas y actividades de expresión artística.",
    "specs": [
      "Marca: Art & Craft",
      "Formato: Cuadrado preciso",
      "Colores: Surtidos vibrantes",
      "Uso: Origami y manualidades"
    ]
  },
  {
    "id": "prod-py-60",
    "name": "Block Papel Diseño Scrapbook 15x15 cm Lavoro",
    "brand": "Lavoro",
    "sku": "492770",
    "barcode": "3100246937607",
    "category": "papeleria",
    "price": 1550,
    "originalPrice": 1900,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Lavoro ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Lavoro",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-61",
    "name": "Corrector en Cinta 5mmx 5mts Lavoro",
    "brand": "Lavoro",
    "sku": "507133",
    "barcode": "3100263307902",
    "category": "oficina",
    "price": 1550,
    "originalPrice": 1900,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Cinta correctora ergonómica de aplicación limpia en seco. Permite reescribir inmediatamente sobre cualquier tipo de papel.",
    "specs": [
      "Marca: Lavoro",
      "Aplicación: En seco instantánea",
      "Mecanismo: Suave y preciso",
      "Uso: Diario en oficina y colegio"
    ]
  },
  {
    "id": "prod-py-62",
    "name": "Corrector en Cinta 5mmx 5mts Lavoro",
    "brand": "Lavoro",
    "sku": "559269",
    "barcode": "3100274456231",
    "category": "oficina",
    "price": 1750,
    "originalPrice": 2200,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Cinta correctora ergonómica de aplicación limpia en seco. Permite reescribir inmediatamente sobre cualquier tipo de papel.",
    "specs": [
      "Marca: Lavoro",
      "Aplicación: En seco instantánea",
      "Mecanismo: Suave y preciso",
      "Uso: Diario en oficina y colegio"
    ]
  },
  {
    "id": "prod-py-63",
    "name": "Cinta Correctora 6 Metros Filgo",
    "brand": "Filgo",
    "sku": "75272",
    "barcode": "7795513075272",
    "category": "oficina",
    "price": 1350,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Cinta correctora ergonómica de aplicación limpia en seco. Permite reescribir inmediatamente sobre cualquier tipo de papel.",
    "specs": [
      "Marca: Filgo",
      "Aplicación: En seco instantánea",
      "Mecanismo: Suave y preciso",
      "Uso: Diario en oficina y colegio"
    ]
  },
  {
    "id": "prod-py-64",
    "name": "Cinta Correctora + Recarga 8 Metros Rhein",
    "brand": "Rhein",
    "sku": "567275",
    "barcode": "7804685586308",
    "category": "oficina",
    "price": 1990,
    "originalPrice": 2500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Cinta correctora ergonómica de aplicación limpia en seco. Permite reescribir inmediatamente sobre cualquier tipo de papel.",
    "specs": [
      "Marca: Rhein",
      "Aplicación: En seco instantánea",
      "Mecanismo: Suave y preciso",
      "Uso: Diario en oficina y colegio"
    ]
  },
  {
    "id": "prod-py-65",
    "name": "Marcador Pizarra Recargable Incluye Una Recarga Color Azul Rhein",
    "brand": "Rhein",
    "sku": "564529",
    "barcode": "7804685583505",
    "category": "oficina",
    "price": 2390,
    "originalPrice": 3000,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Rhein para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Rhein",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-66",
    "name": "Marcador Pizarra Recargable Incluye Una Recarga Color Negro Rhein",
    "brand": "Rhein",
    "sku": "564528",
    "barcode": "7804685583499",
    "category": "oficina",
    "price": 2390,
    "originalPrice": 3000,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Rhein para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Rhein",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-67",
    "name": "Tarjetas Kardex 5\"X8\" Fultons",
    "brand": "Fultons",
    "sku": "401430",
    "barcode": "3100004014304",
    "category": "papeleria",
    "price": 1890,
    "originalPrice": 2400,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-68",
    "name": "Pack de Sobre Americano Blanco 25 Unidades Fultons",
    "brand": "Fultons",
    "sku": "104455",
    "barcode": "4100001044556",
    "category": "papeleria",
    "price": 1990,
    "originalPrice": 2500,
    "badge": "PACK",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-69",
    "name": "Pack de Sobre Medio Oficio Blanco 19X26,5 CM 25 Unidades Fultons",
    "brand": "Fultons",
    "sku": "358191",
    "barcode": "4100003581912",
    "category": "papeleria",
    "price": 4290,
    "originalPrice": 5400,
    "badge": "PACK",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-70",
    "name": "Pack Sobre Carta Blanco 15,4X12,4CM 25 Unidades Fultons",
    "brand": "Fultons",
    "sku": "103133",
    "barcode": "4100001031334",
    "category": "papeleria",
    "price": 1590,
    "originalPrice": 2000,
    "badge": "PACK",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-71",
    "name": "Sobre Americano con Ventana Blanco 25 un Fultons",
    "brand": "Fultons",
    "sku": "104454",
    "barcode": null,
    "category": "papeleria",
    "price": 1990,
    "originalPrice": 2500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Insumo de papelería y manualidades Fultons ideal para correspondencia, organización de registros y manualidades escolares.",
    "specs": [
      "Marca: Fultons",
      "Calidad: Papelería seleccionada",
      "Uso: Escolar, artesanal y oficina"
    ]
  },
  {
    "id": "prod-py-72",
    "name": "Tiza Blanca 12 Barras Art And Craft",
    "brand": "Art & Craft",
    "sku": "103287",
    "barcode": "4100018550002",
    "category": "arte",
    "price": 390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tizas cilíndricas compactas con tecnología anti-polvo para una escritura nítida en pizarras tradicionales y tableros.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Bajo residuo de polvo",
      "Uso: Pizarras y tableros",
      "Textura: Suave al escribir"
    ]
  },
  {
    "id": "prod-py-73",
    "name": "Tiza Color 12 Barras Art And Craft",
    "brand": "Art & Craft",
    "sku": "103288",
    "barcode": "4100018551009",
    "category": "arte",
    "price": 450,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tizas cilíndricas compactas con tecnología anti-polvo para una escritura nítida en pizarras tradicionales y tableros.",
    "specs": [
      "Marca: Art & Craft",
      "Fórmula: Bajo residuo de polvo",
      "Uso: Pizarras y tableros",
      "Textura: Suave al escribir"
    ]
  },
  {
    "id": "prod-py-74",
    "name": "Accoclips Plasticos Blanco 50 Unidades Fultons",
    "brand": "Fultons",
    "sku": "366854",
    "barcode": null,
    "category": "oficina",
    "price": 1490,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-75",
    "name": "Accoclips Plasticos Colores Surtidos Fultons",
    "brand": "Fultons",
    "sku": "100009",
    "barcode": "4147015103008",
    "category": "oficina",
    "price": 1490,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-76",
    "name": "Accoclips Metálicos Dorado Fultons",
    "brand": "Fultons",
    "sku": "100003",
    "barcode": "4146615108000",
    "category": "oficina",
    "price": 2390,
    "originalPrice": 3000,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-77",
    "name": "Accoclips Metálico Plateado Fultons",
    "brand": "Fultons",
    "sku": "349771",
    "barcode": "4100015154005",
    "category": "oficina",
    "price": 1690,
    "originalPrice": 2100,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-78",
    "name": "Tinta para Tampon Negro Fultons",
    "brand": "Fultons",
    "sku": "354463",
    "barcode": "4156515540008",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tampón entintado para timbrado de documentos y registros oficiales con nitidez uniforme y secado rápido.",
    "specs": [
      "Marca: Fultons",
      "Tinta: Alta definición no tóxica",
      "Almohadilla: Densidad uniforme",
      "Uso: Legal, notarial y comercial"
    ]
  },
  {
    "id": "prod-py-79",
    "name": "Tinta para Tampon Azul Fultons",
    "brand": "Fultons",
    "sku": "354462",
    "barcode": "4156515540015",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tampón entintado para timbrado de documentos y registros oficiales con nitidez uniforme y secado rápido.",
    "specs": [
      "Marca: Fultons",
      "Tinta: Alta definición no tóxica",
      "Almohadilla: Densidad uniforme",
      "Uso: Legal, notarial y comercial"
    ]
  },
  {
    "id": "prod-py-80",
    "name": "Pincha Papeles Punta Metálica 13 CM Fultons",
    "brand": "Fultons",
    "sku": "525264",
    "barcode": "3100254380204",
    "category": "oficina",
    "price": 1990,
    "originalPrice": 2500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-81",
    "name": "Perforadora Metálica 1 Orificio Fultons",
    "brand": "Fultons",
    "sku": "462838",
    "barcode": "3100004628389",
    "category": "oficina",
    "price": 1990,
    "originalPrice": 2500,
    "badge": "PRO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Herramienta comercial Fultons de construcción robusta para tareas continuas en almacenes, oficinas y puntos de venta.",
    "specs": [
      "Marca: Fultons",
      "Estructura: Metálica de alta durabilidad",
      "Operación: Ergonómica y precisa",
      "Garantía: Calidad comercial"
    ]
  },
  {
    "id": "prod-py-82",
    "name": "Dedo de Goma Rojo N11 Fultons",
    "brand": "Fultons",
    "sku": "524639",
    "barcode": "3100273750484",
    "category": "oficina",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-83",
    "name": "Dedo de Goma N11,5 Color Verde Fultons",
    "brand": "Fultons",
    "sku": "524640",
    "barcode": "3100241073850",
    "category": "oficina",
    "price": 2850,
    "originalPrice": 3600,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-84",
    "name": "Esponjero Negro Fultons",
    "brand": "Fultons",
    "sku": "401441",
    "barcode": "3100004014410",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-85",
    "name": "Tampon Mediano Negro Tapa Metal Cuadrado Fultons",
    "brand": "Fultons",
    "sku": "354466",
    "barcode": "3100003544666",
    "category": "oficina",
    "price": 1690,
    "originalPrice": 2100,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tampón entintado para timbrado de documentos y registros oficiales con nitidez uniforme y secado rápido.",
    "specs": [
      "Marca: Fultons",
      "Tinta: Alta definición no tóxica",
      "Almohadilla: Densidad uniforme",
      "Uso: Legal, notarial y comercial"
    ]
  },
  {
    "id": "prod-py-86",
    "name": "Tampon Huella Digital Fultons",
    "brand": "Fultons",
    "sku": "401420",
    "barcode": "3100004014205",
    "category": "oficina",
    "price": 2350,
    "originalPrice": 2900,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tampón entintado para timbrado de documentos y registros oficiales con nitidez uniforme y secado rápido.",
    "specs": [
      "Marca: Fultons",
      "Tinta: Alta definición no tóxica",
      "Almohadilla: Densidad uniforme",
      "Uso: Legal, notarial y comercial"
    ]
  },
  {
    "id": "prod-py-87",
    "name": "Tampon Dactilar Fultons",
    "brand": "Fultons",
    "sku": "446340",
    "barcode": "3100004463409",
    "category": "oficina",
    "price": 2690,
    "originalPrice": 3400,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Tampón entintado para timbrado de documentos y registros oficiales con nitidez uniforme y secado rápido.",
    "specs": [
      "Marca: Fultons",
      "Tinta: Alta definición no tóxica",
      "Almohadilla: Densidad uniforme",
      "Uso: Legal, notarial y comercial"
    ]
  },
  {
    "id": "prod-py-88",
    "name": "Formulario Vale por 100 Hojas Fultons",
    "brand": "Fultons",
    "sku": "408801",
    "barcode": "3100004088015",
    "category": "libros",
    "price": 1190,
    "originalPrice": null,
    "badge": "ADMIN",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Talonario encolado con microperforado para desprendimiento fácil. Ideal para control de caja chica y comprobantes de dinero.",
    "specs": [
      "Marca: Fultons",
      "Formato: 100 hojas encoladas",
      "Papel: Bond estándar",
      "Uso: Comprobante contable"
    ]
  },
  {
    "id": "prod-py-89",
    "name": "Formulario de Recibo de Dinero Fultons",
    "brand": "Fultons",
    "sku": "408798",
    "barcode": "3100004087988",
    "category": "libros",
    "price": 1190,
    "originalPrice": null,
    "badge": "ADMIN",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Talonario encolado con microperforado para desprendimiento fácil. Ideal para control de caja chica y comprobantes de dinero.",
    "specs": [
      "Marca: Fultons",
      "Formato: 100 hojas encoladas",
      "Papel: Bond estándar",
      "Uso: Comprobante contable"
    ]
  },
  {
    "id": "prod-py-90",
    "name": "Dispensador Magic Clip Fultons",
    "brand": "Fultons",
    "sku": "102358",
    "barcode": "4147215103006",
    "category": "oficina",
    "price": 1890,
    "originalPrice": 2400,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Fultons para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Fultons",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-91",
    "name": "Dispensador de Notas Adhesivas Lavoro",
    "brand": "Lavoro",
    "sku": "550230",
    "barcode": "3100264119269",
    "category": "oficina",
    "price": 6990,
    "originalPrice": 8700,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-92",
    "name": "Llaveros Plasticos Colores Surtidos Lavoro",
    "brand": "Lavoro",
    "sku": "362740",
    "barcode": "4100080161007",
    "category": "bazar",
    "price": 4790,
    "originalPrice": 6000,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Artículo de bazar y escritorio Lavoro. Práctico, durable y diseñado para el día a día en el hogar, colegio o comercio.",
    "specs": [
      "Marca: Lavoro",
      "Calidad: Excelente relación precio/calidad",
      "Uso: Versátil y diario"
    ]
  },
  {
    "id": "prod-py-93",
    "name": "Engrapadora Clavadora Manual Tipo Pistola Metálica Lavoro",
    "brand": "Lavoro",
    "sku": "507513",
    "barcode": "3100200803313",
    "category": "oficina",
    "price": 19490,
    "originalPrice": 24400,
    "badge": "PRO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Herramienta comercial Lavoro de construcción robusta para tareas continuas en almacenes, oficinas y puntos de venta.",
    "specs": [
      "Marca: Lavoro",
      "Estructura: Metálica de alta durabilidad",
      "Operación: Ergonómica y precisa",
      "Garantía: Calidad comercial"
    ]
  },
  {
    "id": "prod-py-94",
    "name": "Etiquetadora de Precios Manual 8 Digitos Lavoro",
    "brand": "Lavoro",
    "sku": "401423",
    "barcode": "3100004014236",
    "category": "oficina",
    "price": 13490,
    "originalPrice": 16900,
    "badge": "PRO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Herramienta comercial Lavoro de construcción robusta para tareas continuas en almacenes, oficinas y puntos de venta.",
    "specs": [
      "Marca: Lavoro",
      "Estructura: Metálica de alta durabilidad",
      "Operación: Ergonómica y precisa",
      "Garantía: Calidad comercial"
    ]
  },
  {
    "id": "prod-py-95",
    "name": "Notas Adhesivas 7 Colores 258 Hojas 50X50 Lavoro",
    "brand": "Lavoro",
    "sku": "440876",
    "barcode": "3100004408769",
    "category": "oficina",
    "price": 1750,
    "originalPrice": 2200,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-96",
    "name": "Notas Adhesivas 6 Colores 258 Hojas 50X50 Lavoro",
    "brand": "Lavoro",
    "sku": "497966",
    "barcode": "3100282950639",
    "category": "oficina",
    "price": 1750,
    "originalPrice": 2200,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-97",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Violeta Lavoro",
    "brand": "Lavoro",
    "sku": "542709",
    "barcode": "3100276852666",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-98",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Verde Lavoro",
    "brand": "Lavoro",
    "sku": "440871",
    "barcode": "3100004408714",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-99",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Celeste Lavoro",
    "brand": "Lavoro",
    "sku": "507194",
    "barcode": "3100289466393",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-100",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Rosado Lavoro",
    "brand": "Lavoro",
    "sku": "507191",
    "barcode": "3100267579886",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-101",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Calipso Lavoro",
    "brand": "Lavoro",
    "sku": "561189",
    "barcode": "3100203682984",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-102",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Fucsia Lavoro",
    "brand": "Lavoro",
    "sku": "440870",
    "barcode": "3100004408707",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-103",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Verde Agua Lavoro",
    "brand": "Lavoro",
    "sku": "507193",
    "barcode": "3100270610583",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-104",
    "name": "Notas Adhesivas 76X76MM 100 Hojas Color Amarillo Lavoro",
    "brand": "Lavoro",
    "sku": "440874",
    "barcode": "3100004408745",
    "category": "oficina",
    "price": 990,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-105",
    "name": "Notas Adhesivas 76x76 mm 400 Hojas 4 Colores Lavoro",
    "brand": "Lavoro",
    "sku": "393328",
    "barcode": "3100003933286",
    "category": "oficina",
    "price": 2590,
    "originalPrice": 3200,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-106",
    "name": "Notas Adhesivas 76x76 MM 258 Hojas 2 Colores Blanco y Negro Lavoro",
    "brand": "Lavoro",
    "sku": "524057",
    "barcode": "3100200689474",
    "category": "oficina",
    "price": 2490,
    "originalPrice": 3100,
    "badge": "DESTACADO",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Lavoro",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-107",
    "name": "Notas Adhesivas 125X75 MM 100 Hojas Fultons",
    "brand": "Fultons",
    "sku": "102633",
    "barcode": "4147616704000",
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Fultons",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-108",
    "name": "Notas Adhesivas 100 X75 MM 100 Hojas Fultons",
    "brand": "Fultons",
    "sku": "107215",
    "barcode": "4147816701007",
    "category": "oficina",
    "price": 890,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Notas adhesivas reposicionables de excelente fijación que se retiran sin dejar residuos. Ideales para recordatorios y organización.",
    "specs": [
      "Marca: Fultons",
      "Adhesivo: Reposicionable limpio",
      "Uso: Escritorio, libros y monitores",
      "Visibilidad: Colores llamativos"
    ]
  },
  {
    "id": "prod-py-109",
    "name": "Porta Clips Magnetico Doble Colores Surtidos Lavoro",
    "brand": "Lavoro",
    "sku": "542749",
    "barcode": "3100296014594",
    "category": "oficina",
    "price": 1990,
    "originalPrice": 2500,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Accesorio funcional de escritorio Lavoro para mantener la eficiencia y pulcritud en tu lugar de trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Durabilidad: Alta",
      "Uso: Oficina y hogar"
    ]
  },
  {
    "id": "prod-py-110",
    "name": "Carpeta Plástica con Accoclips Color Celeste Generico",
    "brand": "Genérico",
    "sku": "80143",
    "barcode": "7804607080143",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-111",
    "name": "Carpeta Plástica con Accoclips Color Naranjo Generico",
    "brand": "Genérico",
    "sku": "80150",
    "barcode": "7804607080150",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-112",
    "name": "Carpeta Plástica con Accoclips Color Morada Generico",
    "brand": "Genérico",
    "sku": "80174",
    "barcode": "7804607080174",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-113",
    "name": "Carpeta Plástica con Accoclips Color Fucsia Generico",
    "brand": "Genérico",
    "sku": "26678",
    "barcode": "601202026678",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-114",
    "name": "Carpeta Plástica con Accoclips Color Café Genérico",
    "brand": "Genérico",
    "sku": "80181",
    "barcode": "7804607080181",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-115",
    "name": "Carpeta Plástica con Accoclips Color Rosado Generico",
    "brand": "Genérico",
    "sku": "80167",
    "barcode": "7804607080167",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-116",
    "name": "Carpeta Plástica con Accoclips Color Gris Generico",
    "brand": "Genérico",
    "sku": "80204",
    "barcode": "7804607080204",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-117",
    "name": "Carpeta Plástica con Accoclips Color Beige Generico",
    "brand": "Genérico",
    "sku": "80211",
    "barcode": "7804607080211",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-118",
    "name": "Carpeta Plástica con Accoclips Color Blanco Generico",
    "brand": "Genérico",
    "sku": "80198",
    "barcode": "7804607080198",
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-119",
    "name": "Carpeta Plástica con Accoclips Color Verde Oscuro Generico",
    "brand": "Genérico",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-120",
    "name": "Carpeta Plástica con Accoclips Color Verde Claro Generico",
    "brand": "Genérico",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-121",
    "name": "Carpeta Plástica con Accoclips Color Negro Generico",
    "brand": "Genérico",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-122",
    "name": "Carpeta Plástica con Accoclips Color Rojo Generico",
    "brand": "Genérico",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-123",
    "name": "Carpeta Plástica con Accoclips Color Azul Generico",
    "brand": "Genérico",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 790,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Genérico",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-124",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Celeste Auca",
    "brand": "Auca",
    "sku": "28828",
    "barcode": "7806505985025",
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-125",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Verde Auca",
    "brand": "Auca",
    "sku": "27909",
    "barcode": "7806505962538",
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-126",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Amarilla Auca",
    "brand": "Auca",
    "sku": "28827",
    "barcode": "7806505985018",
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-127",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Roja Auca",
    "brand": "Auca",
    "sku": "27907",
    "barcode": "7806505962514",
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-128",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Azul Auca",
    "brand": "Auca",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-129",
    "name": "Carpeta Plastificada Bolsillo con Accoclips Rosada Auca",
    "brand": "Auca",
    "sku": null,
    "barcode": null,
    "category": "oficina",
    "price": 1100,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Auca",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-130",
    "name": "Carpeta con Elástico Cartulina OF Azul Lavoro",
    "brand": "Lavoro",
    "sku": "100545",
    "barcode": "4100015019014",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-131",
    "name": "Carpeta con Elástico Cartulina OF Amarillo Lavoro",
    "brand": "Lavoro",
    "sku": "105495",
    "barcode": "3100821010121",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-132",
    "name": "Carpeta con Elástico Cartulina OF Verde Pistacho Lavoro",
    "brand": "Lavoro",
    "sku": "383804",
    "barcode": "3100823838044",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-133",
    "name": "Carpeta con Elástico Cartulina OF Verde Claro Lavoro",
    "brand": "Lavoro",
    "sku": "506622",
    "barcode": "3100250836040",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-134",
    "name": "Carpeta con Elástico Cartulina OF Verde Oscuro Lavoro",
    "brand": "Lavoro",
    "sku": "100547",
    "barcode": "4100015019038",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-135",
    "name": "Carpeta con Elástico Cartulina OF Fucsia Lavoro",
    "brand": "Lavoro",
    "sku": "455895",
    "barcode": "3100004558952",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-136",
    "name": "Carpeta con Elástico Cartulina OF Rojo Lavoro",
    "brand": "Lavoro",
    "sku": "100546",
    "barcode": "4100015019021",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-137",
    "name": "Carpeta con Elástico Cartulina OF Celeste Lavoro",
    "brand": "Lavoro",
    "sku": "455896",
    "barcode": "3100004558969",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-138",
    "name": "Carpeta con Elástico Cartulina OF Rosado Palo Lavoro",
    "brand": "Lavoro",
    "sku": "506566",
    "barcode": "3100222373320",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-139",
    "name": "Carpeta con Elástico Cartulina OF Crema Lavoro",
    "brand": "Lavoro",
    "sku": "506569",
    "barcode": "3100269396238",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-140",
    "name": "Carpeta con Elástico Cartulina OF Verde Pastel Lavoro",
    "brand": "Lavoro",
    "sku": "506568",
    "barcode": "3100243839027",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-141",
    "name": "Carpeta con Elástico Cartulina OF Celeste Lavoro",
    "brand": "Lavoro",
    "sku": "506564",
    "barcode": "3100264131278",
    "category": "oficina",
    "price": 1390,
    "originalPrice": null,
    "badge": null,
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Carpeta organizadora de alta resistencia para proteger y clasificar documentos, presentaciones y contratos en el estudio o trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Material: Polipropileno / Cartulina rígida",
      "Capacidad: Amplia sujeción",
      "Uso: Archivo y presentación"
    ]
  },
  {
    "id": "prod-py-142",
    "name": "Libro Manifold Triplicado Foliado 50 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "525268",
    "barcode": "3100246361082",
    "category": "libros",
    "price": 7990,
    "originalPrice": 10000,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro manifold autocopiativo triplicado foliado para emisión de comprobantes, recibos internos o notas de entrega.",
    "specs": [
      "Marca: Lavoro",
      "Formato: Triplicado autocopiativo",
      "Páginas: 50 juegos numerados",
      "Uso: Administración y despacho"
    ]
  },
  {
    "id": "prod-py-143",
    "name": "Libro de Correspondencia 100 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "458742",
    "barcode": "3100004587426",
    "category": "libros",
    "price": 3990,
    "originalPrice": 5000,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro para registro y control de entrada y salida de correspondencia, encomiendas y documentos en recepciones.",
    "specs": [
      "Marca: Lavoro",
      "Páginas: 100 hojas foliadas",
      "Tapa: Dura lavable",
      "Uso: Oficina y recepción"
    ]
  },
  {
    "id": "prod-py-144",
    "name": "Libro de Asistencia 100 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "447460",
    "barcode": "3100004474603",
    "category": "libros",
    "price": 5990,
    "originalPrice": 7500,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro de asistencia reglamentario con hojas foliadas de alta calidad para el control laboral según la normativa de la Dirección del Trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Formato: Foliado reglamentario",
      "Encuadernación: Tapa dura resistente",
      "Uso: Control laboral oficial"
    ]
  },
  {
    "id": "prod-py-145",
    "name": "Libro de Asistencia 30 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "447459",
    "barcode": "3100004474597",
    "category": "libros",
    "price": 2190,
    "originalPrice": 2700,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro de asistencia reglamentario con hojas foliadas de alta calidad para el control laboral según la normativa de la Dirección del Trabajo.",
    "specs": [
      "Marca: Lavoro",
      "Formato: Foliado reglamentario",
      "Encuadernación: Tapa dura resistente",
      "Uso: Control laboral oficial"
    ]
  },
  {
    "id": "prod-py-146",
    "name": "Libro de Actas 200 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "458680",
    "barcode": "3100004586801",
    "category": "libros",
    "price": 10980,
    "originalPrice": 13700,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro de actas institucional empastado con hojas numeradas para registro de sesiones, asambleas comunitarias y juntas de vecinos.",
    "specs": [
      "Marca: Lavoro",
      "Formato: Empastado y foliado",
      "Papel: Bond de alto gramaje",
      "Uso: Legal y corporativo"
    ]
  },
  {
    "id": "prod-py-147",
    "name": "Libro de Actas Matematica 7 MM 100 Hojas Lavoro",
    "brand": "Lavoro",
    "sku": "458679",
    "barcode": "3100004586795",
    "category": "libros",
    "price": 4990,
    "originalPrice": 6200,
    "badge": "OFICIAL",
    "stock": "En stock local",
    "image": "/placeholder-product.svg",
    "description": "Libro de actas institucional empastado con hojas numeradas para registro de sesiones, asambleas comunitarias y juntas de vecinos.",
    "specs": [
      "Marca: Lavoro",
      "Formato: Empastado y foliado",
      "Papel: Bond de alto gramaje",
      "Uso: Legal y corporativo"
    ]
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
