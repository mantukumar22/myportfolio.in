import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomeRoute from '@/app/routes/HomeRoute'
import AboutRoute from '@/app/routes/AboutRoute'
import ProjectsRoute from '@/app/routes/ProjectsRoute'
import ProjectDetailRoute from '@/app/routes/ProjectDetailRoute'
import SkillsRoute from '@/app/routes/SkillsRoute'
import ContactRoute from '@/app/routes/ContactRoute'
import '@/app/globals.css'

export default function App() {
  return (
    <Router>
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
          <div className="flex-1 pt-[68px] pb-[80px] md:pb-0">
            <Routes>
              <Route path="/" element={<HomeRoute />} />
              <Route path="/about" element={<AboutRoute />} />
              <Route path="/projects" element={<ProjectsRoute />} />
              <Route path="/projects/:slug" element={<ProjectDetailRoute />} />
              <Route path="/skills" element={<SkillsRoute />} />
              <Route path="/contact" element={<ContactRoute />} />
              <Route path="*" element={<HomeRoute />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

