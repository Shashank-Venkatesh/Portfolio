import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

/**
 * Every outbound link on the site is sourced from here so a single
 * update (e.g. a handle change) propagates everywhere automatically.
 */
export const socials = [
  {
    id: 'email',
    label: 'Email',
    value: 'shashankvenkatesh7906@gmail.com',
    href: 'mailto:shashankvenkatesh7906@gmail.com',
    icon: FiMail,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'shashank-venkateshcse',
    href: 'https://www.linkedin.com/in/shashank-venkateshcse/',
    icon: FiLinkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Shashank-Venkatesh',
    href: 'https://github.com/Shashank-Venkatesh',
    icon: FiGithub,
    external: true,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    value: 'ShashankVe7906',
    href: 'https://x.com/ShashankVe7906',
    icon: FiTwitter,
    external: true,
  },
];

export const getSocial = (id) => socials.find((s) => s.id === id);
