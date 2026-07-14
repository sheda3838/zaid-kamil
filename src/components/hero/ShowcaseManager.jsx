import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { TechEcosystem } from "./TechEcosystem"
import { ShowcaseMockups } from "./ShowcaseMockups"
import { InteractiveTerminal } from "./InteractiveTerminal"

export function ShowcaseManager() {
  const [stateIndex, setStateIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStateIndex((prev) => (prev + 1) % 3)
    }, 6000) // Change state every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {stateIndex === 0 && <TechEcosystem key="state-0" />}
        {stateIndex === 1 && <ShowcaseMockups key="state-1" />}
        {stateIndex === 2 && <InteractiveTerminal key="state-2" />}
      </AnimatePresence>
    </div>
  )
}
