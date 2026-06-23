'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Briefcase, MapPin, Code2, ArrowRight } from 'lucide-react'
import coderlook from '@/assets/images/coderlook.jpg'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(false)

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contact = document.getElementById('contact')
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="about-details" className="py-24 sm:py-32 bg-transparent font-sans border-b border-slate-900/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT — Dark illustration card (50%) */}
          <div className="lg:col-span-6">
            <div
              onMouseEnter={() => setHoveredCard(true)}
              onMouseLeave={() => setHoveredCard(false)}
              className="relative rounded-[24px] bg-[#070b19] p-12 overflow-hidden min-h-[440px] shadow-xl group border border-slate-800 flex flex-col justify-between cursor-pointer"
            >
              
              {/* IMAGE FILLING THE CARD */}
              <img
                src={coderlook}
                alt="Mantu Kumar Coder Look"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105 block"
                referrerPolicy="no-referrer"
              />
              
              {/* DARK CONTRAST OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-[#070b19]/95 z-0" />
              
              {/* LARGE DECORATIVE CIRCLES */}
              {/* Large top-right outline circle */}
              <div className="absolute -top-10 -right-10 w-[200px] h-[200px] border-2 border-white/5 rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110 z-10"></div>
              
              {/* Medium bottom-left filled glow circle */}
              <div className="absolute bottom-[60px] left-[40px] w-[120px] h-[120px] bg-indigo-500/10 rounded-full blur-2xl pointer-events-none z-10"></div>
              
              {/* Small dots pattern using radial-gradient */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none z-10"
                style={{
                  backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              ></div>

              {/* FLOATING DEVELOPER CARD */}
              <div className="bg-[#0e162d] rounded-[12px] p-5 shadow-[0_4px_0_0_#020409] relative z-10 w-full max-w-[280px] self-start border border-[#1f2a4f]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Status: Compiling compiles
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-200 space-y-1 select-none">
                  <p>
                    <span className="text-pink-500 font-bold">const</span>{' '}
                    <span className="text-amber-400 font-bold">mantu</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    stack: <span className="text-[#10b981] font-bold">&#x27;MERN&#x27;</span>,
                  </p>
                  <p className="pl-4">
                    aiEnabled: <span className="text-amber-500 font-bold">true</span>,
                  </p>
                  <p className="pl-4">
                    agentic: <span className="text-pink-600 font-bold">true</span>
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Subtle vector details */}
              <div className="text-white/20 font-mono text-xs self-end relative z-10 tracking-widest uppercase">
                // Patna dev machine
              </div>

              {/* SLIDE UP OVERLAY POPUP ON HOVER */}
              <AnimatePresence>
                {hoveredCard && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute bottom-5 left-5 right-5 bg-slate-950/95 border border-slate-850 rounded-[14px] p-5 shadow-2xl z-20 space-y-3"
                  >
                    <p className="text-[#2563eb] text-[10px] font-mono font-bold tracking-widest uppercase border-b border-white/5 pb-2">
                      ✦ Profile Credentials
                    </p>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-slate-200 text-xs font-semibold">
                        <Award className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>🏆 3 Hackathons Led &amp; Won</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-200 text-xs font-semibold">
                        <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>💼 Open to Developer Internships</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-200 text-xs font-semibold">
                        <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>📍 Patna, Bihar, India</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* RIGHT — Text content (50%) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono font-bold text-blue-400 tracking-widest block">
                01. ABOUT ME
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                We help you build <br />
                the{' '}
                <span className="relative inline-block">
                  best products
                  {/* Yellow underline */}
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#ffd60a]/20 -z-10 rounded-full opacity-90"></span>
                </span>
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              I&apos;m a BCA student and Full Stack Developer from Patna who builds real things. From MERN apps to Agentic AI tools &mdash; I&apos;ve competed in 3 hackathons and shipped 8+ live projects.
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Currently interning at SkillFied Mentor while running my own freelance practice. I bridge clean, beautiful client-side interfaces with solid, robust backend logic and intelligent AI workflows.
            </p>

            <div className="pt-4">
              <Button variant="primary" onClick={handleScrollToContact} className="gap-2 font-bold px-6 py-3">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
