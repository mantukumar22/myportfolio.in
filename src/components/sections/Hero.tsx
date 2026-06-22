'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/data'
import { ArrowRight, Download, Brain, Code, HelpCircle, X, CheckCircle } from 'lucide-react'
import mantuProfileCard from '@/assets/images/mantu_profile_card_1782106390625.png'

export default function Hero() {
  const [downloadModal, setDownloadModal] = useState(false)
  
  // State for step popups
  const [activeStepPopup, setActiveStepPopup] = useState<number | null>(null)

  // State for Section 2 (Weekly challenges card) tooltip
  const [showWeeklyTooltip, setShowWeeklyTooltip] = useState(false)

  const handleScrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  // Tech tags for step popups
  const stepTechTags = [
    'Git · GitHub Actions · CI/CD',
    'Vercel · AWS · Render · Docker',
    'Email · Slack · Google Meet'
  ]

  return (
    <section id="about" className="pt-28 pb-20 bg-white font-sans border-b border-[#f3f4f6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-24">
        
        {/* HERO HEADER ROW (55% / 45% columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (55%) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-clamp-h1 font-[800] leading-[1.1] text-[#0f0f1a] tracking-[-0.02em] font-sans">
              Here{' '}
              <span className="bg-[#2563eb] text-white px-3 py-1.5 rounded-[8px] inline-block scale-100 transform transform-origin-center">
                developers
              </span>{' '}
              <br className="hidden sm:inline" />
              build awesome <br className="hidden sm:inline" />
              web experiences
            </h1>

            <p className="text-[#6b7280] text-base leading-relaxed max-w-[460px] font-normal">
              With MERN stack, Agentic AI, and modern tooling — Mantu builds scalable web apps and intelligent AI-powered products from Patna, India.
            </p>

            {/* Button group list */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScrollToId(e, 'contact')}
                className="bg-[#2563eb] text-white font-bold rounded-[8px] px-6 py-3 text-sm sm:text-base inline-flex items-center gap-2 hover:bg-blue-700 active:scale-98 transition-all shadow-md cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setDownloadModal(true)}
                className="bg-white border-1.5 border-[#e5e7eb] text-[#0f0f1a] font-bold rounded-[8px] px-6 py-3 text-sm sm:text-base inline-flex items-center gap-2 hover:bg-[#f9fafb] active:scale-98 transition-all cursor-pointer"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Have any question link */}
            <div className="pt-2">
              <a
                href="#faq"
                onClick={(e) => handleScrollToId(e, 'faq')}
                className="text-xs sm:text-sm text-[#6b7280] font-semibold hover:text-[#2563eb] transition-colors flex items-center gap-1.5 w-fit"
              >
                <HelpCircle className="w-4 h-4 text-[#2563eb]" />
                <span>↓ Have any question? Ask Mantu</span>
              </a>
            </div>
          </div>

          {/* Right Column (45%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-[380px] select-none group">
              
              {/* Profile Card Image Container */}
              <div className="w-full h-[500px] sm:h-[500px] rounded-[24px] overflow-hidden border border-[#e5e7eb] bg-slate-50 shadow-2xl relative">
                <img
                  src={mantuProfileCard}
                  alt="Mantu Kumar - Full Stack Developer ID Card"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* FLOATING CARD 1 (bottom-left of image, -20px left, -20px bottom) */}
              <div
                className="absolute -left-5 -bottom-5 bg-white/95 backdrop-blur-md rounded-[14px] p-3.5 pr-5 border border-[#e5e7eb] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-30 flex items-center gap-3 select-none"
                style={{
                  animation: 'floatUp 3s ease-in-out infinite alternate'
                }}
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#dbeafe] flex items-center justify-center shrink-0">
                  <Code className="w-5 h-5 text-[#2563eb]" />
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-[#0f0f1a] text-xs">Quickly code</p>
                  <p className="text-[10px] text-[#6b7280] font-medium leading-tight">Writing scalable architecture</p>
                </div>
              </div>

              {/* FLOATING CARD 2 (top-right of image, -20px right, 40px top) */}
              <div
                className="absolute -right-5 top-10 bg-white/95 backdrop-blur-md rounded-[14px] p-3.5 pr-5 border border-[#e5e7eb] shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-30 flex items-center gap-3 select-none"
                style={{
                  animation: 'floatDown 3s ease-in-out infinite alternate',
                  animationDelay: '1.5s'
                }}
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#dcfce7] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-[#16a34a]" />
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-[#0f0f1a] text-xs">AI Powered</p>
                  <p className="text-[10px] text-[#6b7280] font-medium leading-tight">LLMs and smart agent logic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 & 3: GRID (Left: Weekly Highlights, Right: Numbered steps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-8">
          
          {/* LEFT: Section 2 Feature Highlight Card (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <div
              onMouseEnter={() => setShowWeeklyTooltip(true)}
              onMouseLeave={() => setShowWeeklyTooltip(false)}
              className="border border-[#e5e7eb] rounded-[20px] overflow-hidden flex flex-col sm:flex-row h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative group bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              
              {/* Left colorful side gradient */}
              <div className="sm:w-[40%] bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] p-8 flex flex-col justify-between relative overflow-hidden shrink-0 min-h-[220px]">
                {/* Abstract vector graphics inside */}
                <div className="absolute top-2 right-2 w-28 h-28 border border-white/10 rounded-full select-none pointer-events-none"></div>
                <div className="absolute bottom-[-10px] left-5 w-20 h-20 bg-white/10 rounded-full select-none pointer-events-none blur-md"></div>
                <div className="absolute top-1/2 left-10 w-24 h-[1px] bg-white/15 rotate-45 select-none pointer-events-none"></div>

                <div className="relative z-10 text-white space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-indigo-200 tracking-wider">
                    Interactive Lab
                  </span>
                  <h4 className="font-black text-xl leading-tight">
                    Code Base
                  </h4>
                </div>

                <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-white font-mono font-bold uppercase w-fit inline-block tracking-wide select-none">
                  ⚡ 8+ SHIPPED
                </div>
              </div>

              {/* Right text details side */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#2563eb] tracking-widest block">
                    Open Source Work
                  </span>
                  <h3 className="text-[#0f0f1a] font-extrabold text-xl sm:text-2xl leading-snug">
                    Open Source &amp; Real Projects
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed font-normal">
                    Every month I ship real projects — from MERN apps to Agentic AI tools. Check my GitHub for live work. All repositories are documented.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer referrerPolicy"
                    className="text-[#2563eb] font-extrabold text-sm flex items-center gap-1.5 hover:underline transition-all"
                  >
                    <span>Check GitHub Repos</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Weekly Highlight Tooltip Above Card */}
              <AnimatePresence>
                {showWeeklyTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-30"
                  >
                    <div className="bg-[#0f0f1a] text-white font-bold text-xs rounded-lg px-4.5 py-2.5 shadow-2xl relative whitespace-nowrap border border-slate-800 text-center">
                      <p>🚀 8+ Projects Shipped &mdash; View All &rarr;</p>
                      <div className="absolute w-2.5 h-2.5 bg-[#0f0f1a] border-r border-[#0f0f1a] border-b rotate-45 top-full left-1/2 -translate-x-1/2 -mt-1.5"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Section 3 Numbered Steps (40%) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <h4 className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-6 block">
              // Portfolio Roadmap Actions
            </h4>

            <div className="space-y-6 relative">
              
              {/* Step 1 */}
              <div
                className="flex gap-4 items-start relative group"
                onMouseEnter={() => setActiveStepPopup(0)}
                onMouseLeave={() => setActiveStepPopup(null)}
              >
                <div className="w-9 h-9 rounded-full border-[1.5px] border-[#e5e7eb] text-[#0f0f1a] font-bold text-sm flex items-center justify-center shrink-0 bg-white z-10 transition-colors group-hover:border-[#2563eb] group-hover:text-[#2563eb]">
                  1
                </div>
                {/* Dotted Vertical Connector Line */}
                <div className="absolute left-[17px] top-9 w-[1px] h-10 border-l-2 border-dashed border-[#e5e7eb] z-0"></div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-[#0f0f1a] text-sm sm:text-base leading-tight">
                    Explore my GitHub repositories.
                  </h5>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed font-normal">
                    All projects are open source, documented, and deployed.
                  </p>
                </div>

                {/* Step Hover Slide-In Popup from Right */}
                <AnimatePresence>
                  {activeStepPopup === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      className="absolute left-full ml-4 top-0 z-30 bg-white border border-[#e5e7eb] rounded-[10px] p-3 shadow-xl text-left flex items-center gap-2.5 whitespace-nowrap min-w-[200px]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#2563eb]" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Available stack</p>
                        <p className="text-[10px] text-slate-500 font-mono">{stepTechTags[0]}</p>
                      </div>
                      <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors ml-auto" onClick={() => setActiveStepPopup(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 2 */}
              <div
                className="flex gap-4 items-start relative group"
                onMouseEnter={() => setActiveStepPopup(1)}
                onMouseLeave={() => setActiveStepPopup(null)}
              >
                <div className="w-9 h-9 rounded-full border-[1.5px] border-[#e5e7eb] text-[#0f0f1a] font-bold text-sm flex items-center justify-center shrink-0 bg-white z-10 transition-colors group-hover:border-[#2563eb] group-hover:text-[#2563eb]">
                  2
                </div>
                {/* Dotted Vertical Connector Line */}
                <div className="absolute left-[17px] top-9 w-[1px] h-10 border-l-2 border-dashed border-[#e5e7eb] z-0"></div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-[#0f0f1a] text-sm sm:text-base leading-tight">
                    Visit live deployments.
                  </h5>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed font-normal">
                    Each project runs live &mdash; on Vercel, Render, or Netlify.
                  </p>
                </div>

                {/* Step Hover Slide-In Popup from Right */}
                <AnimatePresence>
                  {activeStepPopup === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      className="absolute left-full ml-4 top-0 z-30 bg-white border border-[#e5e7eb] rounded-[10px] p-3 shadow-xl text-left flex items-center gap-2.5 whitespace-nowrap min-w-[200px]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#2563eb]" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Hosting stack</p>
                        <p className="text-[10px] text-slate-500 font-mono">{stepTechTags[1]}</p>
                      </div>
                      <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors ml-auto" onClick={() => setActiveStepPopup(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 3 */}
              <div
                className="flex gap-4 items-start relative group"
                onMouseEnter={() => setActiveStepPopup(2)}
                onMouseLeave={() => setActiveStepPopup(null)}
              >
                <div className="w-9 h-9 rounded-full border-[1.5px] border-[#e5e7eb] text-[#0f0f1a] font-bold text-sm flex items-center justify-center shrink-0 bg-white z-10 transition-colors group-hover:border-[#2563eb] group-hover:text-[#2563eb]">
                  3
                </div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-[#0f0f1a] text-sm sm:text-base leading-tight">
                    Reach out to collaborate.
                  </h5>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed font-normal">
                    Have a project idea? Let&apos;s build something together.
                  </p>
                </div>

                {/* Step Hover Slide-In Popup from Right */}
                <AnimatePresence>
                  {activeStepPopup === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      className="absolute left-full ml-4 top-0 z-30 bg-white border border-[#e5e7eb] rounded-[10px] p-3 shadow-xl text-left flex items-center gap-2.5 whitespace-nowrap min-w-[200px]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#2563eb]" />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Scoping channels</p>
                        <p className="text-[10px] text-slate-500 font-mono">{stepTechTags[2]}</p>
                      </div>
                      <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors ml-auto" onClick={() => setActiveStepPopup(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* CV Request Dialogue Modal */}
      <AnimatePresence>
        {downloadModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[20px] border border-[#e5e7eb] p-6 sm:p-8 max-w-md w-full relative space-y-6 shadow-2xl font-sans"
            >
              <div className="space-y-2">
                <h3 className="font-extrabold text-[#0f0f1a] text-xl sm:text-2xl leading-tight">
                  Download Portfolio Credentials
                </h3>
                <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
                  You can retrieve Mantu&apos;s credentials as a PDF file or read details directly from the developer channels. Choose an option below:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request&body=Hi%20Mantu,%0A%0AI%20would%2520like%20to%20request%20your%20full%20developer%20resume%20for%20a%20project%20collaboration%20or%20job%20internship.%0A%0AThanks!`}
                  onClick={() => setDownloadModal(false)}
                  className="w-full text-center bg-[#2563eb] text-white py-3 rounded-lg font-bold text-sm block hover:bg-blue-700 transition-colors"
                >
                  📨 Request Standard PDF via Mail
                </a>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="w-full text-center bg-slate-50 border border-slate-200 text-[#0f0f1a] py-3 rounded-lg font-bold text-sm block hover:bg-slate-100 transition-colors"
                >
                  💻 Explore Direct GitHub Repos
                </a>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setDownloadModal(false)}
                  className="text-xs font-bold text-[#6b7280] hover:text-[#0f0f1a] uppercase tracking-wider"
                >
                  Close Dialogue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Animations CSS injected */}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0px); }
          to { transform: translateY(-8px); }
        }
        @keyframes floatDown {
          from { transform: translateY(-8px); }
          to { transform: translateY(0px); }
        }
      `}</style>
    </section>
  )
}
