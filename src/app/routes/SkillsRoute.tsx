'use client'

import React from 'react'
import SEO from '@/components/layout/SEO'
import SectionLabel from '@/components/ui/SectionLabel'
import { skillCategories } from '@/data'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cpu, Activity, Database, Check } from 'lucide-react'

export default function SkillsRoute() {
  return (
    <SEO
      title="Technical Stack & Expertise"
      description="Deep explore Mantu Kumar's programming skills, technology, tooling integrations, database configurations, and frameworks."
      keywords={['Vite React technical profile', 'Software stack', 'LLM prompt engineering', 'MERN Stack proficiency']}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-12 pb-24 space-y-16">
        
        {/* Page title space */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel>02. THE REPOSITORY ARSENAL</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Integrated <span className="text-[#2563eb]">Software Stack</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I specialize in combining modern, lightweight JavaScript clients with robust MongoDB structures, socket gateways, security scopes, and Google Gemini API triggers.
          </p>
        </div>

        {/* Dynamic skills visual diagram */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 flex flex-col justify-between shadow-[0_6px_0_0_#020409]"
            >
              <div className="space-y-6">
                {/* Heading details */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl select-none ${cat.bgColor} border border-blue-200 shadow-sm`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug">{cat.title}</h3>
                    <span className="text-[10px] font-mono font-bold text-blue-900/60 uppercase tracking-widest block">
                      Category // 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Sub-skills chips list */}
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900/50">Core integrations</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white border border-blue-200 rounded-[8px] px-3 py-1 text-xs text-slate-800 font-bold flex items-center gap-1 hover:border-blue-500 hover:text-blue-700 transition-colors shadow-xs"
                      >
                        <Check className="w-3 h-3 text-blue-600 shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified badges */}
              <div className="pt-6 border-t border-blue-200 mt-6 flex justify-between items-center text-[10px] font-mono font-bold text-blue-900/60">
                <span>SYSTEM STABILITY: EXCELLENT</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider">
                  Verified ✓
                </span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Tactical Deep Dive Panel */}
        <div className="bg-[#0e162d] border border-[#1f2a4f] rounded-[24px] p-8 sm:p-12 shadow-[0_8px_0_0_#020409] relative overflow-hidden text-white">
          <div className="absolute top-3 right-6 text-[10px] font-mono font-bold text-blue-400 tracking-widest">// ARCHITECTURE CONSTRAINTS</div>
          
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1 bg-blue-950/50 border border-blue-900/30 text-blue-400 font-bold uppercase tracking-wider text-[10px] px-3 py-1 rounded-full">
              <Terminal className="w-3.5 h-3.5" /> High Performance Goals
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operational Delivery Checklist
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm pt-4">
              <div className="space-y-2 border-l border-blue-900/30 pl-4">
                <h4 className="font-extrabold text-white flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-400" /> Lazy Code Loading
                </h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Components are dynamically mapped or bundled efficiently to prevent initial render lag, yielding high Lighthouse and Core Web Vitals diagnostics.
                </p>
              </div>

              <div className="space-y-2 border-l border-blue-900/30 pl-4">
                <h4 className="font-extrabold text-white flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-blue-400" /> Optimized DB Queries
                </h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Strict schema indexing protocols, optimized Mongo cursor iterations, and cache validations maintain database operations under 80ms constraints.
                </p>
              </div>

              <div className="space-y-2 border-l border-blue-900/30 pl-4">
                <h4 className="font-extrabold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-400" /> Strict Endpoint Guarding
                </h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  JWT validation keys, cross-origin security rules, sanitization regex checks, and strict environment configuration protect operational routes.
                </p>
              </div>

              <div className="space-y-2 border-l border-blue-900/30 pl-4">
                <h4 className="font-extrabold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-blue-400" /> Frame Rate Maintenance
                </h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Use of hardware-accelerated Framer Motion timelines and standard React.memo wrappers prevents component layout Thrashing on scroll transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SEO>
  )
}
