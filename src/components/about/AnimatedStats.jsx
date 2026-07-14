import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Projects Built", value: 18, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "AI Projects", value: 2, suffix: "" },
  { label: "Years Learning", value: 3, suffix: "+" },
]

function Counter({ from, to, duration, inView }) {
  const [count, setCount] = useState(from)
  
  useEffect(() => {
    if (!inView) return
    
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(easeProgress * (to - from) + from))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [inView, from, to, duration])

  return <span>{count}</span>
}

export function AnimatedStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center justify-center p-4 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-sm shadow-lg hover:border-foreground/20 transition-all duration-300"
        >
          <div className="text-2xl lg:text-3xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            <Counter from={0} to={stat.value} duration={2} inView={isInView} />
            {stat.suffix}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-medium text-center">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
