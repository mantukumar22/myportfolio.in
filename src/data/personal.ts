import { PersonalInfo, NavLink } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Mantu Kumar',
  firstName: 'Mantu',
  initials: 'MK',
  title: 'Full Stack Developer | Agentic AI Developer',
  tagline: 'Built Agentic AI & 5+ Startup Websites | BCA\'27',
  location: 'Patna, Bihar, India',
  email: 'mantuforwork@gmail.com',
  github: 'https://github.com/mantukumar22',
  linkedin: 'https://linkedin.com/in/mantukumar22',
  instagram: 'https://instagram.com/amritcodes_',
  bio: [
    'I\'m a BCA student and Full Stack Developer from Patna who believes the best way to learn is by building real things — not just watching tutorials.',
    'From scalable MERN applications to Agentic AI tools, I\'ve competed in 3 hackathons, built 8+ deployed projects, and currently interning at SkillFied Mentor while running my own freelance practice.',
  ],
  typingTexts: [
    'Full Stack Developer',
    'Agentic AI Developer',
    'MERN Stack Engineer',
    'Hackathon Winner',
    'UI Craftsman',
  ],
  stats: [
    { value: '2,554+', label: 'Followers' },
    { value: '500+', label: 'Connections' },
    { value: '8+', label: 'Projects' },
    { value: '3', label: 'Hackathons' },
  ],
  statusBadges: [
    { label: 'Open to Work', color: 'green', emoji: '🟢' },
    { label: 'Freelance Ready', color: 'blue', emoji: '💼' },
    { label: 'Intern Ready', color: 'purple', emoji: '🎓' },
  ],
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Internship', href: '#internship' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Certs', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]
