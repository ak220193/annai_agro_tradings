import React from 'react';

const OurWork = () => {
  const steps = [
    { 
      title: "Ethical Sourcing", 
      desc: "Direct procurement from verified farms, ensuring premium quality harvests." 
    },
    { 
      title: "Advanced Processing", 
      desc: "Comprehensive cleaning, grading, and sterilization at our facility." 
    },
    { 
      title: "Quality Assurance", 
      desc: "Multi-level laboratory testing for purity and international safety compliance." 
    },
    { 
      title: "Global Export", 
      desc: "Secure, tamper-proof packaging with efficient global supply chain delivery." 
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="work-heading"
    >
      {/* Semantic Heading for SEO */}
      <h2 
        id="work-heading" 
        className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900"
      >
        How We <span className="text-[#4d703b]">Work</span>
      </h2>

      {/* Process Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <article 
            key={idx} 
            className="relative p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            {/* Index Number: Large but hidden from Screen Readers to avoid noise */}
            <span 
              className="text-6xl font-black text-slate-50 absolute top-4 right-6 leading-none select-none pointer-events-none transition-colors group-hover:text-slate-100" 
              aria-hidden="true"
            >
              0{idx + 1}
            </span>

            {/* Step Content */}
            <div className="relative z-10">
              {/* Visual Accent Line */}
              <div className="w-8 h-1 bg-[#67944e] rounded-full mb-4 group-hover:w-12 transition-all duration-500" />
              
              <h3 className="font-bold text-slate-900 text-xl mb-3 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurWork;