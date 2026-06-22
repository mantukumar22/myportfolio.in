'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personalInfo } from '@/data'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Filter links for matching the minimalist Deco.com nav links
  const allowedLabels = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
  const filteredNavLinks = navLinks.filter(link => allowedLabels.includes(link.label))

  useEffect(() => {
    // Scroll state tracker
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    // IntersectionObserver section tracker
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 68,
        behavior: 'smooth',
      })
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-shadow duration-300 font-sans ${
        scrolled
          ? 'bg-white/95 backdrop-blur-[12px] border-b border-[#f3f4f6] shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
          : 'bg-white/95 backdrop-blur-[12px] border-b border-[#f3f4f6]'
      }`}
      style={{ height: '68px' }}
    >
      <div className="max-w-[1200px] h-full mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* LOGO (Plain bold text) */}
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="flex items-center">
          <span className="font-extrabold text-[#0f0f1a] text-[1.35rem] tracking-[-0.02em] font-sans">
            {personalInfo.initials}.
          </span>
        </a>

        {/* CENTER NAV LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {filteredNavLinks.map((link) => {
            const cleanHref = link.href
            const cleanId = cleanHref.replace('#', '')
            const isActive = activeSection === cleanId
            return (
              <a
                key={link.label}
                href={cleanHref}
                onClick={(e) => handleLinkClick(e, cleanHref)}
                className={`text-[0.875rem] transition-colors duration-200 cursor-pointer text-decoration-none ${
                  isActive
                    ? 'text-[#0f0f1a] font-semibold'
                    : 'text-[#6b7280] font-medium hover:text-[#0f0f1a]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* RIGHT BUTTONS (Exact Deco style) */}
        <div className="hidden md:flex items-center gap-[8px]">
          {/* Button 1: Get started */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-[#2563eb] text-white font-semibold text-[0.875rem] px-[18px] py-[9px] rounded-[8px] border-none cursor-pointer transition-all duration-200 hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started &rarr;
          </a>

          {/* Button 2: Download ↓ Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="bg-white border-[1.5px] border-[#e5e7eb] text-[#0f0f1a] font-medium text-[0.875rem] px-[16px] py-[8px] rounded-[8px] cursor-pointer flex items-center gap-[6px] transition-all duration-200 hover:bg-[#f9fafb] hover:border-[#d1d5db]"
            >
              <span>Download</span>
              <ChevronDown className="w-[14px] h-[14px] text-[#6b7280]" />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e7eb] rounded-[10px] shadow-xl py-1 z-50 text-left"
                >
                  <a
                    href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                    className="block px-4 py-2.5 text-xs text-[#6b7280] font-bold uppercase tracking-wider bg-slate-50 border-b border-slate-100"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE HAMBURGER (Deco style 3 lines button) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-[22px] h-[2px] bg-[#0f0f1a] rounded-[2px] transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-[#0f0f1a] rounded-[2px] transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-[#0f0f1a] rounded-[2px] transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN (Deco specifications) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[68px] left-0 right-0 bg-white/98 backdrop-blur-[12px] border-b border-[#f3f4f6] padding: px-[24px] py-[20px] pb-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col z-[999] md:hidden"
          >
            <div className="flex flex-col">
              {filteredNavLinks.map((link) => {
                const cleanHref = link.href
                const cleanId = cleanHref.replace('#', '')
                const isActive = activeSection === cleanId
                return (
                  <a
                    key={link.label}
                    href={cleanHref}
                    onClick={(e) => handleLinkClick(e, cleanHref)}
                    className={`py-[14px] border-b border-[#f9fafb] text-[1rem] font-medium block text-left transition-colors ${
                      isActive ? 'text-[#0f0f1a] font-semibold' : 'text-[#0f0f1a]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <div className="mt-[16px] flex flex-col gap-[8px] w-full">
              {/* Mobile primary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="bg-[#2563eb] text-white text-center py-3 rounded-[8px] font-semibold text-[0.875rem] block w-full shadow-sm hover:bg-[#1d4ed8]"
              >
                Get started &rarr;
              </a>
              {/* Mobile secondary CTA */}
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                className="bg-white border-[1.5px] border-[#e5e7eb] text-[#0f0f1a] text-center py-3 rounded-[8px] font-medium text-[0.875rem] block w-full hover:bg-slate-50"
              >
                Download CV &darr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
