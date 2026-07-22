import quickgptThumb from '../assets/images/projects/quickgpt-thumb.jpg';
import syncTroopThumb from '../assets/images/projects/synctroop-thumb.jpg';

/**
 * Featured engineering projects, rendered on the Work page.
 * Add a new object here to add a new card -- no component changes needed.
 */
export const projects = [
  {
    slug: 'quickgpt',
    title: 'QuickGPT',
    period: 'Dec 25 — Jan 26',
    description:
      'A high-performance LLM chat interface built to explore scalable file structure, modular code organisation, and third-party API integration end to end.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Gemini API', 'Stripe API'],
    image: quickgptThumb,
    github: 'https://quick-gptz.vercel.app/',
    live: '',
  },
  {
    slug: 'synctroop',
    title: 'SyncTroop',
    period: 'Mar 09 — May 12',
    description:
      'A productivity-focused task and focus-timer app blending a polished Pomodoro workflow with live rooms, task ownership, and real-time chat.',
    technologies: ['MERN', 'Socket.io', 'JWT', 'Tailwind CSS'],
    image: syncTroopThumb,
    github: 'https://synctroop.vercel.app/',
    live: '',
  },
];

export const openSource = {
  organization: 'Mathesar Foundation',
  program: 'Kalvium × Mathesar Open Source Contribution Program',
  description:
    'Contributed under mentorship from Mathesar engineers, collaborating with a global open-source team on UI flows, code reviews, and CI for the open-source database management tool.',
  tags: ['Svelte', 'Postgres', 'CI/CD'],
  stats: [
    { value: '500+', label: 'Lines Reviewed' },
    { value: '12', label: 'PRs Opened' },
    { value: '9', label: 'Week Sprint' },
    { value: '2', label: 'Months Active' },
  ],
  links: [
    { label: 'PR #1', href: 'https://github.com/Shashank-Venkatesh' },
    { label: 'PR #2', href: 'https://github.com/Shashank-Venkatesh' },
  ],
};
