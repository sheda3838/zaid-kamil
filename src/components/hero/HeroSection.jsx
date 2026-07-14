import { ThemeToggle } from "../ThemeToggle"
import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"
import { ScrollIndicator } from "./ScrollIndicator"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col">
      {/* Placeholder space for a future NavBar */}
      <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-end px-8 z-50">
        <ThemeToggle />
      </div>
      
      <div className="relative mx-auto flex flex-1 w-full max-w-[1600px] flex-col lg:flex-row pt-24 pb-20 px-6 lg:px-12">
        <HeroLeft />
        <HeroRight />
      </div>

      <ScrollIndicator />
    </section>
  )
}
