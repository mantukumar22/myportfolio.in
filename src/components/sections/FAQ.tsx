'use client'

import React, { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import FAQItem from '@/components/ui/FAQItem'

type TabType = 'general' | 'projects' | 'ai' | 'hire'

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<TabType>('general')

  const tabs: { id: TabType; label: string }[] = [
    { id: 'general', label: 'General' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai', label: 'AI Work' },
    { id: 'hire', label: 'Hire Me' },
  ]

  const faqData: Record<TabType, { q: string; a: string; defaultOpen?: boolean }[]> = {
    general: [
      {
        q: 'What kind of projects do you build?',
        a: 'I build full-stack web applications with the MERN stack — from e-commerce clones to real-time video platforms — as well as AI-powered tools using Gemini API, LangChain, and agentic frameworks.',
      },
      {
        q: 'Are you available for freelance work?',
        a: 'Yes! I\'m actively looking for freelance and full-time opportunities. I\'m based in Greater Patna but work fully remotely. Typical response time is under 24 hours. Reach out via the contact form or email directly.',
        defaultOpen: true,
      },
      {
        q: 'What AI tools and frameworks do you use?',
        a: 'I work with Google AI Studio, Gemini API, OpenAI API, LangChain, Claude Agent SDK, and Antigravity IDE. I build agentic workflows, AI integrations, and LLM-powered features for web applications.',
      },
      {
        q: 'Have you won any hackathons?',
        a: 'I\'ve participated in 3 hackathons — GDG Patna APL, GDG Ranchi APL (as Team Leader), and PromptNexus Techphilia 9.0 (as Team Leader). I\'ve built AI-powered products in each under tight deadlines.',
      },
    ],
    projects: [
      {
        q: 'Which is your most complex project?',
        a: 'Smart-Krypton & Project Agentic are my most complex solutions. They utilize semantic triggers, LLMs, and real-time state synchronization.',
        defaultOpen: true,
      },
      {
        q: 'Are all projects deployed and live?',
        a: 'Yes, all 8+ repositories have live URLs running on modern static and stateful services like Vercel, Render, or Netlify.',
      },
      {
        q: 'Can I see the source code?',
        a: 'Absolutely! All source configurations, clean folders, and custom modules are accessible on Mantu\'s public GitHub profile.',
      },
    ],
    ai: [
      {
        q: 'What is Agentic AI?',
        a: 'Agentic AI is a system design paradigm where language models act as autonomous agents with tool access (APIs, search, databases) to perform compound actions and solve multi-step problems.',
        defaultOpen: true,
      },
      {
        q: 'Have you built production AI apps?',
        a: 'Yes, I built multiple prompt-nexus products utilizing Google AI Studio, Gemini Flash models, custom system instructions, and semantic grounding.',
      },
      {
        q: 'Which LLM APIs have you used?',
        a: 'I have extensive experience with @google/genai SDK, Gemini Flash, OpenAI GPT-4o, and Anthropic Claude SDKs.',
      },
    ],
    hire: [
      {
        q: 'What is your availability?',
        a: 'I am open for immediate developer internships, contract freelance scopes, and full-time junior engineer positions.',
        defaultOpen: true,
      },
      {
        q: 'Do you work remotely?',
        a: 'Yes! Mantu operates 100% remotely from Patna with robust asynchronous check-ins, high bandwidth, and structured timeline discipline.',
      },
      {
        q: 'What is your preferred stack?',
        a: 'Next.js App Router, React, Node.js, Express, MongoDB, TypeScript, combined with utility-first Tailwind CSS.',
      },
    ],
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white font-sans border-b border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
        
        {/* FAQ Container Box (exact Deco styling: max-w 800px) */}
        <div className="max-w-[800px] mx-auto bg-white border border-[#e5e7eb] rounded-[24px] p-6 sm:p-12 shadow-sm space-y-8">
          
          <div className="space-y-3 text-center">
            <div className="flex justify-center">
              <SectionLabel>FAQ MODULE</SectionLabel>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Tab row (exact Deco pill tabs: inline-flex, centered, gap 4px, margin 24px 0) */}
          <div className="flex justify-center py-2">
            <div className="inline-flex bg-[#f3f4f6] rounded-full p-1 gap-1 overflow-x-auto whitespace-nowrap max-w-full scrollbar-none">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#2563eb] text-white shadow-md'
                        : 'text-[#6b7280] hover:text-[#0f0f1a]'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Accordion List mapping with key dependent on active tab so state refreshes appropriately */}
          <div className="space-y-4 pt-4" key={activeTab}>
            {faqData[activeTab].map((item, idx) => {
              const formattedNum = idx < 9 ? `0${idx + 1}` : `${idx + 1}`
              return (
                <FAQItem
                  key={idx}
                  number={formattedNum}
                  question={item.q}
                  answer={item.a}
                  isOpenDefault={!!item.defaultOpen}
                />
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
