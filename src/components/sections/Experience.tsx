'use client'

import React from 'react'
import { experiences } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import TimelineItem from '@/components/ui/TimelineItem'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#f9fafb] border-b border-[#e5e7eb] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header information label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>04. PROFESSIONAL PATHWAY</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Work &amp; Hackathon <span className="text-[#2563eb]">Timeline</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
            From remote MERN stack internships to fast-paced 6-hour hackathons led as a Team Leader under intense developer limits.
          </p>
        </div>

        {/* Timeline wrapper container */}
        <div className="max-w-4xl mx-auto pl-2">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              item={experience}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
