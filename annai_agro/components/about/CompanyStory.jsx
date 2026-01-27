import React from 'react';
import Image from 'next/image';

const CompanyStory = () => {
  return (
    <section 
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="story-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Container: Optimized with Next.js Image component */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-4/3 bg-slate-100 group">
          <Image
            src="/hero/about.jpg" 
            alt="Annai Agro Processing Plant Facility in Ramanathapuram"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 50vw"
            priority={false} 
          />
          {/* Subtle overlay for better visual depth */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
        </div>

        {/* Content Container */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 
              id="story-title"
              className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            >
              A Legacy of <span className="text-[#4d703b]">Trust & Quality</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#67944e] rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              Established in <strong className="text-slate-900 font-semibold">Ramanathapuram</strong>, 
              Annai Agro has evolved from a local business into a premier 
              <span className="text-[#4d703b] font-bold"> global B2B agro-exporter</span>. 
              We specialize in the meticulous sourcing and processing of premium 
              agricultural products.
            </p>
            
            <p className="text-slate-700 text-lg leading-relaxed">
              Our state-of-the-art facility ensures every batch adheres to stringent 
              <strong className="text-slate-900 font-semibold"> international safety norms</strong>, 
              guaranteeing purity from the farm directly to the global marketplace.
            </p>
          </div>

          {/* Quote Block with improved accessibility and contrast */}
          <blockquote className="p-6 bg-slate-50 rounded-2xl border-l-8 border-[#67944e] shadow-sm">
            <p className="text-base md:text-lg font-semibold text-slate-800 italic leading-snug">
              &quot;Bridging the gap between Indian farmers and the global marketplace with integrity.&quot;
            </p>
            <cite className="not-italic text-sm text-[#4d703b] font-bold mt-2 block uppercase tracking-wider">
              — Our Founding Principle
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;