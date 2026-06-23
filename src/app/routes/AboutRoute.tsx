'use client'

import React from 'react'
import SEO from '@/components/layout/SEO'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Internship from '@/components/sections/Internship'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import { motion } from 'framer-motion'
import { Code2, Cpu, GraduationCap, Trophy } from 'lucide-react'

export default function AboutRoute() {
  return (
    <SEO
      title="About Mantu Kumar"
      description="Learn about Mantu Kumar's education profile, technical certifications, professional developer achievements, history of internships, and project contributions."
      keywords={['Education', 'Certifications', 'Mantu Kumar CV', 'Developer Credentials', 'GDG Hackathon Winner']}
    >
      <div className="space-y-24 pt-12">
        {/* Core Profile */}
        <section className="relative">
          <About />
        </section>

        {/* Technical Timeline - Professional Internships */}
        <section className="relative">
          <Internship />
        </section>

        {/* Experience Timeline */}
        <section className="relative">
          <Experience />
        </section>

        {/* Credentials and Milestones Grid layout */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Metrics stats cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 shadow-[0_6px_0_0_#020409] text-slate-900 pointer-events-none">
              <span className="block text-4xl font-extrabold text-blue-600 font-mono mb-2">10+</span>
              <span className="text-xs font-bold text-blue-900/70 uppercase tracking-widest block mb-4">// Production Builds</span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Successfully delivered scalable systems reaching stable performance criteria on cloud hosting services.
              </p>
            </div>

            <div className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 shadow-[0_6px_0_0_#020409] text-slate-900 pointer-events-none">
              <span className="block text-4xl font-extrabold text-purple-600 font-mono mb-2">3+</span>
              <span className="text-xs font-bold text-purple-900/70 uppercase tracking-widest block mb-4">// Hackathon Honors</span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Multiple awards won in community hackathons organized by GDG Patna, GDG Ranchi, and Techphilia.
              </p>
            </div>
          </div>

          {/* Academic Details Column */}
          <div className="lg:col-span-8 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 sm:p-10 shadow-[0_6px_0_0_#020409] relative overflow-hidden flex flex-col justify-between text-slate-900">
            <div className="absolute top-3 right-5 text-[10px] font-mono font-bold text-blue-900/60 tracking-wider">// RECRUITMENT SPECIFICATION</div>
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
                <GraduationCap className="w-3.5 h-3.5" /> Career Focus
              </span>
              <h3 className="text-2xl font-black text-slate-900">Let's scale something substantial together</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                I study real architecture constraints, caching protocols, indexing configurations, and asynchronous workers. I offer lightweight, optimized code bases with zero bloat and absolute readability. Let’s co-author your next core service.
              </p>
            </div>

            <div className="pt-6 border-t border-blue-200 mt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] font-mono font-bold text-blue-900/50 uppercase tracking-wide">Primary Desk</span>
                <span className="text-xs font-bold text-slate-900">Patna, Bihar, India</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-blue-900/50 uppercase tracking-wide">Working Layout</span>
                <span className="text-xs font-bold text-slate-900">Remote / Hybrid Scope</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <section className="relative">
          <Education />
        </section>

        {/* Certifications and credentials list */}
        <section className="relative">
          <Certifications />
        </section>
      </div>
    </SEO>
  )
}
