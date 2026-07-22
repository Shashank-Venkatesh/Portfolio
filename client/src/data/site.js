/**
 * Global site metadata.
 * Centralised so copy changes never require touching component code.
 */
export const site = {
  name: 'Shashank Venkatesh',
  shortName: 'Shashank V',
  initials: 'SV',
  role: 'Full Stack Developer',
  tagline: 'Architecture Digital Experiences',
  footerLine: 'Engineered for precision.',
  year: new Date().getFullYear(),
  resumeUrl: '/resume.pdf',
  activeSince: '2018.04.12',
  location: {
    city: 'Chennai, India',
    tz: 'IST GMT+5:30',
  },
  availability: {
    contracts: 'Available for select contracts',
    projects: 'Currently taking new projects',
  },
};

export const heroStats = {
  activeSinceLabel: 'Active Since',
  activeSinceValue: site.activeSince,
  masteryLabel: 'Full Stack Mastery',
  masteryValue: 88,
  stats: [
    { label: 'Live Projects', value: '14+' },
    { label: 'Uptime Goal', value: '99%' },
  ],
};

export const trustedTechnologies = [
  'React.js',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'AWS Cloud',
];
