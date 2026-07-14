import { motion } from "framer-motion"
import { RoleRotator } from "./RoleRotator"
import { CTAButtons } from "./CTAButtons"
import { SocialLinks } from "./SocialLinks"

export function HeroLeft() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-4 lg:w-1/2 xl:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl">
          ZAID KAMIL
        </h1>

        <div className="mt-1">
          <RoleRotator />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Building intelligent, production-ready web applications with modern
          technologies, scalable architectures, and user-focused experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <CTAButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-sm font-medium tracking-wide text-foreground/80 uppercase">
            Available for Internship
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
