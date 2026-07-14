import { ThemeProvider } from "./components/ThemeProvider"
import { HeroSection } from "./components/hero/HeroSection"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <HeroSection />
    </ThemeProvider>
  )
}

export default App
