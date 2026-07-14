import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { useTheme } from "./ThemeProvider"
import Antigravity from "./background/Antigravity"

const ResponsiveAntigravity = () => {
  const [count, setCount] = useState(200)
  const { theme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setCount(70) // Mobile
      } else if (width < 1024) {
        setCount(120) // Tablet
      } else {
        setCount(200) // Desktop
      }
    }
    
    handleResize()
    
    // Use debounce for performance
    let timeoutId
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 100)
    }
    
    window.addEventListener("resize", debouncedResize)
    return () => {
      window.removeEventListener("resize", debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Resolve active theme for particle color
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  const particleColor = isDark ? "#ffffff" : "#475569" // Crisp white for dark mode, subtle slate for light mode

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      <Antigravity 
        count={count}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.25}
        waveAmplitude={0.8}
        particleSize={1.2}
        lerpSpeed={0.05}
        autoAnimate={true}
        particleVariance={0.6}
        rotationSpeed={0.03}
        depthFactor={1.3}
        pulseSpeed={2.5}
        fieldStrength={12}
        color={particleColor}
      />
    </div>
  )
}

const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-20 mix-blend-overlay opacity-30 dark:opacity-20"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
)

const GlowCircles = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[120px]"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[120px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </div>
)

export function Background({ children, className }) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-background",
        className
      )}
    >
      {/* Layer 1: Base Gradient is handled by Tailwind bg-background and subtle overall gradients if needed */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      {/* Layer 2: Antigravity Particles */}
      <ResponsiveAntigravity />

      {/* Layer 3: Glow Circles */}
      <GlowCircles />

      {/* Layer 4: Noise Texture */}
      <NoiseOverlay />

      {/* Layer 5: Content */}
      <div className="relative z-30 h-full w-full">{children}</div>
    </div>
  )
}
