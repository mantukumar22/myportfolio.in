'use client'

import React from 'react'
import SEO from '@/components/layout/SEO'
import Contact from '@/components/sections/Contact'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, MailPlus } from 'lucide-react'

export default function ContactRoute() {
  return (
    <SEO
      title="Contact & Scope Engagement"
      description="Connect with Mantu Kumar directly using EmailJS client validations. Get in touch for custom development projects, internships, or engineering partnerships."
      keywords={['Contact Mantu Kumar', 'Hire Full Stack Developer', 'EmailJS form verification', 'Project scoping Patna']}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-12 pb-24 space-y-16">
        
        {/* Dynamic header label */}
        <div className="space-y-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
            <MailPlus className="w-3.5 h-3.5 animate-pulse" /> Secure Mail Endpoint
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Initiate a <span className="text-[#2563eb]">Software Project</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Ready to scale your system throughput, automate manual steps with LLM custom routing, or build beautiful WebRTC pipelines? Submit details below.
          </p>
        </div>

        {/* Dynamic secure contact module form */}
        <div className="relative">
          <Contact />
        </div>

        {/* Spam Prevention & Direct Contact Disclaimer Card layout */}
        <div className="bg-[#0e162d]/50 border-2 border-[#1f2a4f] rounded-[24px] p-6 sm:p-10 shadow-[0_6px_0_0_#020409] grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-mono font-bold uppercase">
              <ShieldCheck className="w-4 h-4" /> Built-in Security Guards
            </span>
            <h3 className="text-xl sm:text-2.5xl font-black text-white tracking-tight">
              Anti-Abuse Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              To guarantee extreme service stability and combat automated mass mail submissions, this active endpoint uses a multi-token spam controller:
            </p>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm bg-slate-950/50 p-6 rounded-[16px] border border-blue-900/30">
            <p className="flex items-center gap-2 font-bold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Token Bucket Rate-limit (1 dispatch every 60s)</span>
            </p>
            <p className="flex items-center gap-2 font-bold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Secure client-side syntactic regex sanitation</span>
            </p>
            <p className="flex items-center gap-2 font-bold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Double-blind dispatch verification tokens</span>
            </p>
          </div>
        </div>
      </div>
    </SEO>
  )
}
