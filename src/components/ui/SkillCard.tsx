'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SkillCategory } from '@/types'

interface SkillCardProps {
  category: SkillCategory
  id?: string
  key?: string | number
}

export default function SkillCard({ category, id }: SkillCardProps) {
  const skillImages: Record<string, string> = {
    frontend: 'https://images.unsplash.com/photo-1541462608141-2f58c4809a57?q=80&w=600',
    backend: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600',
    ai: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600',
    database: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600',
    tools: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600'
  }

  const bgImage = skillImages[category.id] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600'

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`p-6 rounded-2xl border ${category.bgColor} shadow-sm backdrop-blur-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
    >
      {/* Blended Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 group-hover:scale-105 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          opacity: 0.3,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Visual background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none z-0" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{category.icon}</span>
          <h3 className={`text-lg font-bold ${category.color}`}>
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
