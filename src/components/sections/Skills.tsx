'use client'

import React, { useState } from 'react'
import { skillCategories } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion, AnimatePresence } from 'framer-motion'

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 sm:py-32 bg-transparent font-sans border-b border-slate-900/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header content section info label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>02. TECHNICAL ARSENAL</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            My Technical <span className="text-blue-400">Stack</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I specialize in full-stack web architectures, intelligent LLM logic pipelines, and clean, high-performance database indexing models.
          </p>
        </div>

        {/* 5 skill category cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {skillCategories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border-2 border-[#a5c3f7] rounded-[20px] p-8 bg-[#edf4fe] transition-all duration-300 relative flex flex-col justify-between min-h-[220px] cursor-pointer shadow-[0_6px_0_0_#020409] hover:translate-y-[-6px] hover:shadow-[0_12px_0_0_#020409] ${
                  cat.id === 'tools' || cat.id === 'database' ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center font-bold text-xl select-none ${cat.bgColor} border border-blue-200`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg leading-snug">
                        {cat.title}
                      </h4>
                      <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-900/70">
                        {cat.skills.length} core proficiencies
                      </p>
                    </div>
                  </div>

                  {/* Standard summary list preview */}
                  {!isHovered && (
                    <div className="text-sm text-slate-700 flex flex-wrap gap-1.5 pt-2 animate-fadeIn">
                      {cat.skills.slice(0, 5).map((sk) => (
                        <span key={sk} className="text-[11px] bg-blue-100/80 border border-blue-200 rounded-md px-2 py-0.5 text-slate-800 font-semibold font-mono">
                          {sk}
                        </span>
                      ))}
                      {cat.skills.length > 5 && (
                        <span className="text-[10px] text-blue-600 font-bold self-center leading-none pl-1">
                          +{cat.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Popup expands BELOW the card area (accordion style) on Hover */}
                  <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-[300px] opacity-100 pt-4 border-t border-blue-200 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-white border border-blue-200 text-slate-800 text-xs px-3 py-1 rounded-[6px] font-semibold hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom guide tag indicator */}
                <div className="pt-4 flex items-center justify-between text-[11px] font-mono font-bold text-blue-900/70">
                  <span className="uppercase tracking-wider">Arsenal 0{idx + 1}</span>
                  <span className="text-blue-600 scale-100 group-hover:translate-x-1 duration-200">
                    {isHovered ? 'Compiled ✓' : 'Hover to view →'}
                  </span>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
