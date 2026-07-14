import { motion } from "framer-motion"
import { BrainCircuit, Activity, ShieldCheck, Cloud, MonitorSmartphone, TestTube2 } from "lucide-react"

const highlights = [
  { icon: BrainCircuit, label: "AI-Powered Applications" },
  { icon: Activity, label: "Real-Time Systems" },
  { icon: ShieldCheck, label: "Authentication & Security" },
  { icon: Cloud, label: "Cloud Deployment" },
  { icon: MonitorSmartphone, label: "Responsive Design" },
  { icon: TestTube2, label: "Testing & Quality" },
]

export function Highlights() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {highlights.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-border/40 bg-background/30 backdrop-blur-md hover:bg-background/50 hover:border-foreground/20 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default"
          >
            <div className="p-2.5 rounded-xl bg-foreground/5 text-foreground group-hover:bg-foreground/10 transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {item.label}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
