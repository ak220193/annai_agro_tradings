export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_DETAILS = {
  phone: "+91-9344295395",
  email: "annaiagrotradings@gmail.com",
  address: "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu, 623704",
  socials: {
    linkedin: "https://www.linkedin.com/in/gokulnath-ramesh-4434a93a4/",
    instagram: "https://instagram.com/annai_agro", // Update with real link
    youtube: "https://youtube.com/@annai_agro", // Update with real link
    whatsapp: "919344295395", // Clean number for API
  },
};

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    category: "Spices",
    image: "hero/Products/Spices-1.jpg",
    description: "Export-grade aromatic Indian spices.",
    items: ["Dry Red Chilli", "Turmeric", "Cardamom", "Black Pepper", "Clove"],
    color: "bg-orange-50",
  },
  {
    id: 2,
    category: "Millets",
    image: "/hero/Products/Cerals-2.jpg",
    description: "Nutrient-dense ancient grains for global health.",
    items: [
      "Koda",
      "Barnyard",
      "Little",
      "Foxtail",
      "Pearl",
      "Sorghum",
      "Ragi",
    ],
    color: "bg-green-50",
  },
  {
    id: 3,
    category: "Cereals",
    image: "/hero/Products/Cerals-1.jpg",
    description: "Premium Non-Basmati rice varieties.",
    items: ["Seeraga Samba", "Red Rice", "Traditional Rice"],
    color: "bg-blue-50",
  },
  {
    id: 4,
    category: "Natural Sugar",
    image: "/hero/Products/Sugar.jpg",
    description: "Traditional chemical-free sweeteners.",
    items: ["Palm Jaggery"],
    color: "bg-amber-50",
  },
];

export const BEST_SELLERS = [
  {
    id: "bs-1",
    name: "Dry Red Chilli",
    category: "Spices",
    image: "/hero/bestSellers/RedChilli.jpg",
    slug: "dry-red-chilli",
    specs: ["S4/S17 Stemless", "High Pungency", "Moisture < 12%"],
  },
  {
    id: "bs-2",
    name: "Turmeric Finger",
    category: "Spices",
    image: "/hero/bestSellers/turmeric.jpg",
    slug: "turmeric-finger",
    specs: ["Curcumin 3% - 5%", "Double Polished", "Salem/Erode Origin"],
  },
  {
    id: "bs-3",
    name: "Green Cardamom",
    category: "Spices",
    image: "/hero/bestSellers/card.jpg",
    slug: "green-cardamom",
    specs: ["7mm - 8mm Grade", "Deep Green Color", "Aromatic Export Quality"],
  },
  {
    id: "bs-4",
    name: "Black Pepper",
    category: "Spices",
    image: "/hero/bestSellers/BP.jpg",
    slug: "black-pepper",
    specs: ["500g - 550g GL", "Machine Cleaned", "Malabar Origin"],
  },
  {
    id: "bs-5",
    name: "Koda Millet",
    category: "Millets",
    image: "/hero/bestSellers/millet.jpg",
    slug: "koda-millet",
    specs: ["Hulled & Cleaned", "High Fiber Content", "Gluten-Free"],
  },
  {
    id: "bs-6",
    name: "Seeraga Samba Rice",
    category: "Cereals",
    image: "/hero/bestSellers/Rice.jpg",
    slug: "seeraga-samba",
    specs: ["Aromatic Tiny Grain", "Aged 12+ Months", "Traditional Variety"],
  },
];


export const CERTIFICATIONS = [
  {
    id: "fssai",
    title: "FSSAI",
    image: "/hero/certifications/fssai-seeklogo.png",
    subtitle: "Food Safety Standards Authority",
    description: "Licensing for food safety management and quality assurance.",
    color: "bg-orange-50",
  },
  {
    id: "spices-board",
    title: "Spices Board of India",
    image: "/hero/certifications/spice.png",
    subtitle: "Registration as Exporter (CRES)",
    description: "Mandatory authorization for exporting premium Indian spices globally.",
    color: "bg-emerald-50",
  },
  {
    id: "apeda",
    title: "APEDA",
    image: "/hero/certifications/apeda.png",
    subtitle: "Agro Products Export Authority",
    description: "Ensures compliance with international quality standards for agro exports.",
    color: "bg-blue-50",
  },
];


