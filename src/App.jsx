import React, { Suspense } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import { Background } from "./components/Background"
import { HeroSection } from "./components/hero/HeroSection"

// Lazy load below-the-fold components
const AboutSection = React.lazy(() => import("./components/about/AboutSection").then(module => ({ default: module.AboutSection })))
const TimelineSection = React.lazy(() => import("./components/timeline/TimelineSection").then(module => ({ default: module.TimelineSection })))
const FeaturedWorkSection = React.lazy(() => import("./components/work/FeaturedWorkSection").then(module => ({ default: module.FeaturedWorkSection })))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Background>
        <main className="relative z-30">
          <HeroSection />
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center opacity-50">Loading...</div>}>
            <AboutSection />
            <TimelineSection />
            <FeaturedWorkSection />
          </Suspense>
        </main>
      </Background>
    </ThemeProvider>
  )
}

export default App
