'use client'

import React from 'react'
import FeatureCard from '@/components/ui/FeatureCard'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Features() {
  const cardsData = [
    {
      icon: '⚡',
      iconBg: '#d97706',
      title: 'Fast Delivery',
      description: 'I ship production-ready code quickly without sacrificing quality, optimization, or core accessibility.',
      stack: 'Vite · ESBuild · SWC',
      bgImage: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=600&auto=format&fit=crop',
    },
    {
      icon: '💻',
      iconBg: '#db2777',
      title: 'Clean Codebase',
      description: 'Every project follows clean server-client architectures, structured files, and pristine folder conventions.',
      stack: 'TS · ESLint · Prettier',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    },
    {
      icon: '⭐',
      iconBg: '#2563eb',
      title: 'Built with Care',
      description: 'From micro-interactions and smooth loaders to edge-case server queries — every pixel and query is intentional.',
      stack: 'Framer Motion · Tailwind',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-24 bg-transparent font-sans border-b border-slate-900/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Header descriptions label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>Core Disciplines</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Designed for <span className="text-blue-400">Speed &amp; Adaptability</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
              bgImage={card.bgImage}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
