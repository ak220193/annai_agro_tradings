import React from 'react';

const OurWork = () => {
const steps = [
  { 
    title: "Identification of Sources", 
    desc: "Strategic mapping of high-yield agricultural zones and direct procurement from verified organic-certified farms." 
  },
  { 
    title: "Understanding POP Followed", 
    desc: "Verifying the Package of Practices (POP) to ensure zero-pesticide usage and adherence to traditional farming protocols." 
  },
  { 
    title: "Visiting Farmers & Need Analysis", 
    desc: "On-ground field inspections and technical gap analysis to align crop output with specific international market demands." 
  },
  { 
    title: "Screening Test", 
    desc: "Preliminary laboratory screening for moisture content, physical purity, and absence of chemical residues." 
  },
  { 
    title: "Order Creation from Customers", 
    desc: "Formalizing technical specifications (COA requirements) and quantity timelines through our digital B2B portal." 
  },
  { 
    title: "Arranging Lots on Requirement Basis", 
    desc: "Systematic batching and grading of produce to match specific client standards for size, color, and aroma profiles." 
  },
  { 
    title: "Third Party Sampling & Order Scaling", 
    desc: "Collaborating with independent agencies (like SGS or Geo-Chem) for transparent quality validation and bulk consolidation." 
  },
  { 
    title: "Export", 
    desc: "Executing tamper-proof vacuum packaging and managing end-to-end logistics for secure global supply chain delivery." 
  },
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