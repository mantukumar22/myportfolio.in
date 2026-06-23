'use client'

import React from 'react'
import { educationEntries } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { Calendar } from 'lucide-react'

export default function Education() {
  const getBadgeColors = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 bg-blue-100 text-blue-800'
      case 'green':
        return 'border-emerald-250 bg-emerald-100 text-emerald-800'
      case 'orange':
        return 'border-orange-250 bg-orange-100 text-orange-900'
      default:
        return 'border-blue-200 bg-blue-105 text-slate-800'
    }
  }

  return (
    <section id="education" className="py-24 sm:py-32 bg-transparent border-b border-slate-900/10 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header content section info label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>07. EDUCATION BACKGROUND</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Learning &amp; Academic <span className="text-blue-400">Foundation</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
                className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300 relative group text-slate-900"
              >
                <div className="space-y-6">
                  {/* Badge & Period details */}
                  <div className="flex justify-between items-center bg-[#f0f6ff] border border-blue-250 p-2 rounded-[10px]">
                    <span className={`px-2.5 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider font-mono ${badgeClasses}`}>
                      {ed.badge}
                    </span>
                    <span className="text-xs text-slate-700 font-mono flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {ed.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {ed.degree}
                    </h3>
                    <p className="text-slate-800 font-semibold text-xs leading-relaxed uppercase tracking-wide">
                      {ed.institution}
                    </p>
                    {ed.specialization && (
                      <p className="text-xs font-semibold text-slate-700">
                        ({ed.specialization})
                      </p>
                    )}
                  </div>

                  {/* Highlights points array mapping */}
                  <div className="space-y-2.5 pt-4 border-t border-blue-200">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider font-mono">
                      Academic details:
                    </p>
                    <ul className="text-slate-700 text-xs sm:text-sm space-y-1.5 pl-4 list-disc font-normal leading-relaxed">
                      {ed.highlights.map((hlt, idx) => (
                        <li key={idx}>
                          {hlt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Score, Quote, or Status Badge Footer */}
                <div className="pt-6 mt-6 border-t border-blue-200 flex items-center justify-between">
                  {ed.score && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-slate-600">Grade:</span>
                      <span className="text-sm font-black text-slate-900">{ed.score}</span>
                    </div>
                  )}

                  {ed.status && (
                    <span className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-0.5 rounded text-xs font-bold uppercase tracking-wide font-mono">
                      {ed.status}
                    </span>
                  )}

                  {ed.quote && (
                    <p className="text-[11px] italic text-slate-600 leading-relaxed font-normal font-sans">
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
