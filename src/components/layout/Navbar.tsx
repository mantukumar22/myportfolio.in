'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, personalInfo } from '@/data'
import { ChevronDown, ArrowRight, User, Code2, LayoutGrid, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Filter links for matching the minimalist Deco.com nav links
  const allowedLabels = ['About', 'Skills', 'Projects', 'Contact']
  const filteredNavLinks = navLinks.filter(link => allowedLabels.includes(link.label))

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'about':
        return <User className="w-[20px] h-[20px]" />
      case 'skills':
        return <Code2 className="w-[20px] h-[20px]" />
      case 'projects':
        return <LayoutGrid className="w-[20px] h-[20px]" />
      case 'contact':
        return <Mail className="w-[20px] h-[20px]" />
      default:
        return null
    }
  }

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
    <>
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
          <Link to="/" className="flex items-center">
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
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[1000] bg-[#070b19] border border-white/15 px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <nav className="flex items-center justify-around max-w-md mx-auto">
          {filteredNavLinks.map((link) => {
            const targetPath = getRoutePath(link.label)
            const isActive = location.pathname === targetPath
            return (
              <Link
                key={link.label}
                to={targetPath}
                className={`flex flex-col items-center justify-center gap-1.5 py-1 px-3 rounded-xl transition-all duration-300 relative ${
                  isActive
                    ? 'text-blue-400 font-bold scale-105'
                    : 'text-slate-400 hover:text-white font-medium hover:scale-105'
                }`}
              >
                <div className="transition-transform duration-300">
                  {getIcon(link.label)}
                </div>
                <span className="text-[10px] tracking-wider font-semibold font-sans">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
