import React from "react";

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          The <span className="text-[#67944e]">Knowledge</span> Hub
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
          Bridging the gap between traditional Indian agriculture and global B2B
          standards. Explore our research on nutrition, export purity, and
          authentic usage.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
