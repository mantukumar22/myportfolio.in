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
        return 'border-orange-200 bg-orange-100 text-orange-900'
      case 'blue':
        return 'border-blue-200 bg-blue-105 text-blue-800'
      case 'indigo':
        return 'border-indigo-200 bg-indigo-100 text-indigo-800'
      case 'purple':
        return 'border-purple-200 bg-purple-100 text-purple-800'
      case 'green':
        return 'border-emerald-250 bg-emerald-100 text-emerald-800'
      case 'yellow':
        return 'border-amber-250 bg-amber-100 text-amber-900'
      case 'teal':
        return 'border-teal-250 bg-teal-100 text-teal-900'
      default:
        return 'border-blue-200 bg-blue-100 text-slate-800'
    }
  }

  const badgeColors = getBadgeColors(certification.color)

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="p-6 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] flex flex-col justify-between shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300 group font-sans text-slate-900"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className={`p-2.5 rounded-[10px] border ${badgeColors}`}>
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          {certification.prestigious && (
            <span className="bg-rose-100 border border-rose-200 text-rose-800 px-2.5 py-0.5 rounded-[6px] text-[9px] font-bold tracking-wider uppercase font-mono shadow-xs">
              ★ Prestigious
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 text-base leading-snug line-clamp-2">
            {certification.title}
          </h3>
          <p className="text-xs font-bold text-blue-600 tracking-wide uppercase font-mono">{certification.issuer}</p>
        </div>

        <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-900/50" />
            <span>Issued: {certification.date}</span>
          </div>
          {certification.credentialId && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-900/60">
              <Key className="w-3.5 h-3.5 text-blue-600" />
              <span className="truncate">ID: {certification.credentialId}</span>
            </div>
          )}
        </div>

        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="bg-white text-slate-800 text-[10px] px-2 py-0.5 rounded-[4px] border border-blue-200 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {certification.link && (
        <div className="pt-4 border-t border-blue-200 mt-4 flex justify-end">
          <a
            href={certification.link}
            target="_blank"
            rel="noreferrer referrerPolicy"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline transition-all"
          >
            <span>Verify Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </motion.div>
  )
}
