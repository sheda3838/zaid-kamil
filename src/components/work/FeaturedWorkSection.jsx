import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { featuredProjects, clientWork, engineeringPlayground } from "./ProjectsData"
import { ProjectCard } from "./ProjectCard"
import { ExpandedProject } from "./ExpandedProject"

export function FeaturedWorkSection() {
  const [activeProject, setActiveProject] = useState(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [activeProject])

  return (
    <section id="featured-work" className="relative w-full py-32 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 mb-24 px-6 text-center z-10 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground"
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Every project represents a different challenge from AI-powered applications and full-stack systems to real-world client websites and engineering experiments.
        </motion.p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-32 z-10">
        
        {/* CATEGORY 1: FEATURED */}
        <div className="flex flex-col gap-12">
          {/* Roomy - Hero Project */}
          {featuredProjects.filter(p => p.type === 'hero').map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setActiveProject(project)} 
            />
          ))}

          {/* Remaining Featured Projects - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.filter(p => p.type === 'featured').map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setActiveProject(project)} 
              />
            ))}
          </div>
        </div>

        {/* CATEGORY 2: CLIENT WORK */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black">Client Work</h3>
            <p className="text-muted-foreground text-lg">Production-ready websites delivered for real clients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientWork.map(project => (
              <ProjectCard 
                key={project.id} 
                project={{...project, type: 'client'}} 
                onClick={() => setActiveProject(project)} 
              />
            ))}
          </div>
        </div>

        {/* CATEGORY 3: ENGINEERING PLAYGROUND */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black">Engineering Playground</h3>
            <p className="text-muted-foreground text-lg">Smaller projects where I explored different technologies, architectures, and ideas while continuously learning.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringPlayground.map(project => (
              <ProjectCard 
                key={project.id} 
                project={{...project, type: 'experiment'}} 
                onClick={() => setActiveProject(project)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <ExpandedProject 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
