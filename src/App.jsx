import { ThemeProvider } from "./components/ThemeProvider"
import { Background } from "./components/Background"
import { HeroSection } from "./components/hero/HeroSection"
import { AboutSection } from "./components/about/AboutSection"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Background>
        <main className="relative z-30">
          <HeroSection />
          <AboutSection />
        </main>
      </Background>
    </ThemeProvider>
  )
}

export default App
