"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Move the data to a separate constant outside the component
const BLOG_POSTS = [
  {
    id: 1,
    title: "Standardizing Purity: How Annai Agro Maintains 99% Curcumin in Turmeric",
    excerpt: "For B2B buyers, purity is a metric. Learn about our steam-sterilization process that preserves integrity...",
    category: "Authentic Spices",
    date: "Jan 17, 2026",
    readTime: "8 min",
    image: "/blog/turmeric-purity.webp",
    keywords: ["turmeric exporter india", "organic turmeric supplier india", "turmeric bulk supplier"],
    targetLink: "/products/turmeric"
  },
  {
    id: 2,
    title: "The Heat Factor: Why Our Dry Red Chilli Meets Global Scoville Standards",
    excerpt: "As a leading indian dry red chilli exporter, we focus on capsaicin retention and moisture control for long-haul shipping.",
    category: "Authentic Spices",
    date: "Jan 18, 2026",
    readTime: "6 min",
    image: "/blog/red-chilli-export.webp",
    keywords: ["dry red chilli exporter india", "dry red chilli bulk supplier", "indian dry red chilli exporter"],
    targetLink: "/products/dry-red-chilli"
  },
  {
    id: 3,
    title: "Seeraga Samba: The Fragrant Alternative to Basmati in the Global Market",
    excerpt: "Decoding why seeraga samba rice supplier india is seeing a 40% rise in demand across European markets.",
    category: "Traditional Rice",
    date: "Jan 19, 2026",
    readTime: "10 min",
    image: "/blog/seeraga-samba-rice.webp",
    keywords: ["seeraga samba rice exporter india", "seeraga samba rice bulk supplier", "traditional rice exporter india"],
    targetLink: "/products/seeraga-samba"
  },
  {
    id: 4,
    title: "Nutritional Supremacy: The Export Potential of Organic Red Rice",
    excerpt: "Explore why health-conscious distributors are choosing us as their primary red rice bulk supplier.",
    category: "Traditional Rice",
    date: "Jan 20, 2026",
    readTime: "7 min",
    image: "/blog/red-rice-benefits.webp",
    keywords: ["red rice exporter india", "red rice supplier india", "organic red rice exporter"],
    targetLink: "/products/red-rice"
  },
  {
    id: 5,
    title: "Millets 2026: Why Koda and Barnyard Millets are the Future of Superfoods",
    excerpt: "As a koda millet exporter india, we analyze the shifting trends toward gluten-free grains in the B2B sector.",
    category: "Product Benefits",
    date: "Jan 21, 2026",
    readTime: "9 min",
    image: "/blog/millet-trends.webp",
    keywords: ["koda millet exporter india", "barnyard millet bulk supplier", "organic koda millet exporter"],
    targetLink: "/products/millets"
  },
  {
    id: 6,
    title: "Quality Assurance: Why APEDA & FSSAI Certifications Matter for Importers",
    excerpt: "Safety is our priority. Discover the rigorous testing our spices undergo to remain a certified exporter.",
    category: "Farm Authenticity",
    date: "Jan 22, 2026",
    readTime: "5 min",
    image: "/blog/certifications.webp",
    keywords: ["apeda registered exporter india", "fssai certified food exporter", "certified indian agro products exporter"],
    targetLink: "/about"
  },
  {
    id: 7,
    title: "Sweetening Naturally: The Industrial Use of Organic Palm Jaggery",
    excerpt: "How palm jaggery bulk supplier partnerships are helping food manufacturers replace refined sugar.",
    category: "Recipes",
    date: "Jan 23, 2026",
    readTime: "8 min",
    image: "/blog/palm-jaggery-usage.webp",
    keywords: ["palm jaggery exporter india", "palm jaggery bulk supplier", "organic palm jaggery exporter"],
    targetLink: "/products/palm-jaggery"
  }
];

const BlogGrid = ({ activeCategory = "All Insights" }) => {
  // Logic to filter posts based on category
  const filteredPosts = activeCategory === "All Insights" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container for SEO - Role List for screen readers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" role="list">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            role="listitem"
            className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <Image 
                src={post.image} 
                alt={post.keywords[0]}
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#67944e] shadow-sm">
                {post.category}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex flex-col grow">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime} read</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#67944e] transition-colors leading-tight">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-900 hover:text-[#67944e] transition-all group-hover:translate-x-1"
                  aria-label={`Read case study about ${post.title}`}
                >
                  Read Technical Case Study <span className="text-[#67944e]">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No insights found in this category.</p>
        </div>
      )}
    </section>
  );
}

export default BlogGrid;