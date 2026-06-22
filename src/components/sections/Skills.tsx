'use client'

import React, { useState } from 'react'
import { skillCategories } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion, AnimatePresence } from 'framer-motion'

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 sm:py-32 bg-white font-sans border-b border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header content section info label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>02. TECHNICAL ARSENAL</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            My Technical <span className="text-[#2563eb]">Stack</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
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
                className={`border border-[#e5e7eb] rounded-[20px] p-8 bg-white transition-all duration-300 relative flex flex-col justify-between min-h-[220px] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#2563eb] hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] ${
                  cat.id === 'tools' || cat.id === 'database' ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center font-bold text-xl select-none ${cat.bgColor} border`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0f0f1a] text-lg leading-snug">
                        {cat.title}
                      </h4>
                      <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                        {cat.skills.length} core proficiencies
                      </p>
                    </div>
                  </div>

                  {/* Standard summary list preview */}
                  {!isHovered && (
                    <div className="text-sm text-[#6b7280] flex flex-wrap gap-1.5 pt-2 animate-fadeIn">
                      {cat.skills.slice(0, 5).map((sk) => (
                        <span key={sk} className="text-[11px] bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5 text-slate-600 font-semibold font-mono">
                          {sk}
                        </span>
                      ))}
                      {cat.skills.length > 5 && (
                        <span className="text-[10px] text-indigo-600 font-bold self-center leading-none pl-1">
                          +{cat.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Popup expands BELOW the card area (accordion style) on Hover */}
                  <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-[300px] opacity-100 pt-4 border-t border-slate-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-white border border-[#e5e7eb] text-slate-700 text-xs px-3 py-1 rounded-[6px] font-semibold hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom guide tag indicator */}
                <div className="pt-4 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                  <span className="uppercase tracking-wider">Arsenal 0{idx + 1}</span>
                  <span className="text-[#2563eb] scale-100 group-hover:translate-x-1 duration-200">
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
