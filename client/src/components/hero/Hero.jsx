import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import HeroButtons from './HeroButtons';
import HeroStatusCard from './HeroStatusCard';
import TrustedTech from './TrustedTech';
import EmphasisText from '../ui/EmphasisText';
import { site } from '../../data/site';

const HEADLINE_WORDS = ['Engineering', 'digital', 'excellence', 'through', 'clean architecture.'];
const HEADLINE_MUTED_INDEXES = [1, 4];

/**
 * Home page hero: status badge, headline with alternating emphasis,
 * CTA buttons, the live-stats side panel, and the trusted-tech strip.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[var(--color-surface)]/40 to-transparent" />
      <Container className="relative pt-16 pb-4 sm:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge live>{site.availability.contracts}</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-balance mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              <EmphasisText words={HEADLINE_WORDS} mutedIndexes={HEADLINE_MUTED_INDEXES} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--color-ink-secondary)]"
            >
              I'm {site.name}, a {site.role.toLowerCase()} building fast, dependable
              products end to end &mdash; from database schema to pixel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8"
            >
              <HeroButtons />
            </motion.div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <HeroStatusCard />
          </div>
        </div>

        <TrustedTech />
      </Container>
    </section>
  );
}
