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
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`p-6 rounded-2xl border ${category.bgColor} shadow-sm backdrop-blur-xs hover:shadow-md transition-all duration-300`}
    >
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
    </motion.div>
  )
}
