export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    subLinks: [
      { name: "Organic Spices", href: "/products/spices" },
      { name: "Premium Millets", href: "/products/millets" },
      { name: "Grains & Pulses", href: "/products/pulses" },
    ]
  },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_DETAILS = {
  phone: "+91-9344295395",
  email: "annaiagrotradings@gmail.com",
  address: "1/263, Keeranur, Nallur, Ramanathapuram, Tamil Nadu, 623704",
  socials: {
    linkedin: "https://linkedin.com/company/annai-agro-tradings",
    instagram: "https://instagram.com/annai_agro", // Update with real link
    youtube: "https://youtube.com/@annai_agro",     // Update with real link
    whatsapp: "919344295395" // Clean number for API
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
    items: ["Koda", "Barnyard", "Little", "Foxtail", "Pearl", "Sorghum", "Ragi"],
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