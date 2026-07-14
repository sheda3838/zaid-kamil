import { motion } from "framer-motion"
import { AnimatedStats } from "./AnimatedStats"
import { Highlights } from "./Highlights"

export function AboutContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground"
        >
          Who I Am
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          I am a Full Stack Developer with a passion for architecting scalable backend systems and crafting premium, user-centric web applications. I specialize in integrating cutting-edge AI technologies into real-world solutions while maintaining a relentless drive for continuous learning and technical excellence.
        </motion.p>
      </div>

      <AnimatedStats />
      <Highlights />
    </div>
  )
}
