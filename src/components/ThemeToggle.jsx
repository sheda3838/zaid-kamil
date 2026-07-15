import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-muted-foreground backdrop-blur-md transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : 90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
    </button>
  )
}
