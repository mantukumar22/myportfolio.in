'use client'

import React, { useEffect } from 'react'
import { SEOMetadata, updateMetaTags } from '@/lib/seo'

interface SEOProps extends SEOMetadata {
  children?: React.ReactNode
}

export default function SEO({ title, description, keywords, ogType, ogImage, slug, children }: SEOProps) {
  useEffect(() => {
    updateMetaTags({
      title,
      description,
      keywords,
      ogType,
      ogImage,
      slug
    })
  }, [title, description, keywords, ogType, ogImage, slug])

  return <>{children}</>
}
