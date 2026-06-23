'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/data'
import { ArrowRight, HelpCircle, X, CheckCircle, Brain, Code } from 'lucide-react'
import mantuProfileCard from '@/assets/images/mantu_profile_card_1782106390625.png'
import githubScreenshot from '@/assets/images/github_screenshot.png'

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
    <section id="about" className="relative pt-[68px] min-h-screen flex items-center bg-transparent font-sans border-b border-slate-900/10 overflow-hidden">


      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-[48px] py-[40px] md:py-[80px] w-full space-y-[64px] md:space-y-[80px] z-10">
        
        {/* HERO HEADER GRID — EXACT DECO 55% / 45% COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-[40px] md:gap-[64px] items-center">
          
          {/* LEFT COLUMN (55%) */}
          <div className="space-y-[20px] md:space-y-[24px]">
            {/* EXACT DECO HEADLINE WITH BLUE BOX */}
            <h1 className="font-sans font-[800] text-[clamp(2.2rem,8vw,3rem)] md:text-[clamp(2.6rem,4.5vw,4.2rem)] lg:text-[clamp(2.6rem,4.5vw,4.2rem)] text-white leading-[1.08] tracking-[-0.03em] m-0 text-left animate-fade-in-up">
              Here{' '}
              <span 
                className="inline-block bg-[#2563eb] text-[#ffffff] px-[20px] py-[6px] pb-[8px] rounded-[10px] italic font-[400] text-[1.2em] leading-none align-baseline mx-[4px] shadow-md select-none tracking-normal"
                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}
              >
                Developers
              </span>{' '}
              <br className="hidden sm:inline" />
              build awesome <br className="hidden sm:inline" />
              web experiences
            </h1>

            {/* DECO SUBTEXT */}
            <p className="text-slate-300 text-[1rem] leading-[1.65] font-[400] max-w-[420px] text-left">
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
                className="bg-white/10 text-white text-[0.9rem] font-medium px-[20px] py-[10px] rounded-[8px] border-[1.5px] border-white/20 cursor-pointer inline-flex items-center justify-center gap-[6px] transition-all duration-200 hover:bg-white/15 hover:border-white/30"
              >
                <span>Download</span>
                <span className="text-slate-300">&darr;</span>
              </button>
            </div>

            {/* HELPER LINK BELOW BUTTONS */}
            <div className="pt-[4px] text-left">
              <a
                href="#contact"
                onClick={(e) => handleScrollToId(e, 'contact')}
                className="text-[0.82rem] text-slate-400 hover:text-blue-400 transition-colors inline-block cursor-pointer font-medium"
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
              <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] border-[1.5px] border-indigo-500/15 rounded-full select-none pointer-events-none z-0"></div>
              {/* Circle 2 */}
              <div className="absolute -bottom-[40px] -left-[40px] w-[160px] h-[160px] bg-indigo-500/10 rounded-full select-none pointer-events-none z-0 blur-2xl"></div>

              {/* Outer image showcasing the full PNG card */}
              <div className="relative w-full z-10 transition-transform duration-500 group-hover:scale-[1.015]">
                {/* Photo inside displaying full height automatically */}
                <img
                  src={mantuProfileCard}
                  alt="Mantu Kumar ID Card"
                  className="w-full h-auto object-contain rounded-[24px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* FLOATING CARD 1 */}
              <div
                className="absolute z-20 flex items-center gap-[10px] sm:gap-[12px] min-w-[175px] sm:min-w-[210px] bg-slate-900/90 backdrop-blur-[12px] border border-slate-800/80 rounded-[14px] p-[10px] pr-[14px] sm:p-[14px] sm:pr-[18px] shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 top-[45%] left-[-12px] sm:left-[-20px] -translate-y-1/2 scale-[0.85] sm:scale-[0.95] md:top-auto md:bottom-[8px] md:left-[12px] md:translate-y-0 md:scale-100 md:origin-left"
                style={{
                  animation: 'floatUp 4s ease-in-out infinite'
                }}
              >
                <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-[#dbeafe]/10 rounded-[9px] flex items-center justify-center shrink-0">
                  <Code className="w-[18px] h-[18px] text-blue-400" />
                </div>
                <div className="text-left font-sans">
                  <p className="font-[700] text-white text-[11px] sm:text-[0.875rem] leading-[1.2]">Quickly code</p>
                  <p className="text-[9px] sm:text-[0.75rem] text-slate-400 mt-[2px] leading-[1.3] font-medium">Writing scalable architecture</p>
                </div>
              </div>

              {/* FLOATING CARD 2 */}
              <div
                className="absolute z-20 flex items-center gap-[10px] sm:gap-[12px] min-w-[175px] sm:min-w-[200px] bg-slate-900/90 backdrop-blur-[12px] border border-slate-800/80 rounded-[14px] p-[10px] pr-[14px] sm:p-[14px] sm:pr-[18px] shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 bottom-[30px] right-[-12px] sm:right-[-20px] scale-[0.85] sm:scale-[0.95] md:bottom-auto md:top-[140px] md:right-[-86px] lg:right-[-110px] xl:right-[-124px] md:left-auto md:scale-100 md:origin-right"
                style={{
                  animation: 'floatDown 4s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              >
                <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-[#dcfce7]/10 rounded-[9px] flex items-center justify-center shrink-0">
                  <Brain className="w-[18px] h-[18px] text-emerald-400" />
                </div>
                <div className="text-left font-sans">
                  <p className="font-[700] text-white text-[11px] sm:text-[0.875rem] leading-[1.2]">AI Powered</p>
                  <p className="text-[9px] sm:text-[0.75rem] text-slate-400 mt-[2px] leading-[1.3] font-medium">Built with Gemini &amp; Agent</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BELOW HERO — EXACT DECO BOTTOM SECTION (feature card + numbered steps) */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-[40px] items-start pb-[40px] md:pb-[80px]">
          
          {/* LEFT — Feature Highlight Card (Exact style) */}
          <div className="border border-[#e5e7eb] rounded-[20px] overflow-hidden bg-white shadow-sm flex flex-col justify-start">
            {/* Top colored image area using the github screenshot as background */}
            <div className="w-full aspect-[1.85/1] relative overflow-hidden shrink-0 bg-[#0d1117]">
              <img
                src={githubScreenshot}
                alt="Mantu Kumar Github Overview"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Slate subtle backdrop overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating micro-badge: left side small card */}
              <div className="absolute bottom-[16px] left-[16px] bg-slate-950/90 backdrop-blur-[10px] border border-slate-800/80 rounded-[12px] p-2.5 shadow-2xl flex flex-col gap-1 select-none">
                <div className="font-bold text-[0.8rem] leading-none text-white tracking-wide">
                  50+ repos Shipped 🚀
                </div>
                <div className="text-[0.65rem] text-slate-300 leading-none font-medium">
                  10+ projects and counting
                </div>
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
                <div className="w-[36px] h-[36px] border-[1.5px] border-slate-700 rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-slate-100 bg-slate-800/80 shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-slate-700 hover:text-white cursor-default select-none">
                  1
                </div>
                <div className="w-[1.5px] flex-1 min-h-[32px] bg-slate-800" />
              </div>
              {/* Right Column (Text) */}
              <div className="pt-[6px] pb-[28px]">
                <h4 className="font-[700] text-[0.95rem] text-white m-0 mb-[6px]">
                  Explore my GitHub repositories.
                </h4>
                <p className="font-[450] text-[0.875rem] text-slate-300 leading-[1.55] m-0">
                  All projects are open source, documented, and fully deployed — ready to explore.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-[16px]">
              {/* Left Column (Number + Line) */}
              <div className="flex flex-col items-center">
                <div className="w-[36px] h-[36px] border-[1.5px] border-slate-700 rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-slate-100 bg-slate-800/80 shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-slate-700 hover:text-white cursor-default select-none">
                  2
                </div>
                <div className="w-[1.5px] flex-1 min-h-[32px] bg-slate-800" />
              </div>
              {/* Right Column (Text) */}
              <div className="pt-[6px] pb-[28px]">
                <h4 className="font-[700] text-[0.95rem] text-white m-0 mb-[6px]">
                  Visit live deployments.
                </h4>
                <p className="font-[450] text-[0.875rem] text-slate-300 leading-[1.55] m-0">
                  Every project runs live on Vercel, Render, or Netlify — zero setup needed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-[16px]">
              {/* Left Column (Number + Line) */}
              <div className="flex flex-col items-center">
                <div className="w-[36px] h-[36px] border-[1.5px] border-slate-700 rounded-full flex items-center justify-center font-[700] text-[0.875rem] text-slate-100 bg-slate-800/80 shrink-0 transition-all duration-200 hover:border-[#2563eb] hover:bg-slate-700 hover:text-white cursor-default select-none">
                  3
                </div>
              </div>
              {/* Right Column (Text - No padding at bottom on last step) */}
              <div className="pt-[6px] pb-4">
                <h4 className="font-[700] text-[0.95rem] text-white m-0 mb-[6px]">
                  Reach out to collaborate.
                </h4>
                <p className="font-[450] text-[0.875rem] text-slate-300 leading-[1.55] m-0">
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
