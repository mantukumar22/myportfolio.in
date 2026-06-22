'use client'

import React from 'react'
import { freelanceData } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { ClipboardList, Laptop, Hammer, Rocket } from 'lucide-react'

export default function Freelance() {
  const getIcon = (i: number) => {
    switch (i) {
      case 0: return <ClipboardList className="w-5 h-5 text-[#2563eb]" />
      case 1: return <Laptop className="w-5 h-5 text-[#2563eb]" />
      case 2: return <Hammer className="w-5 h-5 text-[#2563eb]" />
      default: return <Rocket className="w-5 h-5 text-[#2563eb]" />
    }
  }

  return (
    <section id="freelance" className="py-24 sm:py-32 bg-[#f9fafb] border-b border-[#e5e7eb] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-4 text-left">
            <SectionLabel>06. FREELANCING PRACTICE</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
              {freelanceData.title}
            </h2>
            <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
              {freelanceData.description}
            </p>
          </div>

          {/* Quick Metrics stats cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {freelanceData.stats.map((st, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-[16px] p-6 text-center shadow-xs">
                <span className="block text-3xl font-black text-[#2563eb] font-mono">{st.value}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services mapping grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Services Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f0f1a] tracking-tight">
              Services Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freelanceData.services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e5e7eb] rounded-[20px] p-6 space-y-3 group hover:border-[#2563eb] hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-3xl select-none block pb-1">{service.icon}</span>
                  <h4 className="font-extrabold text-[#0f0f1a] text-base">{service.title}</h4>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Stack Specs Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white rounded-[20px] p-8 flex flex-col justify-between space-y-6 border border-[#2563eb]/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[10px] font-mono font-bold text-slate-500 tracking-widest">// DEPLOYED STACK CONFIG</div>
            
            <div className="space-y-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono font-bold">// Development Checklist</span>
              
              <div className="space-y-3 text-sm text-slate-100 font-mono">
                {freelanceData.terminalLines.map((line, idx) => (
                  <p key={idx} className="leading-relaxed flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold">&gt;</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-4 font-normal">
              * Rates are custom-scoped depending on the features requested. Just write me an email specifying details.
            </p>
          </div>
        </div>

        {/* Process Steps List details */}
        <div className="space-y-8 border-t border-[#e5e7eb] pt-16">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f0f1a] tracking-tight">
              My Execution Roadmap
            </h3>
            <p className="text-sm text-[#6b7280]">
              How I move with clients from a simple brief to a beautiful, fully-deployed application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelanceData.process.map((step, i) => (
              <div
                key={i}
                className="bg-white border border-[#e5e7eb] rounded-[20px] p-6 space-y-4 relative overflow-hidden flex flex-col justify-between hover:border-[#2563eb] hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-1 right-3 text-6xl font-black text-slate-100 select-none pointer-events-none font-mono">
                  {step.number}
                </div>

                <div className="space-y-3 relative z-10 pt-4">
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getIcon(i)}
                  </div>
                  <h4 className="font-extrabold text-[#0f0f1a] text-base">{step.title}</h4>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
