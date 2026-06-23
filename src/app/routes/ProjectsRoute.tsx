'use client'

import React, { useState } from 'react'
import { projects, projectFilters } from '@/data'
import SEO from '@/components/layout/SEO'
import SectionLabel from '@/components/ui/SectionLabel'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Github, ExternalLink, SlidersHorizontal, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectsRoute() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === 'all' ||
      project.category.map((c) => c.toLowerCase()).includes(activeFilter.toLowerCase())
    
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <SEO
      title="Engineering Project Catalog"
      description="Database of Mantu Kumar's engineered platforms, ranging from Agentic AI cricket systems to deep web systems with charts, live tickers, and real-time audio channels."
      keywords={['Vite Portfolio Project Drawer', 'Full Stack Project lists', 'AI developer Patna', 'React product portfolio']}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-12 pb-24 space-y-16">
        
        {/* Page title and narrative banner */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel>03. REPOSITORY DRAWERS</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Codebase &amp; <span className="text-[#2563eb]">Products Archive</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive, filtered catalog of applications detailing the engineering decisions, API parameters, structural states, and code links.
          </p>
        </div>

        {/* Filter controls, dynamic search panel */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-[#0e162d]/50 border-2 border-[#1f2a4f] rounded-[24px] p-6 shadow-[0_6px_0_0_#020409]">
          
          {/* Dynamic Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-900/60" />
            <input
              type="text"
              placeholder="Search code, tech stacks, databases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/65 border border-[#1f2a4f] rounded-[10px] pl-10 pr-4 py-2.5 text-xs text-white placeholder-blue-900/50 focus:outline-hidden focus:ring-2 focus:ring-blue-900/50 transition-all font-medium"
            />
          </div>

          {/* Interactive filter tabs */}
          <div className="flex bg-slate-950/80 border border-slate-850/80 rounded-[10px] p-1 overflow-x-auto whitespace-nowrap scrollbar-none gap-1">
            {projectFilters.map((filter) => {
              const isActive = activeFilter.toLowerCase() === filter.id.toLowerCase()
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-[8px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2563eb] text-white shadow-md'
                      : 'text-blue-900/60 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Project display board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] overflow-hidden flex flex-col justify-between shadow-[0_6px_0_0_#020409] hover:translate-y-[-6px] hover:shadow-[0_12px_0_0_#020409] transition-all duration-350 group relative text-slate-900"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-[180px] w-full overflow-hidden border-b border-blue-200">
                  <OptimizedImage
                    src={project.thumbnail}
                    alt={project.title}
                    fallbackSrc="https://picsum.photos/seed/project-view/800/450"
                    className="w-full h-full rounded-none"
                  />
                  
                  {/* Category badging */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-20">
                    {project.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-950/90 border border-slate-800 text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider block text-center"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Association sticker */}
                  <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-slate-800 text-white px-2.5 py-1 rounded-md text-[10px] font-bold shadow-xs flex items-center gap-1.5">
                    <span>{project.associationIcon}</span>
                    <span>{project.association}</span>
                  </div>
                </div>

                {/* Narrative content block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-blue-900/50 uppercase tracking-widest font-mono font-bold block">
                      {project.duration}
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {project.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills lists */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 border border-blue-200 text-slate-850 text-[10px] px-2 py-0.5 rounded-[4px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="bg-blue-100 border border-blue-200 text-slate-850 text-[10px] px-2 py-0.5 rounded-[4px] font-semibold">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Direct details route trigger */}
                  <div className="pt-4 border-t border-blue-200 grid grid-cols-2 gap-2 text-xs">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-center transition-all shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" /> Specs
                    </Link>
                    
                    <div className="flex items-center justify-end gap-2.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer referrerPolicy"
                          className="hover:text-blue-600 text-blue-900/70 p-1"
                          aria-label="See source code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer referrerPolicy"
                          className="hover:text-blue-600 text-blue-900/70 p-1"
                          aria-label="Visit active deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty records condition */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#0e162d]/40 border-2 border-dashed border-[#1f2a4f] rounded-[24px]">
            <p className="text-slate-400 font-bold mb-2">No matching repositories indexed</p>
            <p className="text-xs text-slate-500">Try adjusting your active query or filters</p>
          </div>
        )}
      </div>
    </SEO>
  )
}
