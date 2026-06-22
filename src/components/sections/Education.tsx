'use client'

import React from 'react'
import { educationEntries } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { Calendar } from 'lucide-react'

export default function Education() {
  const getBadgeColors = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 bg-blue-50 text-[#2563eb]'
      case 'green':
        return 'border-emerald-200 bg-emerald-50 text-emerald-700'
      case 'orange':
        return 'border-orange-200 bg-orange-50 text-orange-700'
      default:
        return 'border-slate-200 bg-slate-50 text-slate-705'
    }
  }

  return (
    <section id="education" className="py-24 sm:py-32 bg-white border-b border-[#e5e7eb] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header content section info label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>07. EDUCATION BACKGROUND</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Learning &amp; Academic <span className="text-[#2563eb]">Foundation</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
            I am currently pursuing a Bachelor of Computer Applications degree while actively building a portfolio of projects and studying web application frameworks.
          </p>
        </div>

        {/* Education entries cards mapped over container list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationEntries.map((ed) => {
            const badgeClasses = getBadgeColors(ed.color)
            return (
              <div
                key={ed.id}
                className="bg-slate-50 border border-[#e5e7eb] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="space-y-6">
                  {/* Badge & Period details */}
                  <div className="flex justify-between items-center bg-white border border-slate-100 p-2 rounded-[10px]">
                    <span className={`px-2.5 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider font-mono ${badgeClasses}`}>
                      {ed.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#2563eb]" />
                      {ed.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#0f0f1a] leading-tight group-hover:text-[#2563eb] transition-colors">
                      {ed.degree}
                    </h3>
                    <p className="text-slate-500 font-semibold text-xs leading-relaxed uppercase tracking-wide">
                      {ed.institution}
                    </p>
                    {ed.specialization && (
                      <p className="text-xs font-semibold text-slate-400">
                        ({ed.specialization})
                      </p>
                    )}
                  </div>

                  {/* Highlights points array mapping */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Academic details:
                    </p>
                    <ul className="text-slate-600 text-xs sm:text-sm space-y-1.5 pl-4 list-disc font-normal leading-relaxed">
                      {ed.highlights.map((hlt, idx) => (
                        <li key={idx}>
                          {hlt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Score, Quote, or Status Badge Footer */}
                <div className="pt-6 mt-6 border-t border-[#e5e7eb] flex items-center justify-between">
                  {ed.score && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-slate-400">Grade:</span>
                      <span className="text-sm font-black text-slate-800">{ed.score}</span>
                    </div>
                  )}

                  {ed.status && (
                    <span className="bg-blue-50 text-[#2563eb] px-3 py-0.5 rounded text-xs font-bold uppercase tracking-wide font-mono">
                      {ed.status}
                    </span>
                  )}

                  {ed.quote && (
                    <p className="text-[11px] italic text-slate-550 leading-relaxed font-normal">
                      &quot;{ed.quote}&quot;
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
