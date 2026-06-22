'use client'

import React, { useState } from 'react'
import { personalInfo } from '@/data'
import { Github, Linkedin, Instagram, ArrowRight, Star } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [focused, setFocused] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => {
      setSubscribed(false)
    }, 3000)
  }

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-white border-t border-[#f3f4f6] pt-16 pb-8 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Top brand line (Deco's "✦ Enjoy designing with us" equivalent) */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-8 flex-col sm:flex-row gap-4">
          <p className="italic text-sm text-[#6b7280] font-normal tracking-wide flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>✦ Enjoy designing with Mantu</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Available for Hire
            </span>
          </div>
        </div>

        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Tagline (Desktop 4 cols) */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h3 className="font-extrabold text-[#0f0f1a] text-2xl tracking-tight">
              {personalInfo.initials}.
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs pr-4 font-normal">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 w-fit px-3 py-1.5 rounded-full select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                Patna Core Dev Engine
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Desktop 2.5 cols) */}
          <div className="col-span-1 md:col-span-2.5 space-y-4">
            <h4 className="text-[#0f0f1a] font-bold text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#6b7280] font-medium">
              <li>
                <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="hover:text-[#0f0f1a] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')} className="hover:text-[#0f0f1a] transition-colors">
                  Skills Arsenal
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="hover:text-[#0f0f1a] transition-colors">
                  Projects Grid
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleScrollToSection(e, 'experience')} className="hover:text-[#0f0f1a] transition-colors">
                  Experience Block
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect Channels (Desktop 2.5 cols) */}
          <div className="col-span-1 md:col-span-2.5 space-y-4">
            <h4 className="text-[#0f0f1a] font-bold text-xs uppercase tracking-widest">
              Connect
            </h4>
            <div className="space-y-3.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#0f0f1a] font-medium group transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-[#0f0f1a] transition-colors" />
                <span>GitHub Channel</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#0f0f1a] font-medium group transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-[#0f0f1a] transition-colors" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#0f0f1a] font-medium group transition-colors"
              >
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-[#0f0f1a] transition-colors" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Column 4: Join Network input (Desktop 3 cols) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-[#0f0f1a] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span>Join The Network</span>
              <span className="text-slate-400 text-sm">↗</span>
            </h4>
            <p className="text-xs text-[#6b7280] leading-relaxed pr-2 font-normal">
              Stay updated with his projects, freelance insights, and smart agent automation patterns.
            </p>

            {/* Input pill container with exact Deco style details */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="border border-[#e5e7eb] rounded-full p-1.5 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100 transition-all flex items-center bg-white shadow-xs">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setTimeout(() => setFocused(false), 200)}
                  className="bg-transparent border-none outline-hidden flex-1 pl-4 text-sm text-[#0f0f1a] font-medium placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="bg-[#0f0f1a] text-white p-2.5 rounded-full hover:bg-[#2563eb] transition-all flex items-center justify-center cursor-pointer shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Popup Tooltip ABOVE input when focused */}
              {focused && (
                <div className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-30 transition-all duration-250 scale-100 opacity-100 pointer-events-none">
                  <div className="bg-[#0f0f1a] text-white text-[11px] sm:text-xs font-bold rounded-lg px-3.5 py-2 whitespace-nowrap shadow-xl relative border border-slate-800">
                    <span>📩 I reply within 24 hours!</span>
                    <div className="absolute w-2 h-2 bg-[#0f0f1a] border-r border-[#0f0f1a] border-b rotate-45 top-full left-1/2 -translate-x-1/2 -mt-1 skew-x-3"></div>
                  </div>
                </div>
              )}

              {subscribed && (
                <div className="absolute top-[calc(100%+8px)] left-1 text-emerald-600 font-bold text-xs animate-pulse">
                  ✓ Successfully joined the circle!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-[#f3f4f6] pt-8 flex justify-between flex-col sm:flex-row items-center gap-4 text-xs font-medium text-[#6b7280]">
          <p className="font-normal">
            &copy; 2026 {personalInfo.name} &middot; All Rights Reserved.
          </p>
          <p className="font-normal">
            Built with ❤️ in Patna, India.
          </p>
        </div>
      </div>
    </footer>
  )
}
