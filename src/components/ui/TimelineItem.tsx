'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceEntry } from '@/types'
import { Calendar, MapPin } from 'lucide-react'

interface TimelineItemProps {
  item: ExperienceEntry
  index: number
  id?: string
  key?: string | number
}

export default function TimelineItem({ item, index, id }: TimelineItemProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-8 pb-10 border-l border-[#e5e7eb] last:pb-0 font-sans"
    >
      {/* Circle decorator in Deco blue */}
      <span className="absolute left-[-9px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-50 border border-[#2563eb] z-10">
        <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse"></span>
      </span>

      <div className="bg-white p-6 sm:p-7 border border-[#e5e7eb] rounded-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
        {/* Title details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#2563eb] tracking-wider bg-blue-50 px-2.5 py-0.5 rounded uppercase">
              {item.type}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0f0f1a] mt-2 tracking-tight">
              {item.role}
            </h3>
            <p className="text-slate-500 font-semibold text-sm">{item.company}</p>
          </div>
          <div className="text-xs text-slate-400 space-y-1.5 md:text-right font-medium">
            <div className="flex items-center gap-1.5 md:justify-end">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5 md:justify-end">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="text-slate-650 text-sm space-y-2 list-disc pl-5 mb-5 font-normal">
          {item.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>

        {/* Dynamic skills tagged */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {item.skills.map((s, i) => (
            <span
              key={i}
              className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-[6px] font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
