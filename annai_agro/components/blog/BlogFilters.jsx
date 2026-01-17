"use client";
import React from 'react'

const BlogFilters = ({ active, setActive }) => {
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
          <button
            key={cat}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 
              ${active === cat 
                ? "bg-[#67944e] border-[#67944e] text-white shadow-md" 
                : "border-slate-100 text-slate-500 hover:border-[#67944e] hover:text-[#67944e]"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default BlogFilters

