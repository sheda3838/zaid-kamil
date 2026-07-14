import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const lines = [
  { cmd: "whoami", out: "Zaid Kamil" },
  { cmd: "specialization", out: "Full Stack Development" },
  { cmd: "current_focus", out: "Building AI-powered web applications" },
  { cmd: "flagship_project", out: "Roomy" },
  { cmd: "status", out: "Open for Internship" },
]

export function InteractiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 800) // Show next command every 800ms

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
      transition={{ duration: 0.6 }}
      className="flex h-full w-full flex-col justify-center p-8"
    >
      <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border/50 bg-black/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-medium text-white/50">guest@zaid-kamil:~</span>
        </div>
        <div className="flex flex-col gap-3 p-5 font-mono text-sm">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-1"
            >
              <div className="flex items-center text-emerald-400">
                <span className="mr-2 text-emerald-500/70">{">"}</span>
                {line.cmd}
              </div>
              <div className="text-gray-300 pl-4">{line.out}</div>
            </motion.div>
          ))}
          
          <div className="flex items-center text-emerald-400">
            <span className="mr-2 text-emerald-500/70">{">"}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block h-4 w-2 bg-emerald-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
