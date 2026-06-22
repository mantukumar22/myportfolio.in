'use client'

import React from 'react'
import FeatureCard from '@/components/ui/FeatureCard'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Features() {
  const cardsData = [
    {
      icon: '⚡',
      iconBg: '#fef3c7',
      title: 'Fast Delivery',
      description: 'I ship production-ready code quickly without sacrificing quality, optimization, or core accessibility.',
      stack: 'Vite · ESBuild · SWC',
    },
    {
      icon: '💻',
      iconBg: '#fce7f3',
      title: 'Clean Codebase',
      description: 'Every project follows clean server-client architectures, structured files, and pristine folder conventions.',
      stack: 'TS · ESLint · Prettier',
    },
    {
      icon: '⭐',
      iconBg: '#dbeafe',
      title: 'Built with Care',
      description: 'From micro-interactions and smooth loaders to edge-case server queries — every pixel and query is intentional.',
      stack: 'Framer Motion · Tailwind',
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-24 bg-white font-sans border-b border-[#f3f4f6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Header descriptions label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>Core Disciplines</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Designed for <span className="text-[#2563eb]">Speed &amp; Adaptability</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
            I continuously verify and sharpen my technical standards to build highly responsive, secure, and production-ready applications.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {cardsData.map((card, idx) => (
            <FeatureCard
              key={idx}
              icon={card.icon}
              iconBg={card.iconBg}
              title={card.title}
              description={card.description}
              stack={card.stack}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
