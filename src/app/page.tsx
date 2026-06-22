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
    <main className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#2563eb] selection:text-white antialiased overflow-x-hidden">
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
    </main>
  )
}
