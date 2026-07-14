import { ProfileCard } from "./ProfileCard"
import { AboutContent } from "./AboutContent"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="relative mx-auto flex w-full h-full max-h-[900px] max-w-[1600px] flex-col lg:flex-row gap-8 lg:gap-16 px-6 lg:px-12 items-center justify-center pt-32 pb-12 lg:pt-36 lg:pb-16">
        {/* Left Side: 40% Desktop, Full Mobile */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center">
          <ProfileCard />
        </div>
        
        {/* Right Side: 60% Desktop, Full Mobile */}
        <div className="w-full lg:w-[60%] flex flex-col gap-12 justify-center">
          <AboutContent />
        </div>
      </div>
    </section>
  )
}
