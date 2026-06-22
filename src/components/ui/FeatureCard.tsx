'use client'

import React from 'react'

interface FeatureCardProps {
  icon: string | React.ReactNode
  iconBg: string
  title: string
  description: string
  stack: string
  id?: string
  key?: string | number
}

export default function FeatureCard({ icon, iconBg, title, description, stack, id }: FeatureCardProps) {
  return (
    <div
      id={id}
      className="border border-[#e5e7eb] rounded-[20px] p-8 bg-white relative transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2 hover:border-[#2563eb] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] group flex flex-col justify-between min-h-[220px]"
    >
      <div className="space-y-6">
        {/* Icon Box */}
        <div
          className="w-12 h-12 rounded-[12px] flex items-center justify-center font-bold text-xl select-none"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        {/* Text Area */}
        <div className="space-y-2">
          <h4 className="font-extrabold text-[#0f0f1a] text-lg leading-snug">
            {title}
          </h4>
          <p className="text-[#6b7280] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Floating Tooltip Above Card on Hover */}
      <div className="absolute opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-30">
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-xs text-slate-700 whitespace-nowrap text-center relative">
          <p className="font-extrabold text-[#2563eb] mb-0.5">✦ Click to learn more</p>
          <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">{stack}</p>

          {/* Indicator Arrow */}
          <div className="absolute w-2.5 h-2.5 bg-white border-r border-[#e5e7eb] border-b rotate-45 top-full left-1/2 -translate-x-1/2 -mt-1.5 z-20"></div>
        </div>
      </div>
    </div>
  )
}
