export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogType?: string
  ogImage?: string
  slug?: string
}

export function updateMetaTags(meta: SEOMetadata) {
  if (typeof window === 'undefined') return

  const siteUrl = window.location.origin
  const fullTitle = `${meta.title} | Mantu Kumar`
  
  // 1. Update Document Title
  document.title = fullTitle

  // 2. Helper to set/update meta tag
  const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name'
    let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, nameOrProperty)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  // 3. Standard SEO tags
  setMeta('description', meta.description)
  if (meta.keywords && meta.keywords.length > 0) {
    setMeta('keywords', meta.keywords.join(', '))
  } else {
    setMeta('keywords', 'Mantu Kumar, Full Stack Developer, AI Agent Developer, Agentic AI, React Engineer, WebRTC, Socket.IO, Patna Developers')
  }
  setMeta('author', 'Mantu Kumar')
  setMeta('robots', 'index, follow')

  // 4. Open Graph tag specifications
  setMeta('og:title', fullTitle, true)
  setMeta('og:description', meta.description, true)
  setMeta('og:type', meta.ogType || 'website', true)
  setMeta('og:url', meta.slug ? `${siteUrl}/${meta.slug}` : siteUrl, true)
  setMeta('og:image', meta.ogImage || `${siteUrl}/images/profile/mantu.jpg`, true)
  setMeta('og:site_name', 'Mantu Kumar Portfolio', true)

  // 5. Twitter Card tag specifications
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:title', fullTitle)
  setMeta('twitter:description', meta.description)
  setMeta('twitter:image', meta.ogImage || `${siteUrl}/images/profile/mantu.jpg`)
}
