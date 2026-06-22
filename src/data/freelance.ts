import { FreelanceData } from '@/types'

export const freelanceData: FreelanceData = {
  title: 'Building Digital Products for Clients',
  description:
    'I work directly with clients to design, develop, and deploy complete web solutions — from landing pages to full-stack applications with AI integrations.',
  stats: [
    { value: '1yr 5mo', label: 'Experience' },
    { value: '5+', label: 'Projects' },
    { value: 'MERN', label: 'Stack' },
    { value: 'Remote', label: 'Work Style' },
  ],
  terminalLines: [
    '> Status: AVAILABLE',
    '> Stack: MERN + AI',
    '> Response time: < 24hrs',
    '> Location: Remote (India)',
    '> Rate: Open to discussion_',
  ],
  services: [
    {
      icon: '🌐',
      title: 'Full Stack Web Apps',
      description:
        'End-to-end MERN applications with authentication, REST APIs, and database design.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Development',
      description:
        'Responsive, pixel-perfect interfaces using Tailwind CSS, MUI, and Bootstrap.',
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description:
        'Add LLM features to your product — chatbots, agents, and AI-powered workflows.',
    },
  ],
  process: [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your idea, goals, and technical requirements',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Wireframing UI and planning the system architecture',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Developing with clean, scalable, well-documented code',
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'Launching, testing, and handing over the live product',
    },
  ],
}
