import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { cn } from "../../lib/utils"
import { ProjectGallery } from "./ProjectGallery"

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export const ProjectCard = React.memo(function ProjectCard({ project, onClick }) {
  if (project.type === "hero") {
    return <HeroProjectCard project={project} onClick={onClick} />
  }

  if (project.type === "featured") {
    return <FeaturedProjectCard project={project} onClick={onClick} />
  }

  return <CompactProjectCard project={project} onClick={onClick} />
})

function HeroProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="group relative flex flex-col lg:flex-row w-full overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/95 shadow-xl hover:border-blue-500/30 hover:shadow-blue-500/10 transition-colors transition-shadow duration-300 cursor-pointer"
    >
      {/* Left Gallery */}
      <div className="relative w-full lg:w-[55%] h-[300px] lg:h-[500px] flex items-center justify-center bg-muted/10 p-6 lg:p-12 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <ProjectGallery images={project.images} className="rounded-2xl border border-border/50 shadow-xl overflow-hidden bg-background w-full h-full" />
          
          {project.mobileImage && (
            <div className="absolute -bottom-2 -right-2 lg:-bottom-6 lg:-right-6 w-[28%] max-w-[150px] aspect-[9/19] rounded-[1.5rem] border-[4px] lg:border-[6px] border-zinc-800 bg-black shadow-2xl overflow-hidden z-20 hidden sm:block group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
              <img src={project.mobileImage} className="w-full h-full object-cover" alt="Mobile View" loading="lazy" decoding="async" />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none z-30">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full font-semibold">
            View Details <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full lg:w-[45%] flex flex-col justify-center p-8 lg:p-12 gap-6">
        <div className="flex flex-wrap gap-2">
          {project.badges?.map(badge => (
            <span key={badge} className="px-3 py-1 text-xs font-bold tracking-widest text-blue-500 bg-blue-500/10 rounded-full border border-blue-500/20">
              {badge}
            </span>
          ))}
        </div>

        <h3 className="text-3xl lg:text-5xl font-black text-foreground">
          {project.title}
        </h3>

        <p className="text-base lg:text-lg text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, 5).map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full border border-border/50 bg-foreground/5 text-foreground">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full border border-border/50 bg-foreground/5 text-muted-foreground">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function FeaturedProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col w-full h-full overflow-hidden rounded-[2rem] border border-border/40 bg-background/95 shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-colors transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative w-full h-[240px] overflow-hidden">
        <ProjectGallery images={project.images} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none z-30">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full font-semibold">
            View Details <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {project.badges?.map(badge => (
            <span key={badge} className="px-3 py-1 text-[10px] font-bold tracking-widest text-purple-500 bg-purple-500/10 rounded-full border border-purple-500/20">
              {badge}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

function CompactProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="group relative flex flex-col w-full overflow-hidden rounded-[1.5rem] border border-border/40 bg-background/95 shadow-md hover:border-blue-500/30 hover:shadow-blue-500/10 transition-colors transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full font-semibold">
            View Details <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-foreground group-hover:-translate-y-1 transition-transform duration-300">
            {project.title}
          </h3>
          {project.badges && (
            <span className="px-2 py-0.5 text-[9px] font-bold tracking-widest text-muted-foreground border border-border/50 rounded-full">
              {project.badges[0]}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}
