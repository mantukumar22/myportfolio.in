'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  href?: string
  id?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  id,
  className = '',
  type = 'button',
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-[#2563eb] border border-transparent text-white duration-200 hover:bg-[#1d4ed8] active:bg-[#1e40af]'
      : 'bg-white border border-[#e5e7eb] text-[#0f0f1a] duration-200 hover:bg-[#f9fafb] active:bg-[#f1f5f9]'

  const content = (
    <motion.button
      type={type}
      id={id}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base rounded-[8px] px-5 py-2.5 transition-all cursor-pointer ${styles} ${className}`}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return content
}
