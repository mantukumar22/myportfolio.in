'use client'

import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from '@/data'
import { Project } from '@/types'
import SEO from '@/components/layout/SEO'
import SectionLabel from '@/components/ui/SectionLabel'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Cpu, Sparkles, CheckCircle2, LayoutGrid } from 'lucide-react'

export default function ProjectDetailRoute() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mimic real fetch delays to show beautiful loading state
    const timer = setTimeout(() => {
      const found = projects.find((p) => p.slug === slug)
      setProject(found || null)
      setLoading(false)
    }, 450)

    return () => clearTimeout(timer)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
        />
        <p className="text-xs font-mono text-blue-900/60 uppercase tracking-widest animate-pulse">
          Retrieving Stack Manifest...
        </p>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-24 text-center space-y-6">
        <div className="text-6xl">🔍</div>
        <h2 className="text-2xl font-black text-white">Project Manifest Empty</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          The requested engineering record doesn't exist or is not cataloged in our primary databases.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-semibold text-xs px-5 py-3 rounded-lg bg-[#2563eb] text-white uppercase tracking-wider shadow-sm hover:bg-blue-600 hover:scale-102 active:scale-98 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Archives
        </Link>
      </div>
    )
  }

  const githubLink = project.githubUrl || project.github
  const liveLink = project.liveUrl || project.liveDemo

  return (
    <SEO
      title={project.shortTitle}
      description={project.seoDescription || project.description}
      keywords={project.techStack}
      slug={`projects/${project.slug}`}
      ogImage={project.thumbnail}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-8 pb-24 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-900/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Archives
          </Link>
          <span className="text-xs font-mono text-blue-900/50">
            SYSTEM_ID // {project.id.toUpperCase()}
          </span>
        </div>

        {/* Dynamic Showcase Heading block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Cover & Gallery Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-[24px] overflow-hidden border-2 border-slate-800 shadow-[0_8px_0_0_#020409]">
              <OptimizedImage
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-video"
                fallbackSrc="https://picsum.photos/seed/full-view/1920/1080"
              />
            </div>

            {/* Screenshots collection if any */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-900/60 tracking-wider flex items-center gap-1.5 pl-1">
                  <LayoutGrid className="w-3.5 h-3.5" /> Display Board Panels
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {project.screenshots.map((screen, idx) => (
                    <div key={idx} className="rounded-[16px] overflow-hidden border border-slate-800 bg-[#edf4fe]/20">
                      <OptimizedImage
                        src={screen}
                        alt={`${project.title} Screenshot - ${idx + 1}`}
                        className="w-full h-full aspect-video"
                        fallbackSrc={`https://picsum.photos/seed/view-${idx}/800/450`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details & Specifications Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <span>{project.associationIcon}</span>
                <span>{project.association}</span>
              </span>
              
              <h1 className="text-2xl sm:text-3.5xl font-extrabold text-white leading-tight tracking-tight">
                {project.title}
              </h1>

              <p className="text-xs text-slate-400 leading-relaxed font-mono font-bold flex items-center gap-2">
                <span>📅 DURATION:</span>
                <span className="text-slate-200">{project.duration}</span>
              </p>
            </div>

            {/* Description card */}
            <div className="bg-[#0e162d] border border-[#1f2a4f] rounded-[20px] p-6 space-y-4 shadow-[0_6px_0_0_#020409] text-white">
              <h3 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest">// ARCHITECTURAL SPECIFICATION</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed antialiased">
                {project.description}
              </p>
            </div>

            {/* Link out buttons */}
            <div className="flex flex-wrap gap-4">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold text-xs px-5 py-3 rounded-lg bg-[#2563eb] text-white hover:bg-blue-600 transition-all uppercase tracking-wider text-center shadow-md cursor-pointer"
                >
                  Visit Live Web <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-medium text-xs px-5 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wider text-center cursor-pointer"
                >
                  Verify Source <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Feature Highlights section & Tech stack elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-slate-900/20">
          
          {/* Key Checklist Features mapping */}
          <div className="lg:col-span-7 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 shadow-[0_6px_0_0_#020409] space-y-6 text-slate-900">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600 animate-pulse" /> Core Functional Highlights
            </h3>
            
            <ul className="grid grid-cols-1 gap-4 text-xs sm:text-sm">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/50 border border-blue-200/50 p-3 rounded-[12px] leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Technologies */}
          <div className="lg:col-span-5 bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[24px] p-8 shadow-[0_6px_0_0_#020409] space-y-6 text-slate-900">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffd200]" /> Technology Integration Stacks
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white border-2 border-blue-200 text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-[10px] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-blue-200 text-[11px] text-slate-600 leading-relaxed font-normal">
              These modular subsystems were thoroughly verified using automated test suites and strictly typed contracts to ensure high operational load-handling.
            </div>
          </div>
        </div>
      </div>
    </SEO>
  )
}
