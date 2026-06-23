'use client'

import React from 'react'
import { internshipData } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { Building2, Award, ExternalLink, ShieldCheck } from 'lucide-react'

export default function Internship() {
  return (
    <section id="internship" className="py-24 sm:py-32 bg-transparent border-b border-slate-900/10 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header and introduction details */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>05. STRUCTURED EXPERIENCE</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Internships &amp; Deployed <span className="text-blue-400">Capstones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on professional software engineering role focused on industry-standard server-side architectures, database query tuning, and cloud deployment pipelines.
          </p>
        </div>

        {/* Main Internship Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Intern Info Left Column */}
          <div className="relative overflow-hidden lg:col-span-7 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
              alt="MERN Stack Development background"
              className="absolute inset-0 w-full h-full object-cover block opacity-[0.18] pointer-events-none select-none z-0 pb-0 mb-0 border-0"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-[12px] bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center font-extrabold text-xl uppercase shrink-0 select-none shadow-sm">
                  {internshipData.companyInitials}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded uppercase tracking-wide">
                    {internshipData.status} Role
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mt-1">
                    {internshipData.role}
                  </h3>
                  <p className="text-slate-800 font-bold flex items-center gap-1.5 text-sm">
                    <Building2 className="w-4 h-4 text-slate-500" />
                    <span>{internshipData.company}</span>
                  </p>
                </div>
              </div>

              {/* bullets list */}
              <ul className="space-y-4 text-slate-700 pl-5 list-disc leading-relaxed border-t border-blue-200 pt-6 text-sm font-normal">
                {internshipData.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {/* skills tag group */}
            <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-blue-200">
              {internshipData.skills.map((s) => (
                <span
                  key={s}
                  className="bg-white border border-blue-200 text-black text-xs px-3 py-1 rounded-[6px] font-semibold shadow-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Deployed Capstones Right Column (using Deco styled gradient matching banner colors) */}
          <div className="lg:col-span-5 bg-[#edf4fe] border-2 border-[#a5c3f7] text-slate-900 rounded-[20px] p-6 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-200/30 rounded-full mix-blend-multiply blur-2xl opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
              alt="Capstone deliverables background"
              className="absolute inset-0 w-full h-full object-cover block opacity-[0.18] pointer-events-none select-none z-0 pb-0 mb-0 border-0"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-10 space-y-4">
              <div className="p-2.5 w-fit rounded-[10px] bg-blue-100 ring-4 ring-blue-50 border border-blue-250">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-slate-900">
                Structured Capstone Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                As part of this internship, I am designing, coding, and deploying 3 industry-level microservices that conform to modern security models:
              </p>
            </div>

            <div className="relative z-10 space-y-3.5 pt-4">
              {internshipData.projects.map((proj, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-blue-200/70 p-3.5 rounded-[12px] shadow-xs hover:border-blue-300 transition-all duration-200">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    0{i+1}
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-slate-800">
                    {proj}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nested Hackathon Victories grid details */}
        <div className="space-y-8 pt-8">
          <div className="border-t border-slate-900/10 pt-16 flex flex-col items-start gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Hackathon Competition Achievements
            </h3>
            <p className="text-sm text-slate-305">
              Cooperating within intense multi-hour limits to architect AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipData.hackathons.map((h) => {
              const hackathonBgs: Record<string, string> = {
                'gdg-patna': 'https://images.unsplash.com/photo-1540747737956-37872404f80f?q=80&w=600',
                'gdg-ranchi': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600',
                'promptnexus': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600',
              };
              const bgImg = hackathonBgs[h.id] || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600';
              return (
                <div
                  key={h.id}
                  className="relative overflow-hidden bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] p-6 flex flex-col justify-between space-y-6 shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300 text-slate-900"
                >
                  <img 
                    src={bgImg}
                    alt={h.event}
                    className="absolute inset-0 w-full h-full object-cover block opacity-[0.18] pointer-events-none select-none z-0 pb-0 mb-0 border-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-center bg-[#f0f6ff] border border-blue-250 p-2 rounded-[10px]">
                      <span className="text-slate-600 font-bold uppercase tracking-wider text-[9px] font-mono">
                        {h.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-md uppercase font-mono shadow-xs">
                        <Award className="w-3.5 h-3.5" />
                        {h.badge}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
                      {h.event}
                    </h4>
                    <p className="text-xs font-bold text-blue-600 font-mono tracking-wide mt-1 uppercase">{h.organizer}</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {h.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-end pt-3 border-t border-blue-200 text-xs text-slate-900">
                    {h.github && (
                      <a
                        href={h.github}
                        target="_blank"
                        rel="noreferrer referrerPolicy"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline transition-all"
                      >
                        <span>View Code</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
