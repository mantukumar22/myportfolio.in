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
      className="relative pl-8 pb-10 border-l border-slate-800 last:pb-0 font-sans"
    >
      {/* Circle decorator in Deco blue */}
      <span className="absolute left-[-9px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-950 border border-[#2563eb] z-10">
        <span className="h-2 w-2 rounded-full bg-[#2563eb] animate-pulse"></span>
      </span>

      <div className="bg-[#edf4fe] p-6 sm:p-7 border-2 border-[#a5c3f7] rounded-[20px] shadow-[0_6px_0_0_#020409] hover:translate-y-[-6px] hover:shadow-[0_12px_0_0_#020409] transition-all duration-300">
        {/* Title details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-4 border-b border-blue-200">
          <div>
            <span className="text-[11px] font-mono font-bold text-blue-700 tracking-wider bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
              {item.type}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 tracking-tight">
              {item.role}
            </h3>
            <p className="text-slate-800 font-semibold text-sm">{item.company}</p>
          </div>
          <div className="text-xs text-black space-y-1.5 md:text-right font-semibold">
            <div className="flex items-center gap-1.5 md:justify-end">
              <Calendar className="w-3.5 h-3.5 text-slate-900/80" />
              <span className="text-black">{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5 md:justify-end">
              <MapPin className="w-3.5 h-3.5 text-slate-900/80" />
              <span className="text-black">{item.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="text-slate-700 text-sm space-y-2 list-disc pl-5 mb-5 font-normal">
          {item.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>

        {/* Dynamic skills tagged */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-blue-200">
          {item.skills.map((s, i) => (
            <span
              key={i}
              className="bg-white border border-blue-200 text-black text-xs px-2.5 py-1 rounded-[6px] font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
