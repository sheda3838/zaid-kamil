import { motion } from "framer-motion"

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
    >
      <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 p-1">
        <motion.div
          animate={{
            y: [0, 16, 0],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-1.5 w-1.5 rounded-full bg-foreground/60"
        />
      </div>
    </motion.div>
  )
}
