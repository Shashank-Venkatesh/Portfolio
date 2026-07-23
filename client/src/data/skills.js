import { FiGitBranch, FiBox, FiCloud, FiCode, FiTerminal } from 'react-icons/fi';

export const languages = {
  title: 'Languages',
  description: 'Low-level & application logic foundations.',
  items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
};

export const stackColumns = [
  {
    title: 'Frontend',
    description: 'Client-side architecture.',
    items: ['React / Vite', 'Tailwind CSS', 'Framer Motion', 'React Router'],
  },
  {
    title: 'Backend',
    description: 'Server & logic systems.',
    items: ['Node.js / Express', 'REST APIs', 'JWT Auth', 'Socket.io'],
  },
];

export const tools = {
  title: 'Tools',
  description: 'DevOps & environment.',
  items: [
    { icon: FiGitBranch, name: 'Git / GitHub', note: 'Version control' },
    { icon: FiBox, name: 'Docker', note: 'Containerisation' },
    { icon: FiCloud, name: 'Render / Vercel', note: 'Deployment' },
    { icon: FiTerminal, name: 'Arch Linux', note: 'Environment' },
    { icon: FiCode, name: 'VS Code', note: 'Editor' },
  ],
};

export const databases = {
  title: 'Databases',
  description: 'Persistent data storage.',
  items: [
    { name: 'MongoDB', note: 'Document' },
    { name: 'PostgreSQL', note: 'Relational' },
    { name: 'Firebase', note: 'Realtime' },
    { name: 'Redis', note: 'Caching' },
  ],
};

export const currentlyExploring = ['SQLITE', 'DEV-OPS', 'LLMS'];
