'use client'

import React from 'react'
import { certifications } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import CertCard from '@/components/ui/CertCard'

export default function Certifications() {
  return (
    <section id="certs" className="py-24 sm:py-32 bg-transparent border-b border-slate-900/10 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header descriptions label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>08. CERTIFICATIONS &amp; PROGRAMS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Key Workshops &amp; <span className="text-blue-400">Verifications</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I continuously verify my credentials through online programs, university workshops (including IIT Kanpur Techkriti), and Google Developer Group tech camps.
          </p>
        </div>

        {/* Certifications cards mapped listed in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <CertCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  )
}
