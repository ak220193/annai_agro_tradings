// components/blog/BlogGrid.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/index';

const BlogGrid = ({ activeCategory }) => {
  const filteredPosts = activeCategory === "All Insights" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            itemScope 
            itemType="https://schema.org/BlogPosting"
            className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-[#67944e]/20 transition-all duration-500 overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <Image 
                src={post.image} 
                alt={`${post.title} - ${post.keywords[0]}`}
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                itemProp="image"
              />
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#67944e] shadow-sm">
                {post.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col grow">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                <time itemProp="datePublished" dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime} read</span>
              </div>

              <h3 itemProp="headline" className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#67944e] transition-colors leading-tight">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>

              <p itemProp="description" className="text-slate-500 text-sm leading-relaxed mb-8 grow line-clamp-3">
                {post.excerpt}
              </p>

              <Link 
                href={`/blog/${post.id}`} 
                aria-label={`Read case study: ${post.title}`}
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-900 hover:text-[#67944e] group-hover:translate-x-2 transition-all duration-300"
              >
                Read Case Study <span className="text-[#67944e]">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;