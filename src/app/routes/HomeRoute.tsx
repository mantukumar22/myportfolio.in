'use client'

import React from 'react'
import SEO from '@/components/layout/SEO'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Freelance from '@/components/sections/Freelance'
import FAQ from '@/components/sections/FAQ'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeRoute() {
  return (
    <SEO
      title="Mantu Kumar"
      description="Portfolio of Mantu Kumar, a certified Full Stack Web and Agentic AI Engineer specialized in high-performance cloud apps, chat interfaces, and real-time operations."
      keywords={['Mantu Kumar', 'Full-stack Engineer', 'Agentic AI Developer', 'Vite React Portfolio', 'Patna Technology Developer']}
    >
      <div className="space-y-24">
        {/* Hero Segment */}
        <Hero />

        {/* Feature-set/Capabilities Summary */}
        <Features />

        {/* Interactive Highlight Section */}
        <section id="highlights" className="relative max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="relative z-10 bg-gradient-to-r from-[#0d162f] to-[#121f42] border-2 border-[#1f2a4f] rounded-[24px] p-8 sm:p-12 shadow-[0_8px_0_0_#020409] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />
            
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Engineering Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Architecting the Smart Automation Era
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I do not just write standard procedural code. I engineer active, context-aware platforms that connect high-performance frontend interfaces with asynchronous cloud workers, AI predictive systems, and real-time operations.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 font-semibold text-[0.875rem] px-5 py-3 rounded-[8px] bg-[#2563eb] text-white hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Explore Code Depot <Code2 className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-medium text-[0.875rem] px-5 py-3 rounded-[8px] bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  Scope a Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Freelance Solutions & Statistics */}
        <Freelance />

        {/* FAQ Area */}
        <FAQ />
      </div>
    </SEO>
  )
}
