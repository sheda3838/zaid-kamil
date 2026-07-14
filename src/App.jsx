import React, { Suspense } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import { Background } from "./components/Background"
import { Navbar } from "./components/navigation/Navbar"
import { HeroSection } from "./components/hero/HeroSection"

// Lazy load below-the-fold components
const AboutSection = React.lazy(() => import("./components/about/AboutSection").then(module => ({ default: module.AboutSection })))
const TimelineSection = React.lazy(() => import("./components/timeline/TimelineSection").then(module => ({ default: module.TimelineSection })))
const FeaturedWorkSection = React.lazy(() => import("./components/work/FeaturedWorkSection").then(module => ({ default: module.FeaturedWorkSection })))
const TechArsenalSection = React.lazy(() => import("./components/tech/TechArsenalSection").then(module => ({ default: module.TechArsenalSection })))
const AcademicJourneySection = React.lazy(() => import("./components/academic/AcademicJourneySection").then(module => ({ default: module.AcademicJourneySection })))
const ContactSection = React.lazy(() => import("./components/contact/ContactSection").then(module => ({ default: module.ContactSection })))
const Footer = React.lazy(() => import("./components/footer/Footer").then(module => ({ default: module.Footer })))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Background>
        <Navbar />
        <main className="relative z-30">
          <HeroSection />
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center opacity-50">Loading...</div>}>
            <AboutSection />
            <TimelineSection />
            <FeaturedWorkSection />
            <TechArsenalSection />
            <AcademicJourneySection />
            <ContactSection />
            <Footer />
          </Suspense>
        </main>
      </Background>
    </ThemeProvider>
  )
}

export default App
