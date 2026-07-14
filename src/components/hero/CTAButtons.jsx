import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-3.5 text-background transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        <span className="relative z-10 font-semibold tracking-wide">
          View Projects
        </span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-3.5 text-foreground transition-colors hover:bg-muted"
      >
        <span className="font-semibold tracking-wide">Download Resume</span>
        <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
      </motion.button>
    </div>
  )
}
