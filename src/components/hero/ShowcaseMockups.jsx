import { motion } from "framer-motion"

const badges = [
  { text: "Authentication", top: "10%", left: "5%", delay: 0.1 },
  { text: "Real-Time Chat", top: "30%", right: "5%", delay: 0.2 },
  { text: "Smart Matching", bottom: "20%", left: "10%", delay: 0.3 },
  { text: "Cloudinary", top: "15%", right: "20%", delay: 0.4 },
  { text: "Responsive", bottom: "10%", right: "15%", delay: 0.5 },
]

export function ShowcaseMockups() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex h-full w-full items-center justify-center p-8"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--foreground),0.05)_0%,transparent_60%)]" />

      {/* Desktop Mockup */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-[400px] overflow-hidden rounded-lg border border-border/50 bg-background shadow-2xl"
      >
        <div className="flex h-6 items-center gap-1.5 border-b border-border/50 bg-muted/50 px-3">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="aspect-[16/10] bg-muted/20 p-4 flex flex-col gap-2">
          <div className="h-4 w-1/3 rounded-full bg-muted-foreground/20" />
          <div className="h-20 w-full rounded-md bg-muted-foreground/10" />
          <div className="flex gap-2">
            <div className="h-12 w-1/2 rounded-md bg-muted-foreground/10" />
            <div className="h-12 w-1/2 rounded-md bg-muted-foreground/10" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Mockup */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 right-8 z-20 h-48 w-24 overflow-hidden rounded-[20px] border-[4px] border-foreground/10 bg-background shadow-xl sm:right-16 md:right-12"
      >
        <div className="absolute top-0 left-1/2 h-3 w-10 -translate-x-1/2 rounded-b-lg bg-foreground/10" />
        <div className="mt-6 flex flex-col gap-2 p-2">
          <div className="h-10 w-full rounded-md bg-muted-foreground/10" />
          <div className="h-16 w-full rounded-md bg-muted-foreground/10" />
        </div>
      </motion.div>

      {/* Feature Badges */}
      {badges.map((badge, i) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: badge.delay }}
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom,
          }}
          className="absolute z-30"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay,
            }}
            className="rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md"
          >
            {badge.text}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
