import { ThemeToggle } from "../ThemeToggle"
import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"
import { ScrollIndicator } from "./ScrollIndicator"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex flex-col">
      
      <div className="relative mx-auto flex flex-1 w-full max-w-[1600px] flex-col lg:flex-row pt-24 pb-20 px-6 lg:px-12">
        <HeroLeft />
        <HeroRight />
      </div>

      <ScrollIndicator />
    </section>
  )
}
