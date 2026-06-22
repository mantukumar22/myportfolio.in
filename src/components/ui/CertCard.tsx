'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Certification } from '@/types'
import { Award, ExternalLink, Calendar, Key } from 'lucide-react'

interface CertCardProps {
  certification: Certification
  id?: string
  key?: string | number
}

export default function CertCard({ certification, id }: CertCardProps) {
  const getBadgeColors = (color: string) => {
    switch (color) {
      case 'orange':
        return 'border-orange-200 bg-orange-50 text-orange-700'
      case 'blue':
        return 'border-blue-200 bg-blue-50 text-[#2563eb]'
      case 'indigo':
        return 'border-indigo-200 bg-indigo-50 text-[#2563eb]'
      case 'purple':
        return 'border-purple-200 bg-purple-50 text-purple-700'
      case 'green':
        return 'border-emerald-200 bg-emerald-50 text-emerald-700'
      case 'yellow':
        return 'border-amber-200 bg-amber-50 text-amber-700'
      case 'teal':
        return 'border-teal-200 bg-teal-50 text-teal-700'
      default:
        return 'border-[#e5e7eb] bg-slate-50 text-slate-600'
    }
  }

  const badgeColors = getBadgeColors(certification.color)

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="p-6 bg-white border border-[#e5e7eb] rounded-[20px] flex flex-col justify-between hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 group font-sans"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className={`p-2.5 rounded-[10px] border ${badgeColors}`}>
            <Award className="w-5 h-5 text-[#2563eb]" />
          </div>
          {certification.prestigious && (
            <span className="bg-rose-50 border border-rose-200 text-rose-600 px-2.5 py-0.5 rounded-[6px] text-[9px] font-bold tracking-wider uppercase font-mono">
              ★ Prestigious
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-extrabold text-[#0f0f1a] text-[#0f0f1a] group-hover:text-[#2563eb] transition-colors duration-200 text-base leading-snug line-clamp-2">
            {certification.title}
          </h3>
          <p className="text-xs font-bold text-[#2563eb] tracking-wide uppercase font-mono">{certification.issuer}</p>
        </div>

        <div className="space-y-1.5 pt-1 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Issued: {certification.date}</span>
          </div>
          {certification.credentialId && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
              <Key className="w-3.5 h-3.5 text-[#2563eb]" />
              <span className="truncate">ID: {certification.credentialId}</span>
            </div>
          )}
        </div>

        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-50 text-slate-650 text-[10px] px-2 py-0.5 rounded-[4px] border border-slate-100 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {certification.link && (
        <div className="pt-4 border-t border-slate-100 mt-4 flex justify-end">
          <a
            href={certification.link}
            target="_blank"
            rel="noreferrer referrerPolicy"
            className="text-xs font-bold text-[#2563eb] hover:text-blue-800 flex items-center gap-1 hover:underline transition-all"
          >
            <span>Verify Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </motion.div>
  )
}