export const products = [
  // --- SPICES ---
  {
    id: "dry-red-chilli",
    name: "Dry Red Chilli",
    scientificName: "Capsicum annuum Linn",
    cat: "Spices",
    img: "/products/dry chilli/img1.jpg",
    overview: "Leading dry red chilli exporter from India. We supply premium medium-heat varieties sourced from organic farmers, including GI-tagged Ramnad Mundu. As a trusted dry red chilli bulk supplier, we ensure global export standards.",
    hsn: "09042110",
    seoKeywords: [
      "dry red chilli exporter india", 
      "dry red chilli supplier india", 
      "dry red chilli bulk supplier", 
      "red chilli wholesale supplier india", 
      "indian dry red chilli exporter"
    ],
    specs: { purity: "99% Min", moisture: "10-12%", grade: "Premium / Export", shelfLife: "12-24 Months", origin: "India" },
    varieties: [
      { name: "S9- Ramnad Mundu", heat: "Medium", note: "GI Tagged, round shape." },
      { name: "S17 Teja", heat: "High", note: "Slender, bright red." },
      { name: "Byadgi", heat: "Low", note: "Deep red, wrinkled skin." }
    ]
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    cat: "Spices",
    img: "/gallery/turmeric.jpg",
    overview: "Prominent turmeric exporter from India specializing in high-curcumin fingers. We are an organic turmeric supplier in India serving B2B markets as a turmeric bulk supplier and wholesale partner.",
    hsn: "09103020",
    seoKeywords: [
      "turmeric exporter india", 
      "organic turmeric supplier india", 
      "turmeric bulk supplier", 
      "turmeric wholesale supplier india", 
      "turmeric exporter from india"
    ],
    specs: { purity: "99% Min", moisture: "< 10%", grade: "Single/Double Polished", shelfLife: "12-24 Months", origin: "India" },
    varieties: [
      { name: "Salem Local", curcumin: "3.5%-4%", note: "Bright golden-yellow." },
      { name: "Erode Local", curcumin: "2.5%-3.5%", note: "GI Tagged variety." }
    ]
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    scientificName: "Elettaria cardamomum",
    cat: "Spices",
    img: "/products/cardomom/img1.jpg",
    overview: "Authentic green cardamom supplier in India. Sourced from the Western Ghats, we act as a cardamom bulk supplier and cardamom exporter from India for premium export-grade pods.",
    hsn: "090831",
    seoKeywords: [
      "cardamom exporter india", 
      "green cardamom supplier india", 
      "cardamom bulk supplier", 
      "cardamom wholesale supplier india"
    ],
    specs: { purity: "99% Min", moisture: "10-12%", grade: "Export Quality (7mm - 8mm+)", shelfLife: "6-12 Months", origin: "India" }
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    scientificName: "Piper nigrum",
    cat: "Spices",
    img: "/products/black pepper/img.jpg",
    overview: "Indian black pepper exporter offering high-piperine Malabar pepper. We are a dedicated black pepper supplier in India and bulk supplier for the global food and pharma industries.",
    hsn: "09041130",
    seoKeywords: [
      "black pepper exporter india", 
      "black pepper supplier india", 
      "black pepper bulk supplier", 
      "indian black pepper exporter"
    ],
    specs: { purity: "99% Min", moisture: "10-12%", grade: "500 GL to 580 GL", shelfLife: "6-12 Months", origin: "India" }
  },
  {
    id: "clove",
    name: "Clove",
    scientificName: "Syzygium aromaticum",
    cat: "Spices",
    img: "/gallery/clove.jpg",
    overview: "GI-tagged clove exporter from India. Sourced from Kanniyakumari, we are a clove supplier in India providing handpicked premium cloves to bulk and wholesale buyers worldwide.",
    hsn: "090710",
    seoKeywords: [
      "clove exporter india", 
      "clove supplier india", 
      "clove bulk supplier", 
      "clove wholesale supplier india"
    ],
    specs: { purity: "99% Min", moisture: "10-12%", grade: "Handpicked Premium", shelfLife: "12-24 Months", origin: "India" }
  },

  // --- MILLETS ---
  {
    id: "koda-millet",
    name: "Koda Millet",
    scientificName: "Paspalum scrobiculatum",
    cat: "Millets",
    img: "/products/millets/koda.png",
    overview: "Certified organic koda millet exporter from India. As a leading koda millet supplier in India, we provide high-fiber, gluten-free grains to koda millet bulk buyers globally.",
    hsn: "10089090",
    seoKeywords: [
      "koda millet exporter india", 
      "koda millet supplier india", 
      "koda millet bulk supplier", 
      "organic koda millet exporter"
    ],
    specs: { purity: "99% Min", moisture: "10-12%", grade: "Sortex Cleaned", shelfLife: "6-12 Months", origin: "India" }
  },
  {
    id: "barnyard-millet",
    name: "Barnyard Millet",
    scientificName: "Echinochloa esculenta",
    cat: "Millets",
    img: "/products/millets/ban2.jpg",
    overview: "Premier barnyard millet exporter from India. We are an organic barnyard millet exporter and bulk supplier specializing in iron-rich, diabetic-friendly grains.",
    hsn: "10082920",
    seoKeywords: [
      "barnyard millet exporter india", 
      "barnyard millet supplier india", 
      "barnyard millet bulk supplier", 
      "organic barnyard millet exporter"
    ],
    specs: { purity: "99% Min", moisture: "11%", grade: "Premium Sortex", shelfLife: "12 Months" }
  },
  {
    id: "little-millet",
    name: "Little Millet",
    scientificName: "Panicum sumatrense",
    cat: "Millets",
    img: "/products/millets/banyard-1.jpg",
    overview: "Export-quality little millet supplier in India. We serve as a little millet bulk supplier and organic little millet exporter, providing nutrient-dense, sortex-cleaned grains.",
    hsn: "10082930",
    seoKeywords: [
      "little millet exporter india", 
      "little millet supplier india", 
      "little millet bulk supplier", 
      "organic little millet exporter"
    ],
    specs: { purity: "99% Min", moisture: "10%", grade: "Export Quality", shelfLife: "12 Months" }
  },
  {
    id: "foxtail-millet",
    name: "Foxtail Millet",
    scientificName: "Setaria italica",
    cat: "Millets",
    img: "/products/millets/fox.jpg",
    overview: "Leading foxtail millet exporter from India. We are a foxtail millet bulk supplier and organic foxtail millet exporter, delivering high-protein ancient grains for the health food industry.",
    hsn: "10082940",
    seoKeywords: [
      "foxtail millet exporter india", 
      "foxtail millet supplier india", 
      "foxtail millet bulk supplier", 
      "organic foxtail millet exporter"
    ],
    specs: { purity: "99% Min", moisture: "12%", grade: "Double Polished", shelfLife: "12 Months" }
  },
  {
    id: "pearl-millet",
    name: "Pearl Millet (Bajra)",
    scientificName: "Pennisetum glaucum",
    cat: "Millets",
    img: "/products/millets/pearl2.jpg",
    overview: "Major pearl millet exporter from India. Also known as a bajra exporter from India, we act as a pearl millet bulk supplier and wholesale partner for global food and feed industries.",
    hsn: "10082110",
    seoKeywords: [
      "pearl millet exporter india", 
      "bajra exporter from india", 
      "pearl millet bulk supplier", 
      "pearl millet wholesale supplier"
    ],
    specs: { purity: "98% Min", moisture: "12%", grade: "Machine Cleaned", shelfLife: "12 Months" }
  },
  {
    id: "red-sorghum",
    name: "Sorghum (Red)",
    scientificName: "Sorghum bicolor",
    cat: "Millets",
    img: "/products/millets/redsorgum2.jpg",
    overview: "Red sorghum exporter from India and premium jowar bulk supplier. We provide red sorghum wholesale for gluten-free brewing and food manufacturing markets.",
    hsn: "10079000",
    seoKeywords: [
      "red sorghum exporter india", 
      "sorghum exporter from india", 
      "jowar bulk supplier india", 
      "sorghum wholesale supplier"
    ],
    specs: { purity: "99% Min", moisture: "12%", grade: "Premium Red", shelfLife: "12 Months" }
  },
  {
    id: "ragi",
    name: "Ragi (Finger Millet)",
    scientificName: "Eleusine coracana",
    cat: "Millets",
    img: "/products/millets/ragired.jpg",
    overview: "Top ragi exporter from India. As a finger millet exporter from India and ragi bulk supplier, we provide calcium-rich grains to wholesale food processors worldwide.",
    hsn: "10082910",
    seoKeywords: [
      "ragi exporter india", 
      "finger millet exporter india", 
      "ragi bulk supplier", 
      "ragi wholesale supplier india"
    ],
    specs: { purity: "99% Min", moisture: "12%", grade: "Sortex Premium", shelfLife: "12 Months" }
  },

  // --- CEREALS ---
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Rice",
    scientificName: "Oryza sativa",
    cat: "Cereals",
    img: "/products/millets/bs-2.jpg",
    overview: "Established non-basmati rice exporter from India. We are a reliable non-basmati rice supplier in India and indian rice exporter for long and short grain varieties.",
    hsn: "10063010",
    seoKeywords: [
      "non basmati rice exporter india", 
      "non basmati rice supplier india", 
      "non basmati rice bulk supplier", 
      "indian rice exporter"
    ],
    specs: { purity: "99% Min", moisture: "14% Max", grade: "Export Grade", shelfLife: "24 Months" }
  },
  {
    id: "seeraga-samba-rice",
    name: "Seeraga Samba Rice",
    scientificName: "Oryza sativa var. Seeraga Samba",
    cat: "Cereals",
    img: "/products/millets/seeraga samba.jpg",
    overview: "Traditional rice exporter from India specializing in GI-tagged Seeraga Samba. We are a primary seeraga samba rice supplier in India and bulk supplier for aromatic rice markets.",
    hsn: "10063010",
    seoKeywords: [
      "seeraga samba rice exporter india", 
      "seeraga samba rice supplier india", 
      "seeraga samba rice bulk supplier", 
      "traditional rice exporter india"
    ],
    specs: { purity: "99.5% Min", moisture: "12%", grade: "Aromatic Premium", shelfLife: "12-24 Months" }
  },
  {
    id: "red-rice",
    name: "Red Rice",
    scientificName: "Oryza punctata",
    cat: "Cereals",
    img: "/products/millets/redrice-2.jpg",
    overview: "Leading red rice exporter from India. As a red rice supplier and organic red rice exporter, we provide nutrient-rich unpolished rice for health-conscious bulk buyers.",
    hsn: "10063010",
    seoKeywords: [
      "red rice exporter india", 
      "red rice supplier india", 
      "red rice bulk supplier", 
      "organic red rice exporter"
    ],
    specs: { purity: "99% Min", moisture: "13%", grade: "Organic Certified", shelfLife: "12 Months" }
  },

  // --- SUGAR ---
  {
    id: "palm-jaggery",
    name: "Palm Jaggery",
    scientificName: "Borassus flabellifer extract",
    cat: "Sugar",
    img: "/products/millets/pm-3.jpg",
    overview: "Premium palm jaggery exporter from India. We are an organic palm jaggery exporter and palm jaggery supplier in India, providing traditional, unrefined sweeteners to bulk importers.",
    hsn: "17011310",
    seoKeywords: [
      "palm jaggery exporter india", 
      "palm jaggery supplier india", 
      "palm jaggery bulk supplier", 
      "organic palm jaggery exporter"
    ],
    specs: { purity: "100% Natural", moisture: "5-8%", grade: "Unrefined / Export", shelfLife: "6-12 Months", origin: "India" }
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Standardizing Purity: Maintaining 99% Curcumin in Turmeric Exports",
    excerpt: "For global B2B buyers, turmeric purity is a non-negotiable metric. Learn about our steam-sterilization process that preserves curcumin integrity.",
    category: "Authentic Spices",
    date: "Jan 17, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=1200",
    keywords: ["turmeric exporter india", "organic turmeric supplier india", "turmeric bulk supplier"],
    targetLink: "/products/turmeric",
    content: {
      intro: "In the global market, the value of turmeric is dictated by its curcumin content and microbial safety.",
      sections: [
        {
          heading: "The Curcumin Standard",
          text: "We ensure our Salem and Erode varieties maintain a curcumin level between 2.5% to 4.5% through controlled drying."
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Heat Factor: Why Our Dry Red Chilli Meets Global Scoville Standards",
    excerpt: "As a leading Indian dry red chilli exporter, we focus on capsaicin retention and moisture control for long-haul shipping to Europe and UAE.",
    category: "Authentic Spices",
    date: "Jan 18, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1599330230232-a5676359521d?q=80&w=1200",
    keywords: ["dry red chilli exporter india", "dry red chilli bulk supplier", "indian dry red chilli exporter"],
    targetLink: "/products/dry-red-chilli",
    content: {
      intro: "Heat profile and color retention are the two pillars of quality for dried chilli exports.",
      sections: [
        {
          heading: "SHU Monitoring",
          text: "Every batch of S17 Teja and Byadgi is tested for its Scoville Heat Units to ensure compliance with client specifications."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Seeraga Samba: The Fragrant Alternative to Basmati in Global Markets",
    excerpt: "Decoding why the Seeraga Samba rice supplier network in India is seeing a 40% rise in demand across Mediterranean and Southeast Asian markets.",
    category: "Traditional Rice",
    date: "Jan 19, 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200",
    keywords: ["seeraga samba rice exporter india", "traditional rice exporter india"],
    targetLink: "/products/seeraga-samba-rice",
    content: {
      intro: "Seeraga Samba, often called the 'Jeera' of rice, is gaining global traction for its unique aroma.",
      sections: [
        {
          heading: "The GI Tag Advantage",
          text: "Sourced directly from the Dindigul and Vellore clusters, our rice preserves its traditional geographic characteristics."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Millets 2026: Why Koda and Barnyard Millets are the Future of Superfoods",
    excerpt: "As a Koda millet exporter in India, we analyze the shifting trends toward gluten-free ancient grains in the Western retail sector.",
    category: "Product Benefits",
    date: "Jan 21, 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1200",
    keywords: ["koda millet exporter india", "barnyard millet bulk supplier", "organic koda millet exporter"],
    targetLink: "/products/koda-millet",
    content: {
      intro: "The international year of millets has sparked a permanent shift in consumer preference toward gluten-free grains.",
      sections: [
        {
          heading: "Processing for Export",
          text: "Our multi-stage de-husking and sortex cleaning ensure a 99% purity level, making our millets ready for retail packaging."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Quality Assurance: Why APEDA & FSSAI Certifications Matter for Importers",
    excerpt: "Safety is the priority. Discover the rigorous lab testing our spices undergo to meet international food safety compliance.",
    category: "Farm Authenticity",
    date: "Jan 22, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?q=80&w=1200",
    keywords: ["apeda registered exporter india", "fssai certified food exporter"],
    targetLink: "/about",
    content: {
      intro: "For an importer, certifications are the only proof of a safe and ethical supply chain.",
      sections: [
        {
          heading: "Traceability Protocols",
          text: "We implement QR-based traceability that connects the final export pallet back to the specific FPO cluster."
        }
      ]
    }
  },
  {
    id: 6,
    title: "Sweetening Naturally: The Industrial Use of Organic Palm Jaggery",
    excerpt: "How palm jaggery bulk supplier partnerships are helping food manufacturers replace refined sugar in premium confectionery.",
    category: "Recipes",
    date: "Jan 23, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
    keywords: ["palm jaggery exporter india", "palm jaggery bulk supplier"],
    targetLink: "/products/palm-jaggery",
    content: {
      intro: "Palm jaggery is no longer just a traditional sweetener; it is a high-demand functional food ingredient.",
      sections: [
        {
          heading: "B2B Supply Consistency",
          text: "Our extraction process ensures a consistent low-moisture block or powder form, ideal for large-scale food manufacturing."
        }
      ]
    }
  }
];