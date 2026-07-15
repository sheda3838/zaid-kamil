import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

export const ProjectGallery = React.memo(function ProjectGallery({ images, className, showControls = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback((e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const handlePrev = useCallback((e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index, e) => {
    e.stopPropagation()
    setCurrentIndex(index)
  }, [])

  if (!images || images.length === 0) return null

  return (
    <div 
      className={cn("relative w-full h-full overflow-hidden group bg-background/20", className)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-contain p-2"
          alt={`Screenshot ${currentIndex + 1}`}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </AnimatePresence>

      {images.length > 1 && showControls && (
        <>
          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-foreground hover:text-background transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-foreground hover:text-background transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goToSlide(i, e)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 shadow-sm",
                  currentIndex === i 
                    ? "bg-foreground w-6" 
                    : "bg-foreground/40 hover:bg-foreground/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
})
