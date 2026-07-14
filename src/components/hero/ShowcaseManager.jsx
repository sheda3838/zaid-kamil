import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { ShowcaseMockups } from "./ShowcaseMockups"
import { InteractiveTerminal } from "./InteractiveTerminal"

export function ShowcaseManager() {
  const [stateIndex, setStateIndex] = useState(0)

  const handleNext = () => {
    setStateIndex((prev) => (prev + 1) % 2)
  }

  useEffect(() => {
    const durations = [6000, 20000]; // 6s for terminal, generous 20s fallback for video

    const timeout = setTimeout(() => {
      handleNext()
    }, durations[stateIndex]);

    return () => clearTimeout(timeout);
  }, [stateIndex])

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {stateIndex === 0 && <InteractiveTerminal key="state-0" />}
        {stateIndex === 1 && <ShowcaseMockups key="state-1" onVideoEnd={handleNext} />}
      </AnimatePresence>
    </div>
  )
}
