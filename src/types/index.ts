export interface PersonalInfo {
  name: string
  firstName: string
  initials: string
  title: string
  tagline: string
  location: string
  email: string
  github: string
  linkedin: string
  instagram: string
  bio: string[]
  stats: Stat[]
  statusBadges: StatusBadge[]
  typingTexts: string[]
}

export interface Stat {
  value: string
  label: string
}

export interface StatusBadge {
  label: string
  color: 'green' | 'blue' | 'purple'
  emoji: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  bgColor: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  shortTitle: string
  duration: string
  association: string
  associationIcon: string
  category: string[]
  description: string
  features: string[]
  techStack: string[]
  gradient: string
  liveDemo?: string
  github?: string
  featured: boolean
  slug: string
  thumbnail: string
  screenshots: string[]
  seoDescription: string
  githubUrl?: string
  liveUrl?: string
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  type: string
  period: string
  location: string
  current: boolean
  bullets: string[]
  skills: string[]
}

export interface HackathonEntry {
  id: string
  badge: string
  badgeColor: string
  event: string
  organizer: string
  duration: string
  location: string
  role: string
  description: string
  skills: string[]
  github?: string
  cert?: string
}

export interface InternshipData {
  company: string
  companyInitials: string
  role: string
  type: string
  duration: string
  location: string
  status: string
  bullets: string[]
  projects: string[]
  skills: string[]
  hackathons: HackathonEntry[]
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface FreelanceData {
  title: string
  description: string
  stats: { value: string; label: string }[]
  terminalLines: string[]
  services: Service[]
  process: ProcessStep[]
}

export interface EducationEntry {
  id: string
  badge: string
  degree: string
  specialization?: string
  institution: string
  period: string
  score?: string
  status?: string
  color: string
  highlights: string[]
  quote?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  expiry?: string
  credentialId?: string
  skills?: string[]
  link?: string
  prestigious?: boolean
  color: string
}

export interface NavLink {
  label: string
  href: string
}
