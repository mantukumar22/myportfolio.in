'use client'

import React from 'react'
import { certifications } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import CertCard from '@/components/ui/CertCard'

export default function Certifications() {
  return (
    <section id="certs" className="py-24 sm:py-32 bg-[#f9fafb] border-b border-[#e5e7eb] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header descriptions label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>08. CERTIFICATIONS &amp; PROGRAMS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Key Workshops &amp; <span className="text-[#2563eb]">Verifications</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
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
