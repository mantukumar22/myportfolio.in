'use client'

import React from 'react'
import { internshipData } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { Building2, Award, ExternalLink, ShieldCheck } from 'lucide-react'

export default function Internship() {
  return (
    <section id="internship" className="py-24 sm:py-32 bg-white border-b border-[#e5e7eb] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header and introduction details */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>05. STRUCTURED EXPERIENCE</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Internships &amp; Deployed <span className="text-[#2563eb]">Capstones</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
            Hands-on professional software engineering role focused on industry-standard server-side architectures, database query tuning, and cloud deployment pipelines.
          </p>
        </div>

        {/* Main Internship Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Intern Info Left Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-[#e5e7eb] rounded-[20px] p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-[12px] bg-blue-50 text-[#2563eb] border border-blue-200 flex items-center justify-center font-extrabold text-xl uppercase shrink-0">
                  {internshipData.companyInitials}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#2563eb] bg-blue-50 px-2.5 py-0.5 rounded uppercase tracking-wide">
                    {internshipData.status} Role
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f0f1a] leading-tight mt-1">
                    {internshipData.role}
                  </h3>
                  <p className="text-slate-500 font-bold flex items-center gap-1.5 text-sm">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{internshipData.company}</span>
                  </p>
                </div>
              </div>

              {/* bullets list */}
              <ul className="space-y-4 text-slate-600 pl-5 list-disc leading-relaxed border-t border-slate-200 pt-6 text-sm font-normal">
                {internshipData.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {/* skills tag group */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
              {internshipData.skills.map((s) => (
                <span
                  key={s}
                  className="bg-white border border-[#e5e7eb] text-slate-600 text-xs px-3 py-1 rounded-[6px] font-semibold"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Deployed Capstones Right Column (using Deco styled gradient matching banner colors) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white rounded-[20px] p-6 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-800 rounded-full mix-blend-multiply blur-2xl opacity-40"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="p-2.5 w-fit rounded-[10px] bg-indigo-700/50 ring-4 ring-indigo-800/25 border border-indigo-500/20">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                Structured Capstone Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200">
                As part of this internship, I am designing, coding, and deploying 3 industry-level microservices that conform to modern security models:
              </p>
            </div>

            <div className="relative z-10 space-y-3.5 pt-4">
              {internshipData.projects.map((proj, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3.5 rounded-[12px] border border-white/10 hover:border-white/20 transition-all duration-200">
                  <span className="w-6 h-6 rounded-full bg-indigo-700 text-indigo-100 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    0{i+1}
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    {proj}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nested Hackathon Victories grid details */}
        <div className="space-y-8 pt-8">
          <div className="border-t border-slate-100 pt-16 flex flex-col items-start gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f0f1a] tracking-tight">
              Hackathon Competition Achievements
            </h3>
            <p className="text-sm text-[#6b7280]">
              Cooperating within intense multi-hour limits to architect AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipData.hackathons.map((h) => (
              <div
                key={h.id}
                className="bg-white border border-[#e5e7eb] rounded-[20px] p-6 flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-50 border border-slate-100 p-2 rounded-[10px]">
                    <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px] font-mono">
                      {h.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#2563eb] bg-blue-50 px-2.5 py-0.5 rounded-md uppercase font-mono">
                      <Award className="w-3.5 h-3.5" />
                      {h.badge}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-[#0f0f1a] text-base sm:text-lg leading-tight">
                    {h.event}
                  </h4>
                  <p className="text-xs font-bold text-[#2563eb] font-mono tracking-wide mt-1 uppercase">{h.organizer}</p>
                  <p className="text-xs text-[#6b7280] leading-relaxed font-normal">
                    {h.description}
                  </p>
                </div>

                <div className="flex justify-end pt-3 border-t border-slate-100 text-xs">
                  {h.github && (
                    <a
                      href={h.github}
                      target="_blank"
                      rel="noreferrer referrerPolicy"
                      className="text-xs font-bold text-[#2563eb] hover:text-blue-800 flex items-center gap-1 hover:underline transition-all"
                    >
                      <span>View Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
