'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { Github, ExternalLink, Calendar, Star, ShieldCheck, Zap } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index?: number
  id?: string
}

export default function ProjectCard({ project, index = 0, id }: ProjectCardProps) {
  const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`

  return (
    <div
      id={id}
      className="bg-[#edf4fe] border-2 border-[#a5c3f7] rounded-[20px] overflow-hidden flex flex-col group hover:translate-y-[-6px] hover:shadow-[0_12px_0_0_#020409] transition-all duration-300 relative shadow-[0_6px_0_0_#020409]"
    >
      {/* BANNER (220px) — gradient */}
      <div
        className="h-[220px] p-6 relative flex flex-col justify-between overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        
        {/* Association & Category pill */}
        <div className="flex justify-between items-start z-10">
          <span className="bg-[#070b19]/90 backdrop-blur-md text-white border border-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors duration-300">
            <span>{project.associationIcon}</span>
            <span>{project.association}</span>
          </span>
          <div className="flex flex-col gap-1.5 items-end">
            {project.category.map((cat, ci) => (
              <span
                key={ci}
                className="bg-black/40 backdrop-blur-md text-white border border-white/10 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Project number (huge, opacity 0.08) */}
        <div className="absolute right-4 bottom-2 text-8xl font-black text-white/8 select-none pointer-events-none font-sans">
          {formattedIndex}
        </div>

        {/* Project Name (white, bold, bottom) */}
        <div className="z-10 mt-auto">
          <h4 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-tight line-clamp-2 drop-shadow-md">
            {project.shortTitle}
          </h4>
        </div>

        {/* QUICK INFO POPUP on card hover (covers banner) */}
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md text-white p-6 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[20px]">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs text-blue-400 font-bold tracking-widest uppercase mb-1">
              <Star className="w-3.5 h-3.5 fill-[#2563eb]" />
              <span>Project Details</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Real-time build
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Authenticated
              </span>
              <span className="flex items-center gap-1.5">
                🌐 Live & Deployed
              </span>
              {project.featured && (
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold col-span-2">
                  ★ Featured Project
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-4 border-t border-white/10 pt-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="flex-1 bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors duration-200"
              >
                <span>View Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors duration-200"
              >
                <span>See Code</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* BODY (28px padding) */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-900/60 text-xs font-mono font-bold">
            <Calendar className="w-3.5 h-3.5 text-blue-900/50" />
            <span>{project.duration}</span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-700 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="h-[1px] bg-blue-200/60 w-full my-1"></div>

          {/* Feature list (3 bullets ✦) */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase text-blue-900/60 tracking-wider">Key Highlights</span>
            <ul className="text-slate-700 text-xs space-y-1 font-normal">
              {project.features.slice(0, 3).map((feat, fi) => (
                <li key={fi} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-blue-600 font-bold">✦</span>
                  <span className="line-clamp-2">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-blue-200">
          {/* Tech tags flex-wrap. We light them up on hover! */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100/80 border border-blue-200 text-slate-800 text-xs px-2.5 py-0.5 rounded-[6px] font-medium transition-all duration-300 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-[#2563eb]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links raw fallback buttons */}
          <div className="flex justify-between items-center text-xs pt-1">
            <span className="text-blue-900/50 font-mono font-semibold">{formattedIndex}/08</span>
            <div className="flex items-center gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="text-blue-900/70 hover:text-blue-600 font-bold flex items-center gap-1 group-hover:underline transition-all"
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="text-blue-900/70 hover:text-blue-600 font-bold flex items-center gap-1 group-hover:underline transition-all"
                >
                  <span>Code</span>
                  <Github className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
