import React from 'react'

interface StatusBadgeProps {
  label: string
  color: 'green' | 'blue' | 'purple'
  emoji: string
  id?: string
  key?: string | number
}

export default function StatusBadge({ label, color, emoji, id }: StatusBadgeProps) {
  const colorMap = {
    green: {
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pulse: 'bg-emerald-500',
    },
    blue: {
      bg: 'bg-blue-50 text-blue-700 border-blue-200',
      pulse: 'bg-blue-500',
    },
    purple: {
      bg: 'bg-purple-50 text-purple-700 border-purple-200',
      pulse: 'bg-purple-500',
    },
  }

  const selected = colorMap[color] || colorMap.blue

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${selected.bg} hover:scale-105 transition-all cursor-default shadow-xs`}
    >
      <span className="text-sm">{emoji}</span>
      <span>{label}</span>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selected.pulse}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${selected.pulse}`}></span>
      </span>
    </div>
  )
}
