import { motion } from "framer-motion"
import { ShowcaseManager } from "./ShowcaseManager"

export function HeroRight() {
  return (
    <div className="flex h-full w-full flex-col justify-center pt-8 lg:pt-0 lg:w-1/2 px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1], // Custom spring-like Apple ease
          delay: 0.2,
        }}
        className="relative mx-auto flex w-full max-w-[750px] overflow-hidden rounded-[2rem] xl:rounded-[3rem] h-[55vh] min-h-[400px] max-h-[600px]"
      >
        {/* Dynamic Island style premium glow and border */}
        <div className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-br from-white/20 to-white/0 dark:from-white/10 dark:to-white/0 opacity-50" />
        <div className="absolute inset-[1px] z-0 rounded-[calc(inherit-1px)] bg-background/40 backdrop-blur-2xl" />
        <div className="absolute inset-0 z-0 rounded-[inherit] border border-white/20 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]" />
        
        {/* Subtle animated inner glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-0 rounded-[inherit] shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] pointer-events-none"
        />

        {/* Content Container */}
        <div className="relative z-10 flex h-full w-full flex-col">
          <ShowcaseManager />
        </div>
      </motion.div>
    </div>
  )
}
