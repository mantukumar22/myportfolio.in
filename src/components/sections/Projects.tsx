'use client'

import React, { useState } from 'react'
import { projects, projectFilters } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    return project.category.map(c => c.toLowerCase()).includes(activeFilter.toLowerCase())
  })

  // Track item index in full list for proper serializing
  const getIndexInFullList = (projectId: string) => {
    return projects.findIndex(p => p.id === projectId)
  }

  return (
    <section id="projects" className="py-24 sm:py-32 bg-transparent border-b border-slate-900/10 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header content section info label */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <SectionLabel>03. PORTFOLIO SHOWCASE</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Crafted <span className="text-[#2563eb]">Projects &amp; Products</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Rearranged chronologically with my latest and most advanced Agentic AI systems first, followed by hackathon victories and robust MERN applications.
            </p>
          </div>

          {/* Interactive filter tabs (exact Deco tab style) */}
          <div className="flex bg-slate-950/80 border border-slate-850/80 rounded-[8px] p-1 self-start md:self-end overflow-x-auto whitespace-nowrap max-w-full scrollbar-none shrink-0 shadow-inner">
            {projectFilters.map((filter) => {
              const isActive = activeFilter.toLowerCase() === filter.id.toLowerCase()
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-[6px] text-[0.875rem] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2563eb] text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] font-semibold'
                      : 'text-slate-440 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Project grid container (2-column layout as requested) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const absoluteIndex = getIndexInFullList(project.id)
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} index={absoluteIndex} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-50 border border-slate-150 rounded-2xl">
            <p className="text-slate-400 font-medium">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
