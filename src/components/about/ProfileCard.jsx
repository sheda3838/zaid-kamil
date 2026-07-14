import { motion } from "framer-motion"
import profileImg from "../../assets/profile/Me.png"

export function ProfileCard() {
  return (
    <div className="relative w-full max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] aspect-square">
      {/* Rotated background glass rectangle */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 rounded-[2.5rem] border border-border/30 bg-foreground/5 backdrop-blur-sm z-0"
      />
      
      {/* Main Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
        style={{ perspective: 1000 }}
        className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-border/50 bg-background/30 backdrop-blur-md shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 z-0" />
        
        <div className="relative z-10 w-full h-full p-2">
          <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-background">
            <img 
              src={profileImg} 
              alt="Zaid Kamil" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Subtle overlay glow */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-background/50 to-transparent pointer-events-none z-20" />
      </motion.div>
    </div>
  )
}
