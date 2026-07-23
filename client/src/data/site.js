/**
 * Global site metadata.
 * Centralised so copy changes never require touching component code.
 */
export const site = {
  name: 'Shashank Venkatesh',
  shortName: 'Shanks',
  initials: 'SV',
  role: 'Full Stack Developer',
  tagline: 'Architecture Digital Experiences',
  footerLine: 'Engineered for precision.',
  year: new Date().getFullYear(),
  resumeUrl: '/resume.pdf',
  activeSince: '2019',
  location: {
    city: 'Chennai, India',
    tz: 'IST GMT+5:30',
  },
  availability: {
    contracts: 'Available for contracts as well for freelancing',
    projects: 'Currently taking new projects',
  },
};

export const heroStats = {
  activeSinceLabel: 'Active Since',
  activeSinceValue: site.activeSince,
  masteryLabel: 'New project Completion status !',
  masteryValue: 75,
  stats: [
    { label: 'Live Projects', value: '2+' },
    { label: 'Uptime Goal', value: '99%' },
  ],
};
