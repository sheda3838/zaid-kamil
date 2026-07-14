import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
]

export function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3500) // Rotate every 3.5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-12 overflow-hidden sm:h-14 md:h-16 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl md:text-4xl"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
