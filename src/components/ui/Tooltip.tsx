'use client'

import React, { useState } from 'react'

interface TooltipProps {
  content: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

export function Tooltip({ content, position = 'top', children }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)
  const handleTouchStart = (e: React.TouchEvent) => {
    // Toggle on mobile touch
    setIsOpen(!isOpen)
  }

  return (
    <div 
      className="relative group inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {children}
      <div className={`
        absolute z-50 pointer-events-none
        transition-all duration-200 ease-out
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        ${position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2.5' : ''}
        ${position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2.5' : ''}
        ${position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2.5' : ''}
        ${position === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2.5' : ''}
      `}>
        <div className="bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2 shadow-2xl text-xs sm:text-sm whitespace-nowrap z-50">
          {content}
        </div>
        {/* Arrow */}
        <div className={`
          absolute w-2.5 h-2.5 bg-slate-900 rotate-45 z-40
          ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1.5 border-r border-b border-slate-950' : ''}
          ${position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1.5 border-l border-t border-slate-950' : ''}
          ${position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-1.5 border-t border-r border-slate-950' : ''}
          ${position === 'right' ? 'right-full top-1/2 -translate-y-1/2 -mr-1.5 border-b border-l border-slate-950' : ''}
        `} />
      </div>
    </div>
  )
}
