'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  number: string
  question: string
  answer: string
  isOpenDefault?: boolean
  key?: string | number
}

export default function FAQItem({ number, question, answer, isOpenDefault = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`border-t border-[#f3f4f6] py-5 px-4 cursor-pointer transition-all duration-350 select-none group rounded-[12px] ${
        !isOpen ? 'hover:bg-[#f8faff] hover:border-l-[4px] hover:border-l-[#2563eb] hover:pl-3 pl-4' : 'bg-slate-50/50'
      }`}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[#2563eb] font-extrabold text-[#0.875rem] font-mono shrink-0">
            {number}
          </span>
          <h4 className="font-bold text-[#0f0f1a] text-sm sm:text-base leading-snug transition-colors group-hover:text-[#2563eb]">
            {question}
          </h4>
        </div>

        {/* Rotate arrow */}
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#2563eb]' : ''
          }`}
        />
      </div>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#6b7280] text-[0.95rem] leading-relaxed pt-3 pl-9 pr-2 font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
