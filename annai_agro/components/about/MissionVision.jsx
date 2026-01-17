import React from 'react';
import { IoRocketOutline, IoEyeOutline } from 'react-icons/io5';

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      desc: "To deliver pure, unadulterated agro-products globally while empowering our local farming community through sustainable trade.",
      icon: <IoRocketOutline aria-hidden="true" />,
      bg: "bg-[#4d703b]", 
      accent: "bg-white/10"
    },
    {
      title: "Our Vision",
      desc: "To become the gold standard in sustainable agricultural exports from India by 2030, fostering global food security.",
      icon: <IoEyeOutline aria-hidden="true" />,
      bg: "bg-slate-900",
      accent: "bg-[#67944e]/20"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 bg-[#f8fafc]" 
      aria-labelledby="mission-vision-heading"
    >
      {/* Hidden heading for SEO structure if not visible on UI */}
      <h2 id="mission-vision-heading" className="sr-only">Our Mission and Vision</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {cards.map((card) => (
          <article 
            key={card.title} 
            className={`${card.bg} p-8 md:p-12 rounded-[2.5rem] text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group`}
          >
            <div className={`${card.accent} w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform group-hover:scale-110`}>
              {card.icon}
            </div>
            
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">
              {card.title}
            </h3>
            
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95">
              {card.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;