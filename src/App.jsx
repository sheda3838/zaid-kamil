import { ThemeProvider } from "./components/ThemeProvider"
import { Background } from "./components/Background"
import { HeroSection } from "./components/hero/HeroSection"
import { AboutSection } from "./components/about/AboutSection"
import { TimelineSection } from "./components/timeline/TimelineSection"
import { FeaturedWorkSection } from "./components/work/FeaturedWorkSection"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Background>
        <main className="relative z-30">
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <FeaturedWorkSection />
        </main>
      </Background>
    </ThemeProvider>
  )
}

export default App
