'use client'

import React, { useState } from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
  fallbackSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fallbackSrc = 'https://picsum.photos/seed/portfolio-item/800/450',
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    // If the image fails to load (e.g., local file not present yet), fallback safely
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900/40 rounded-[12px] ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d152a] animate-pulse">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
          loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        {...props}
      />
    </div>
  )
}
