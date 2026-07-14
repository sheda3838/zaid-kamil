import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCategorizedTech } from './TechData.jsx';

const Tooltip = ({ projects, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-50 min-w-[220px] p-4 rounded-2xl bg-foreground text-background shadow-2xl pointer-events-none"
        >
          <p className="text-xs font-bold text-background/60 mb-3 uppercase tracking-widest">Used in</p>
          <ul className="flex flex-col gap-2">
            {projects.map((proj, i) => (
              <li key={i} className="text-sm font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="truncate">{proj}</span>
              </li>
            ))}
          </ul>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-foreground" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TechChip = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border/40 bg-background hover:bg-muted/50 hover:border-blue-500/40 transition-colors shadow-sm hover:shadow-blue-500/20 cursor-pointer"
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {tech.icon}
      </div>
      <span className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</span>
      <Tooltip projects={tech.projects} isVisible={isHovered} />
    </motion.div>
  );
};

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col p-6 lg:p-8 rounded-[2rem] border border-border/40 bg-background/95 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-500"
    >
      {/* Absolute container for background effects to maintain border-radius without clipping tooltips */}
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none -z-10">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
        
        {/* Decorative Network Lines (Desktop Only) */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700">
          <path d="M 20 80 Q 100 20 200 100 T 400 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 50 150 Q 150 250 250 150 T 450 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="3" className="fill-foreground" />
          <circle cx="250" cy="150" r="3" className="fill-foreground" />
        </svg>
      </div>
      
      <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-8 z-10">{category.name}</h3>
      
      <div className="flex flex-wrap gap-3 z-10">
        {category.items.map(tech => (
          <TechChip key={tech.name} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
};

export function TechArsenalSection() {
  const categorizedTech = getCategorizedTech();

  return (
    <section id="tech-arsenal" className="relative w-full py-32 flex flex-col items-center z-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 mb-24 px-6 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground"
        >
          Tech Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
        >
          "I don't just learn technologies—I use them to build real-world solutions."
        </motion.p>
      </div>

      {/* Grid */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorizedTech.map((category, idx) => (
            <CategoryCard key={category.name} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
