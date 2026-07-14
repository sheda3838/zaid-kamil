import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { academicData } from './AcademicData';
import { cn } from '../../lib/utils';

const Badge = ({ text, type }) => {
  const styles = {
    default: "bg-muted/50 text-muted-foreground border-border/50",
    gold: "bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    premium: "bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    highlight: "bg-purple-500/10 text-purple-500 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
    subtle: "bg-background/80 text-foreground border-border shadow-sm",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
  };

  return (
    <span className={cn("px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase rounded-full border backdrop-blur-md", styles[type] || styles.default)}>
      {text}
    </span>
  );
};

const AcademicNode = ({ data, index }) => {
  const isEven = index % 2 !== 0; 
  const Icon = data.icon;

  const nodeAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, delay: 0.1 }
  };

  return (
    <div className="relative flex items-center justify-center w-full my-6 md:my-12">
      {/* Desktop Layout - Alternating */}
      <div className={cn(
        "hidden md:flex w-full items-center",
        isEven ? "flex-row-reverse" : "flex-row"
      )}>
        {/* Empty Half */}
        <div className="w-1/2" />

        {/* Center Node */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
          <motion.div 
            initial={{ opacity: 0.3, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-full border-[2px] border-blue-500/30 bg-background/95 z-10 shadow-lg"
          >
            <Icon className="w-5 h-5 text-foreground" />
            {(data.highlight || data.id === 6) && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10"
              />
            )}
          </motion.div>
        </div>

        {/* Content Half */}
        <div className={cn(
          "w-1/2 flex",
          isEven ? "justify-end pr-12 lg:pr-24" : "justify-start pl-12 lg:pl-24"
        )}>
          <motion.div
            {...nodeAnimation}
            whileHover={{ y: -5 }}
            className={cn(
              "group relative w-full max-w-lg p-6 lg:p-8 rounded-[2rem] border bg-background/95 shadow-xl transition-all duration-300",
              data.highlight ? "border-blue-500/30 shadow-blue-500/5 hover:shadow-blue-500/15" : "border-border/40 hover:border-blue-500/20 hover:shadow-blue-500/10"
            )}
          >
            {data.highlight && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500 -z-10" />
            )}
            
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-black text-foreground mb-1">{data.title}</h3>
                <p className="text-sm font-bold text-blue-500/80">{data.institution}</p>
              </div>

              {data.programme && <p className="text-[15px] font-semibold text-foreground/90">{data.programme}</p>}
              
              {(data.achievement || data.status) && (
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {data.achievement || data.status}
                </p>
              )}

              {data.expectedGraduation && (
                <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">
                  Expected Graduation: {data.expectedGraduation}
                </p>
              )}

              {data.badges && data.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.badges.map((badge, i) => (
                    <Badge key={i} text={badge.text} type={badge.type} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden w-full relative">
        {/* Static Mobile Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-border/30 -translate-x-1/2" />
        
        <div className="relative z-10 flex items-start justify-center w-12 h-12 shrink-0 ml-0 mt-6">
          <motion.div 
            initial={{ opacity: 0.3, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-blue-500/30 bg-background/95 z-10 shadow-md"
          >
            <Icon className="w-4 h-4 text-foreground" />
          </motion.div>
        </div>

        <motion.div
          {...nodeAnimation}
          className="ml-6 flex-1 p-6 rounded-[1.5rem] border border-border/40 bg-background/95 shadow-lg mt-2 relative overflow-hidden"
        >
          {data.highlight && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -z-10" />
          )}

          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-xl font-black text-foreground">{data.title}</h3>
              <p className="text-xs font-bold text-blue-500/80">{data.institution}</p>
            </div>
            
            {data.programme && <p className="text-sm font-semibold text-foreground/90">{data.programme}</p>}
            
            {(data.achievement || data.status) && (
              <p className="text-sm text-muted-foreground font-medium">
                {data.achievement || data.status}
              </p>
            )}

            {data.expectedGraduation && (
              <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">
                Expected: {data.expectedGraduation}
              </p>
            )}

            {data.badges && data.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {data.badges.map((badge, i) => (
                  <Badge key={i} text={badge.text} type={badge.type} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export function AcademicJourneySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="academic-journey" ref={containerRef} className="relative w-full py-32 flex flex-col items-center overflow-hidden z-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 mb-24 px-6 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground"
        >
          Academic Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
        >
          "Building a strong foundation through continuous learning and academic excellence."
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col">
        {/* Animated Vertical Line (Desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/30 -translate-x-1/2 z-0 hidden md:block" />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2 z-0 hidden md:block will-change-transform"
        />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-400 -translate-x-1/2 z-0 hidden md:block will-change-transform"
        />
        
        {/* Timeline Nodes */}
        <div className="relative z-10 flex flex-col w-full pb-16">
          {academicData.map((data, index) => (
            <AcademicNode key={data.id} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
