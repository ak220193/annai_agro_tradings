import React from "react";
import Link from "next/link";

const ProductCta = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Product Catalog Call to Action"
    >
      <div className="max-w-7xl mx-auto bg-[#4d703b] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white overflow-hidden relative shadow-2xl">
        {/* Decorative Background Elements - Hidden from Screen Readers */}
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Section */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
            Ready to source the <br className="hidden md:block" />
            best <span className="text-[#a3e635]">Indian Agro-Products?</span>
          </h2>

          <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium opacity-95">
            Partner with Annai Agro for premium bulk exports of organic spices,
            grains, and high-quality agricultural derivatives.
          </p>

          <Link
            href="/products"
            prefetch={true}
            className="inline-block bg-white text-[#4d703b] px-12 py-5 rounded-full font-black text-xl hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.2)] active:scale-95"
            aria-label="View our full product catalog"
          >
            Explore Our Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCta;
