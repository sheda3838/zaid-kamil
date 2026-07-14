import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { timelineData } from "./TimelineData"
import { TimelineNode } from "./TimelineNode"

export function TimelineSection() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  })

  // Smooth out the raw scroll progress to prevent layout thrashing on fast scrolls
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="relative w-full py-32 flex flex-col items-center overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-4 mb-24 px-6 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground"
        >
          My Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground font-medium italic max-w-xl"
        >
          "From curiosity to building real-world software."
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-0 md:px-12 flex flex-col">
        {/* The Central Animated Line */}
        <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/30 -translate-x-1/2 z-0" />
        
        {/* The Glowing Progress Line */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2 z-0"
        />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-400 -translate-x-1/2 z-0"
        />

        {/* Timeline Nodes */}
        <div className="relative z-10 flex flex-col w-full pb-32">
          {timelineData.map((data, index) => (
            <TimelineNode 
              key={index} 
              data={data} 
              index={index} 
              total={timelineData.length} 
            />
          ))}
        </div>

        {/* Ending Text */}
        <div className="relative z-10 flex flex-col items-center text-center mt-8 px-6 pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            The best chapters are still being written...
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mt-4 italic"
          >
            Perhaps your company will be the next milestone in this journey.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
