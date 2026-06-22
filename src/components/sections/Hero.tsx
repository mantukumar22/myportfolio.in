'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/data'
import { ArrowRight, HelpCircle, X, CheckCircle, Brain, Code } from 'lucide-react'
import mantuProfileCard from '@/assets/images/mantu_profile_card_1782106390625.png'

export default function Hero() {
  const [downloadModal, setDownloadModal] = useState(false)
  const [activeStepPopup, setActiveStepPopup] = useState<number | null>(null)

  const handleScrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 68,
        behavior: 'smooth',
      })
    }
  }

  const stepTechTags = [
    'Git · GitHub Actions · CI/CD',
    'Vercel · AWS · Render · Docker',
    'Email · Slack · Google Meet'
  ]

  return (
    <section id="about" className="pt-[68px] min-h-screen flex items-center bg-white font-sans border-b border-[#f3f4f6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-[48px] py-[40px] md:py-[80px] w-full space-y-[64px] md:space-y-[80px]">
        
        {/* HERO HEADER GRID — EXACT DECO 55% / 45% COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-[40px] md:gap-[64px] items-center">
          
          {/* LEFT COLUMN (55%) */}
          <div className="space-y-[20px] md:space-y-[24px]">
            {/* EXACT DECO HEADLINE WITH BLUE BOX */}
            <h1 className="font-sans font-[800] text-[clamp(2.2rem,8vw,3rem)] md:text-[clamp(2.6rem,4.5vw,4.2rem)] lg:text-[clamp(2.6rem,4.5vw,4.2rem)] text-[#0f0f1a] leading-[1.08] tracking-[-0.03em] m-0 text-left">
              Here{' '}
              <span className="inline-block bg-[#2563eb] text-[#ffffff] px-[12px] py-[2px] pb-[4px] rounded-[7px] font-[800] text-inherit leading-[1.08] align-baseline mx-[2px] shadow-sm select-none">
                developers
              </span>{' '}
              <br className="hidden sm:inline" />
              build awesome <br className="hidden sm:inline" />
              web experiences
            </h1>

            {/* DECO SUBTEXT */}
            <p className="text-[#6b7280] text-[1rem] leading-[1.65] font-[400] max-w-[420px] text-left">
              With MERN stack, Agentic AI, and modern tooling — Mantu builds scalable web apps and intelligent AI-powered products from Patna, India.
            </p>

            {/* BUTTON ROW — EXACT DECO STYLE */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[10px] sm:gap-[12px] pt-[8px]">
              {/* Button 1: Get Started */}
              <a
                href="#contact"
                onClick={(e) => handleScrollToId(e, 'contact')}
                className="bg-[#2563eb] text-white text-[0.9rem] font-semibold px-[22px] py-[11px] rounded-[8px] cursor-pointer inline-flex items-center justify-center gap-[6px] transition-all duration-200 hover:bg-[#1d4ed8] hover:translate-y-[-1px] active:translate-y-[0px] shadow-sm text-center"
              >
                <span>Get Started</span>
                <span>&rarr;</span>
              </a>

              {/* Button 2: Download */}
              <button
                onClick={() => setDownloadModal(true)}
                className="bg-white text-[#0f0f1a] text-[0.9rem] font-medium px-[20px] py-[10px] rounded-[8px] border-[1.5px] border-[#e5e7eb] cursor-pointer inline-flex items-center justify-center gap-[6px] transition-all duration-200 hover:bg-[#f9fafb] hover:border-[#d1d5db]"
              >
                <span>Download</span>
                <span className="text-[#6b7280]">&darr;</span>
              </button>
            </div>

            {/* HELPER LINK BELOW BUTTONS */}
            <div className="pt-[4px] text-left">
              <a
                href="#contact"
                onClick={(e) => handleScrollToId(e, 'contact')}
                className="text-[0.82rem] text-[#9ca3af] hover:text-[#2563eb] transition-colors inline-block cursor-pointer font-medium"
              >
                &darr; Have any question?
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN (45%) WITH LARGE PHOTO ID CARD */}
          <div className="relative w-full flex justify-center lg:justify-end">
            {/* ILLUSTRATION CARD CANVAS WITH OVERFLOW FLUID FLOATING CARDS */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[335px] select-none group">
              
              {/* STATIC DECO ABSTRACT CIRCLES BEHIND CARD */}
              {/* Circle 1 */}
              <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] border-[1.5px] border-indigo-100/40 rounded-full select-none pointer-events-none z-0"></div>
              {/* Circle 2 */}
              <div className="absolute -bottom-[40px] -left-[40px] w-[160px] h-[160px] bg-indigo-50/10 rounded-full select-none pointer-events-none z-0 blur-lg"></div>

              {/* Outer image card */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#6366f1] rounded-[24px] overflow-hidden shadow-2xl border border-indigo-200/10 z-10">
                {/* Photo inside */}
                <img
                  src={mantuProfileCard}
                  alt="Mantu Kumar ID Card"
                  className="w-full h-full object-cover object-top rounded-[24px] group-hover:scale-[1.015] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* DOT GRID PATTERN OVERLAY */}
                <div 
                  className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                ></div>
              </div>

              {/* FLOATING CARD 1 (exact Deco "Quickly code" card with -translate-x to overflow half-on) */}
              <div
                className="absolute left-[-12px] sm:left-[-24px] bottom-[28px] bg-white/96 backdrop-blur-[10px] border border-white/80 rounded-[14px] p-[10px] pr-[14px] sm:p-[14px] sm:pr-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-30 flex items-center gap-[10px] sm:gap-[12px] min-w-[170px] sm:min-w-[210px] scale-[0.85] sm:scale-100 origin-left"
                style={{
                  animation: 'floatUp 3s ease-in-out infinite'
                }}
              >
                <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-[#dbeafe] rounded-[9px] flex items-center justify-center shrink-0">
                  <Code className="w-[18px] h-[18px] text-[#2563eb]" />
                </div>
                <div className="text-left font-sans">
                  <p className="font-[700] text-[#0f0f1a] text-[11px] sm:text-[0.875rem] leading-[1.2]">Quickly code</p>
                  <p className="text-[9px] sm:text-[0.75rem] text-[#9ca3af] mt-[2px] leading-[1.3] font-medium">Writing scalable architecture</p>
                </div>
              </div>

              {/* FLOATING CARD 2 (exact Deco "Safe cloud" card with translate-x to overflow half-on) */}
              <div
                className="absolute right-[-12px] sm:right-[-24px] top-[144px] bg-white/96 backdrop-blur-[10px] border border-white/80 rounded-[14px] p-[10px] pr-[14px] sm:p-[14px] sm:pr-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-30 flex items-center gap-[10px] sm:gap-[12px] min-w-[170px] sm:min-w-[200px] scale-[0.85] sm:scale-100 origin-right"
                style={{
                  animation: 'floatDown 3s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              >
                <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-[#dcfce7] rounded-[9px] flex items-center justify-center shrink-0">
                  <Brain className="w-[18px] h-[18px] text-[#16a34a]" />
                </div>
                <div className="text-left font-sans">
                  <p className="font-[700] text-[#0f0f1a] text-[11px] sm:text-[0.875rem] leading-[1.2]">AI Powered</p>
                  <p className="text-[9px] sm:text-[0.75rem] text-[#9ca3af] mt-[2px] leading-[1.3] font-medium">Built with Gemini &amp; LangChain</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BELOW HERO — EXACT DECO BOTTOM SECTION (feature card + numbered steps) */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-[40px] items-start pb-[40px] md:pb-[80px]">
          
          {/* LEFT — Feature Highlight Card (Exact style) */}
          <div className="border border-[#e5e7eb] rounded-[20px] overflow-hidden bg-white shadow-sm flex flex-col justify-start">
            {/* Top colored image area */}
            <div className="w-full h-[200px] bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] relative overflow-hidden shrink-0">
              {/* CSS visual elements */}
              <div className="absolute top-[20px] right-[20px] w-[140px] h-[140px] border border-white/10 rounded-full select-none pointer-events-none"></div>
              <div className="absolute -bottom-[30px] left-[10px] w-[110px] h-[110px] border border-white/5 rounded-full select-none pointer-events-none"></div>
              <div className="absolute top-[40%] right-[30%] w-[180px] h-[180px] bg-white/5 rounded-full select-none pointer-events-none blur-sm"></div>

              {/* Dot pattern */}
              <div 
                className="absolute inset-0 opacity-[0.06] select-none pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '12px 12px'
                }}
              ></div>

              {/* Floating micro-badge */}
              <div className="absolute bottom-[20px] left-[20px] bg-white/15 backdrop-blur-[8px] border border-white/25 rounded-[10px] px-[14px] py-[8px] text-[0.8rem] font-semibold text-white select-none">
                8+ Projects Shipped 🚀
              </div>
            </div>

            {/* Bottom text Area */}
            <div className="p-[24px] text-left">
              <h3 className="font-[700] text-[1.05rem] text-[#0f0f1a] m-0 mb-[8px]">
                Open Source &amp; Real Projects
              </h3>
              <p className="text-[0.9rem] text-[#6b7280] leading-[1.55] m-0">
                Every month I ship real projects — from MERN apps to Agentic AI tools. Check GitHub for live work.
              </p>
              
              <div className="mt-[14px]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="text-[#2563eb] text-[0.875rem] font-[600] inline-flex items-center gap-[4px] hover:gap-[8px] transition-[gap] duration-200"
                >
                  <span>View Projects</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Numbered steps (exact Deco 1-2-3 list) */}
          <div className="pt-[8px] w-full text-left">
            
            {/* Step 1 */}
            <div className="flex gap-[16px]">
              {/* Left Column (Number + Line) */}
              <div className="flex flex-col items-center">
                <div className="w-[36px] h-[36px] border-[1.5px] border-[#e5e7eb] rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-[#0f0f1a] bg-white shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-[#eff6ff] hover:text-[#2563eb] cursor-default select-none">
                  1
                </div>
                <div className="w-[1.5px] flex-1 min-h-[32px] bg-[#f3f4f6]" />
              </div>
              {/* Right Column (Text) */}
              <div className="pt-[6px] pb-[28px]">
                <h4 className="font-[700] text-[0.95rem] text-[#0f0f1a] m-0 mb-[6px]">
                  Explore my GitHub repositories.
                </h4>
                <p className="font-[450] text-[0.875rem] text-[#6b7280] leading-[1.55] m-0">
                  All projects are open source, documented, and fully deployed — ready to explore.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-[16px]">
              {/* Left Column (Number + Line) */}
              <div className="flex flex-col items-center">
                <div className="w-[36px] h-[36px] border-[1.5px] border-[#e5e7eb] rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-[#0f0f1a] bg-white shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-[#eff6ff] hover:text-[#2563eb] cursor-default select-none">
                  2
                </div>
                <div className="w-[1.5px] flex-1 min-h-[32px] bg-[#f3f4f6]" />
              </div>
              {/* Right Column (Text) */}
              <div className="pt-[6px] pb-[28px]">
                <h4 className="font-[700] text-[0.95rem] text-[#0f0f1a] m-0 mb-[6px]">
                  Visit live deployments.
                </h4>
                <p className="font-[450] text-[0.875rem] text-[#6b7280] leading-[1.55] m-0">
                  Every project runs live on Vercel, Render, or Netlify — zero setup needed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-[16px]">
              {/* Left Column (Number + Line) */}
              <div className="flex flex-col items-center">
                <div className="w-[36px] h-[36px] border-[1.5px] border-[#e5e7eb] rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-[#0f0f1a] bg-white shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-[#eff6ff] hover:text-[#2563eb] cursor-default select-none">
                  3
                </div>
              </div>
              {/* Right Column (Text - No padding at bottom on last step) */}
              <div className="pt-[6px] pb-4">
                <h4 className="font-[700] text-[0.95rem] text-[#0f0f1a] m-0 mb-[6px]">
                  Reach out to collaborate.
                </h4>
                <p className="font-[450] text-[0.875rem] text-[#6b7280] leading-[1.55] m-0">
                  Have a project idea? I&apos;m open to freelance, internships, and full-time opportunities.
                </p>
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
                <h3 className="font-extrabold text-[#0f0f1a] text-xl sm:text-2xl leading-tight text-left">
                  Download Credentials
                </h3>
                <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed text-left">
                  You can retrieve Mantu&apos;s credentials as a PDF file or read details directly from the developer channels. Choose an option below:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request&body=Hi%20Mantu,%0A%0AI%2520would%252520like%2520to%2520request%2520your%2520full%2520developer%2520resume%2520for%2520a%2520project%2520collaboration.`}
                  onClick={() => setDownloadModal(false)}
                  className="w-full text-center bg-[#2563eb] text-white py-3 rounded-lg font-bold text-sm block hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  📨 Request Standard PDF via Mail
                </a>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="w-full text-center bg-slate-50 border border-slate-200 text-[#0f0f1a] py-3 rounded-lg font-bold text-sm block hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  💻 Explore Direct GitHub Repos
                </a>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setDownloadModal(false)}
                  className="text-xs font-bold text-[#6b7280] hover:text-[#0f0f1a] uppercase tracking-wider cursor-pointer"
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  )
}
