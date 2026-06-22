'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personalInfo } from '@/data'
import { Menu, X, ArrowRight, Download, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Track scrolling to add shadows
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section tracker
      const sections = ['about', 'skills', 'projects', 'experience', 'faq', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 80,
        behavior: 'smooth',
      })
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-[#f3f4f6] shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
          : 'bg-white/92 backdrop-blur-md border-b border-[#f3f4f6]'
      }`}
      style={{ height: '68px' }}
    >
      <div className="max-w-[1200px] h-full mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="flex items-center">
          <span className="font-extrabold text-[#0f0f1a] text-[1.4rem] tracking-tight">
            {personalInfo.initials}.
          </span>
        </a>

        {/* CENTERED LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const cleanHref = link.href
            const cleanId = cleanHref.replace('#', '')
            const isActive = activeSection === cleanId
            return (
              <a
                key={link.label}
                href={cleanHref}
                onClick={(e) => handleLinkClick(e, cleanHref)}
                className={`text-[0.9rem] font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#2563eb] font-semibold'
                    : 'text-[#6b7280] hover:text-[#0f0f1a]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          {/* Get Started Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-[#2563eb] text-white px-5 py-2.5 rounded-[8px] font-semibold text-[0.9rem] flex items-center gap-1.5 transition-all duration-200 hover:bg-blue-700 active:scale-98 shadow-sm cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Download cv Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="bg-white border-1.5 border-[#e5e7eb] text-[#0f0f1a] px-5 py-2.5 rounded-[8px] font-semibold text-[0.9rem] flex items-center gap-1.5 transition-all duration-200 hover:bg-[#f9fafb] active:scale-98 cursor-pointer"
            >
              <span>Download</span>
              <Download className="w-4 h-4 text-slate-400" />
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e7eb] rounded-[10px] shadow-xl py-1 z-50 text-left">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block px-4 py-2 text-xs text-[#6b7280] font-bold uppercase tracking-wider bg-slate-50 border-b border-slate-100"
                >
                  Request Full Resume
                </a>
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                  className="block px-4 py-2.5 text-sm font-semibold text-[#0f0f1a] hover:bg-slate-50 transition-colors"
                >
                  📄 Standard Resume
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="block px-4 py-2.5 text-sm font-semibold text-[#0f0f1a] hover:bg-slate-50 transition-colors"
                >
                  🚀 GitHub Portfolio
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#0f0f1a] hover:bg-slate-50 active:scale-95 transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE SLIDE DOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#e5e7eb] px-6 py-6 space-y-4 shadow-xl overflow-hidden font-sans"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const cleanHref = link.href
                const cleanId = cleanHref.replace('#', '')
                const isActive = activeSection === cleanId
                return (
                  <a
                    key={link.label}
                    href={cleanHref}
                    onClick={(e) => handleLinkClick(e, cleanHref)}
                    className={`text-base font-semibold py-1.5 border-b border-slate-50 transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'text-[#6b7280]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#f3f4f6]">
              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="bg-[#2563eb] text-white text-center py-3 rounded-[8px] font-bold text-sm flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                className="bg-white border border-[#e5e7eb] text-[#0f0f1a] text-center py-3 rounded-[8px] font-bold text-sm flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
