'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personalInfo } from '@/data'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Filter links for matching the minimalist Deco.com nav links
  const allowedLabels = ['About', 'Skills', 'Projects', 'Contact']
  const filteredNavLinks = navLinks.filter(link => allowedLabels.includes(link.label))

  // Map section labels to dedicated routing paths
  const getRoutePath = (label: string): string => {
    switch (label.toLowerCase()) {
      case 'about':
        return '/about'
      case 'skills':
        return '/skills'
      case 'projects':
        return '/projects'
      case 'contact':
        return '/contact'
      default:
        return '/'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 font-sans ${
        scrolled
          ? 'bg-[#070b19]/85 backdrop-blur-[12px] border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-white'
          : 'bg-transparent border-b border-transparent text-white'
      }`}
      style={{ height: '68px' }}
    >
      <div className="max-w-[1200px] h-full mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* LOGO (Plain bold text) */}
        <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <span className="font-extrabold text-[1.35rem] tracking-[-0.02em] font-sans transition-colors duration-200 text-white">
            {personalInfo.initials}.
          </span>
        </Link>

        {/* CENTER NAV LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {filteredNavLinks.map((link) => {
            const targetPath = getRoutePath(link.label)
            const isActive = location.pathname === targetPath
            return (
              <Link
                key={link.label}
                to={targetPath}
                className={`text-[0.875rem] transition-colors duration-200 cursor-pointer text-decoration-none ${
                  isActive
                    ? 'text-blue-400 font-bold border-b-2 border-blue-500 pb-1'
                    : 'text-slate-300 hover:text-white font-medium'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* RIGHT BUTTONS (Exact Deco style) */}
        <div className="hidden md:flex items-center gap-[8px]">
          {/* Button 1: Get started */}
          <Link
            to="/contact"
            className="font-semibold text-[0.875rem] px-[18px] py-[9px] rounded-[8px] border-none cursor-pointer transition-all duration-200 bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started &rarr;
          </Link>

          {/* Button 2: Download ↓ Dropdown */}
          <div className="relative">
            <button
               onClick={() => setShowDropdown(!showDropdown)}
               onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
               className="font-medium transition-all duration-200 text-[0.875rem] px-[16px] py-[8px] rounded-[8px] cursor-pointer flex items-center gap-[6px] bg-white/10 border-[1.5px] border-white/20 text-white hover:bg-white/20 hover:border-white/30"
            >
              <span>Download</span>
              <ChevronDown className="w-[14px] h-[14px] text-white" />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-[10px] shadow-xl py-1 z-50 text-left"
                >
                  <a
                    href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                    className="block px-4 py-2.5 text-xs text-slate-400 font-bold uppercase tracking-wider bg-slate-950 border-b border-slate-850"
                  >
                    Request Full Resume
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
                  >
                    📄 Standard Resume
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer referrerPolicy"
                    className="block px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
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
            className={`w-[22px] h-[2px] rounded-[2px] transition-all duration-300 origin-center bg-white ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`w-[22px] h-[2px] rounded-[2px] transition-all duration-300 bg-white ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`w-[22px] h-[2px] rounded-[2px] transition-all duration-300 origin-center bg-white ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
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
            className="absolute top-[68px] left-0 right-0 bg-[#070b19] border-b border-slate-900 px-[24px] py-[20px] pb-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col z-[999] md:hidden"
          >
            <div className="flex flex-col">
              {filteredNavLinks.map((link) => {
                const targetPath = getRoutePath(link.label)
                const isActive = location.pathname === targetPath
                return (
                  <Link
                    key={link.label}
                    to={targetPath}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-[14px] border-b border-slate-900/50 text-[1rem] font-medium block text-left transition-colors ${
                      isActive ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-[16px] flex flex-col gap-[8px] w-full">
              {/* Mobile primary CTA */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#2563eb] text-white text-center py-3 rounded-[8px] font-semibold text-[0.875rem] block w-full shadow-sm hover:bg-[#1d4ed8]"
              >
                Get started &rarr;
              </Link>
              {/* Mobile secondary CTA */}
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                className="bg-slate-900 border-[1.5px] border-slate-800 text-white text-center py-3 rounded-[8px] font-medium text-[0.875rem] block w-full hover:bg-slate-800"
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
