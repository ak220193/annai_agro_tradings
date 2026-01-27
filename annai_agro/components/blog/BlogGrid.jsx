"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/index';

const BlogGrid = ({ activeCategory }) => {
  // Logic to handle "All Insights" vs specific categories
  const filteredPosts = activeCategory === "All Insights" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  if (filteredPosts.length === 0) {
    return (
      <div className="py-20 text-center text-slate-400 font-medium">
        No technical insights found in this category.
      </div>
    );
  }

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            itemScope 
            itemType="https://schema.org/BlogPosting"
            className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-[#67944e]/20 transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
              <Image 
                src={post.image} 
                // Enhanced Alt text for SEO using the new array structure
                alt={`${post.title} | Technical Analysis`}
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                itemProp="image"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#67944e] shadow-sm">
                {post.category}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex flex-col grow">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                <time itemProp="datePublished" dateTime={post.date}>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>

              <h3 itemProp="headline" className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#67944e] transition-colors leading-tight line-clamp-2">
                {/* CHANGED: Link now uses post.slug for B2B SEO best practices */}
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p itemProp="description" className="text-slate-500 text-sm leading-relaxed mb-8 grow line-clamp-3 font-medium">
                {post.excerpt}
              </p>

              <div className="pt-6 border-t border-slate-50">
                <Link 
                  href={`/blog/${post.slug}`} 
                  aria-label={`Access technical whitepaper: ${post.title}`}
                  className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] text-slate-900 hover:text-[#67944e] transition-all duration-300"
                >
                  Access Insight <span className="text-[#67944e] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;