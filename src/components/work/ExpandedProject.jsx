import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, ExternalLink, Code2, ShieldAlert, Lightbulb } from "lucide-react"
import { ProjectGallery } from "./ProjectGallery"

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export const ExpandedProject = React.memo(function ExpandedProject({ project, onClose }) {
  const [showContent, setShowContent] = useState(false)
  
  useEffect(() => {
    // Wait until the layout expansion animation finishes before rendering the heavy text body
    const timer = setTimeout(() => setShowContent(true), 350)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = (e) => {
    if (e) e.stopPropagation()
    // Hide heavy content instantly to make the exit layout animation buttery smooth
    setShowContent(false)
    setTimeout(() => {
      onClose()
    }, 10)
  }

  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/95"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col rounded-[2.5rem] border border-border/50 bg-background shadow-2xl shadow-blue-500/10 custom-scrollbar will-change-scroll"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-foreground hover:text-background transition-all shadow-md"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row w-full min-h-[400px] shrink-0">
          {/* Gallery */}
          <div className="relative flex items-center justify-center w-full lg:w-[60%] h-[300px] lg:h-auto min-h-[400px] bg-muted/10 p-6 lg:p-16 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <ProjectGallery images={project.images} showControls={true} className="rounded-2xl border border-border/50 shadow-2xl overflow-hidden bg-background w-full h-full" />
              
              {project.mobileImage && (
                <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 w-[30%] max-w-[180px] aspect-[9/19] rounded-[2rem] border-[6px] border-zinc-800 bg-black shadow-2xl overflow-hidden z-20 hidden sm:block">
                  <img src={project.mobileImage} className="w-full h-full object-cover" alt="Mobile View" loading="lazy" decoding="async" />
                </div>
              )}
            </div>
          </div>

          {/* Quick Details */}
          <div className="flex flex-col p-8 lg:p-12 w-full lg:w-[40%] gap-6 bg-muted/30">
            <div className="flex flex-wrap gap-2">
              {project.badges?.map(badge => (
                <span key={badge} className="px-3 py-1 text-xs font-bold tracking-widest text-blue-500 bg-blue-500/10 rounded-full border border-blue-500/20">
                  {badge}
                </span>
              ))}
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              {project.title}
            </h2>

            <p className="text-base text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6 relative z-20">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 hover:bg-muted transition-colors font-semibold"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Body Section */}
        {showContent && (project.features || project.challenges || project.learned || project.technologies) && (
          <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-12 border-t border-border/50 shrink-0">
            
            {/* Main Info */}
            <div className="flex flex-col w-full lg:w-[65%] gap-10">
              {project.features && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-500" /> Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl border border-border/40 bg-background/50">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-orange-500" /> Challenges Faced
                  </h3>
                  <p className="text-muted-foreground leading-relaxed p-6 rounded-2xl border border-border/40 bg-background/50">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.learned && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" /> What I Learned
                  </h3>
                  <p className="text-muted-foreground leading-relaxed p-6 rounded-2xl border border-border/40 bg-background/50">
                    {project.learned}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="flex flex-col w-full lg:w-[35%] gap-8">
              {project.technologies && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 text-sm font-medium rounded-xl border border-border/50 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        )}
      </motion.div>
    </motion.div>
  )
})
