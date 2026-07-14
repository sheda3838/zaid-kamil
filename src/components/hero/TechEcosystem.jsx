import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const allTechs = [
  { name: "JavaScript", icon: "JavaScript-logo.png" },
  { name: "TypeScript", icon: "TypeScript-logo.png" },
  { name: "Python", icon: "python.png" },
  { name: "PHP", icon: "php.png" },
  { name: "C#", icon: "csharp.png" },
  { name: "Next.js", icon: "nextjs.png" },
  { name: "React", icon: "react.png" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "Express.js", icon: "express.png" },
  { name: "Laravel", icon: "laravel.png" },
  { name: "Tailwind CSS", icon: "tailwind.png" },
  { name: "Livewire", icon: "livewire.png" },
  { name: "Auth.js", icon: "authjs.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "MySQL", icon: "mysql.png" },
  { name: "SQL Server", icon: "sql-server.png" },
  { name: "TiDB Cloud", icon: "tidb-cloud.png" },
  { name: "Git", icon: "git.png" },
  { name: "GitHub", icon: "github.png" },
  { name: "Postman", icon: "postman.png" },
  { name: "Vercel", icon: "vercel.png" },
  { name: "Railway", icon: "railway.png" },
  { name: "Cloudinary", icon: "cloudinary.png" },
  { name: "Pusher", icon: "pusher.png" },
  { name: "Ollama", icon: "ollama.png" },
  { name: "REST APIs", icon: "rest-api.png" },
  { name: "Agile", icon: "agile.png" }
]

export function TechEcosystem() {
  const [techStack, setTechStack] = useState([])

  useEffect(() => {
    // Dynamically load images via Vite glob import
    const icons = import.meta.glob('../../assets/icons/*.png', { eager: true, import: 'default' })
    
    const getIconUrl = (filename) => {
      if (!filename) return null;
      const path = `../../assets/icons/${filename}`;
      return icons[path] || null;
    }

    const generated = allTechs.map((tech, i) => {
      const cols = 5;
      const row = Math.floor(i / cols)
      let col = i % cols
      
      // Center the last row if it's not full to prevent empty spaces in the corners
      const totalRows = Math.ceil(allTechs.length / cols)
      const isLastRow = row === totalRows - 1
      const itemsInLastRow = allTechs.length % cols || cols
      
      if (isLastRow && itemsInLastRow < cols) {
        const offset = (cols - itemsInLastRow) / 2
        col += offset
      }
      
      // Constrain positions strictly between 15% and 85% to avoid bleeding outside the container bounds
      const top = 15 + (row * (70 / (totalRows - 1 || 1))) + (Math.random() * 8 - 4)
      const left = 15 + (col * (70 / (cols - 1))) + (Math.random() * 8 - 4)
      
      const isBack = Math.random() > 0.5
      const zIndex = isBack ? 0 : 10
      
      // Large icons at front (0.7 to 1.0), small icons at back (0.4 to 0.6)
      const scale = isBack ? 0.4 + Math.random() * 0.2 : 0.7 + Math.random() * 0.3
      const opacity = isBack ? 0.3 + Math.random() * 0.3 : 0.7 + Math.random() * 0.3
      
      return {
        id: tech.name,
        name: tech.name,
        iconUrl: getIconUrl(tech.icon),
        top: `${top}%`,
        left: `${left}%`,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 2,
        yOffset: (Math.random() - 0.5) * 40,
        xOffset: (Math.random() - 0.5) * 40,
        zIndex,
        scale,
        opacity,
      }
    })
    setTechStack(generated)
  }, [])

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--foreground),0.1)_0%,transparent_70%)]" />
      
      {techStack.map((tech) => (
        <motion.div
          key={tech.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: tech.opacity,
            scale: tech.scale,
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.4 } }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: tech.left, top: tech.top, zIndex: tech.zIndex }}
          title={tech.name} // Tooltip so users can still see the name on hover
        >
          <motion.div
            animate={{
              y: [0, tech.yOffset, 0],
              x: [0, tech.xOffset, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            }}
            className="flex items-center justify-center rounded-2xl border border-border/40 bg-background/40 p-3 shadow-xl backdrop-blur-md"
          >
            {tech.iconUrl && (
              <img 
                src={tech.iconUrl} 
                alt={tech.name} 
                className="w-8 h-8 object-contain drop-shadow-md" 
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
