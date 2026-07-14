import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "../../lib/utils"

export function TimelineNode({ data, index, total }) {
  const isEven = index % 2 === 0
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"]
  })

  // Fade and scale effect for the node as it enters the viewport
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const Icon = data.icon

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full my-8 md:my-16">
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
            style={{ opacity, scale }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/50 bg-background/80 backdrop-blur-md z-10"
          >
            <Icon className="w-4 h-4 text-foreground" />
            <motion.div 
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10"
            />
          </motion.div>
        </div>

        {/* Card Half */}
        <div className={cn(
          "w-1/2 flex",
          isEven ? "justify-end pr-12" : "justify-start pl-12"
        )}>
          <TimelineCard data={data} align={isEven ? "right" : "left"} />
        </div>
      </div>

      {/* Mobile Layout - Stacked with line on the left */}
      <div className="flex md:hidden w-full relative pl-12 pr-4">
        {/* Left Node */}
        <div className="absolute left-[22px] top-8 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 shrink-0">
          <motion.div 
            style={{ opacity, scale }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/50 bg-background/80 backdrop-blur-md z-10"
          >
            <Icon className="w-4 h-4 text-foreground" />
            <motion.div 
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-md -z-10"
            />
          </motion.div>
        </div>

        {/* Card */}
        <div className="w-full">
          <TimelineCard data={data} align="left" />
        </div>
      </div>
    </div>
  )
}

function TimelineCard({ data, align }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === "right" ? -50 : 50, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "relative flex flex-col gap-4 p-6 sm:p-8 rounded-[2rem] border border-border/40 bg-background/30 backdrop-blur-md shadow-lg transition-colors hover:border-blue-500/30 hover:bg-background/40 hover:shadow-blue-500/10",
        align === "right" ? "items-end text-right" : "items-start text-left",
        "w-full max-w-[500px]"
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-blue-500 font-bold tracking-wider text-sm sm:text-base">
          {data.year}
        </span>
        <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {data.stage}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
        {data.title}
      </h3>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {data.description}
      </p>

      {data.tags && data.tags.length > 0 && (
        <div className={cn(
          "flex flex-wrap gap-2 mt-2",
          align === "right" ? "justify-end" : "justify-start"
        )}>
          {data.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full border border-border/50 bg-foreground/5 text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
