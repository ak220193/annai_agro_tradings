"use client";
import React from 'react';
import Link from 'next/link';

const BlogFilters = ({ activeCategory }) => {
  const categories = [
    "All Insights",
    "Product Benefits",
    "Traditional Rice",
    "Authentic Spices",
    "Recipes",
    "Daily Health",
    "Farm Authenticity"
  ];

  return (
    <nav className="sticky top-20 z-30 bg-white/80 backdrop-blur-md py-6 border-b border-slate-100" aria-label="Blog categories">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 min-w-max">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === "All Insights" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 
                ${activeCategory === cat 
                  ? "bg-[#67944e] border-[#67944e] text-white shadow-md" 
                  : "border-slate-100 text-slate-500 hover:border-[#67944e] hover:text-[#67944e]"}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default BlogFilters;