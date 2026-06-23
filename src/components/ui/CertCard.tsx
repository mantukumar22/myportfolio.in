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

  const certImages: Record<string, string> = {
    'iit-kanpur': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600',
    'apl-gdg-patna': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600',
    'gdg-build-ai': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600',
    techphilia: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600',
    'gfg-agent': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600',
    be10x: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=600',
    'web-beginners': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600'
  }

  const bgImage = certImages[certification.id] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600'

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="p-6 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] flex flex-col justify-between shadow-[0_6px_0_0_#020409] hover:translate-y-[-4px] hover:shadow-[0_10px_0_0_#020409] transition-all duration-300 group font-sans text-slate-900 relative overflow-hidden"
    >
      {/* Blended Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 group-hover:scale-105 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          opacity: 0.35,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Visual background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 pointer-events-none z-0" />

      <div className="space-y-4 relative z-10 w-full flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
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

          <div className="space-y-1.5 pt-2.5 text-xs text-slate-700 font-medium">
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
            <div className="flex flex-wrap gap-1 pt-3">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/80 text-slate-800 text-[10px] px-2 py-0.5 rounded-[4px] border border-blue-200 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {certification.link && (
          <div className="pt-4 border-t border-blue-200 mt-4 flex justify-end relative z-20">
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
      </div>
    </motion.div>
  )
}
