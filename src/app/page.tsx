import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Internship from '@/components/sections/Internship'
import Freelance from '@/components/sections/Freelance'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-[#070b19] min-h-screen text-slate-100 font-sans selection:bg-[#2563eb] selection:text-white antialiased overflow-x-hidden relative">
      {/* Dark sky atmospheric decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b19] via-[#091026] to-[#0c142e] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_65%)] pointer-events-none" />
      
      {/* Subtle Sky Stars Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none select-none mix-blend-screen animate-pulse-subtle"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col">
          <Hero />
          <About />
          <Features />
          <Skills />
          <Projects />
          <Experience />
          <Internship />
          <Freelance />
          <Education />
          <Certifications />
          <FAQ />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
