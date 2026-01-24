import React from "react";

const ContactHero = () => {
  return (
    <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-[#67944e] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Establish Connection
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Let&apos;s Talk <br />
            <span className="text-[#67944e]">Authentic</span> Trade.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Whether you are looking for a long-term supply partner or need a 
            sample for quality testing, our export desk is ready to provide 
            the technical support you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;