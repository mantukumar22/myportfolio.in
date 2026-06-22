import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function SectionLabel({ children, id, className = '' }: SectionLabelProps) {
  return (
    <div id={id} className={`section-label flex items-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full inline-block animate-pulse"></span>
      <span>{children}</span>
    </div>
  )
}
