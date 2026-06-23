'use client'

import React from 'react'

interface FeatureCardProps {
  icon: string | React.ReactNode
  iconBg: string
  title: string
  description: string
  stack: string
  bgImage?: string
  id?: string
  key?: string | number
}

export default function FeatureCard({ icon, iconBg, title, description, stack, bgImage, id }: FeatureCardProps) {
  return (
    <div
      id={id}
      className="border-2 border-[#a5c3f7] rounded-[20px] p-8 bg-[#edf4fe] relative overflow-hidden transition-all duration-300 hover:translate-y-[-6px] shadow-[0_6px_0_0_#020409] hover:shadow-[0_12px_0_0_#020409] group flex flex-col justify-between min-h-[220px]"
    >
      {/* Blended Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 group-hover:scale-105 pointer-events-none"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            opacity: 0.45,
            mixBlendMode: 'multiply'
          }}
        />
      )}
      
      {/* Visual content backdrop mesh to keep high contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none z-0" />

      <div className="space-y-6 relative z-10">
        {/* Icon Box */}
        <div
          className="w-12 h-12 rounded-[12px] flex items-center justify-center font-bold text-xl select-none bg-white border border-blue-200 shadow-xs"
          style={{ color: iconBg }}
        >
          {icon}
        </div>

        {/* Text Area */}
        <div className="space-y-2">
          <h4 className="font-extrabold text-slate-900 text-lg leading-snug">
            {title}
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Floating Tooltip Above Card on Hover */}
      <div className="absolute opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-30">
        <div className="bg-slate-950 border border-slate-800 rounded-[10px] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] text-xs text-slate-300 whitespace-nowrap text-center relative">
          <p className="font-extrabold text-blue-400 mb-0.5">✦ Click to learn more</p>
          <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">{stack}</p>

          {/* Indicator Arrow */}
          <div className="absolute w-2.5 h-2.5 bg-slate-950 border-r border-slate-800 border-b rotate-45 top-full left-1/2 -translate-x-1/2 -mt-1.5 z-20"></div>
        </div>
      </div>
    </div>
  )
}
