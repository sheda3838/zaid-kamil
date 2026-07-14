import { motion } from "framer-motion"
import demoVideo from "../../assets/demo.mp4"

export function ShowcaseMockups({ onVideoEnd }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex h-full w-full items-center justify-center p-4"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--foreground),0.05)_0%,transparent_60%)]" />

      {/* Video Container */}
      <motion.div
        className="relative z-10 w-full h-full overflow-hidden rounded-xl border border-border/50 bg-black/20 shadow-2xl flex items-center justify-center"
      >
        <video 
          src={demoVideo}
          autoPlay 
          muted 
          playsInline
          onEnded={onVideoEnd}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
