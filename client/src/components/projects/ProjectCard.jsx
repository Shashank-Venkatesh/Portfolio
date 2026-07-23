import { motion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../common/Chip';

/**
 * A single featured-project card: thumbnail, title, description,
 * technology chips, a "Featured" badge when applicable, and links out
 * to the repository and/or live demo.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Card
        as="article"
        className="group relative flex h-full flex-col overflow-hidden transition-colors hover:border-[var(--color-border-strong)]"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-inset)]">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-[var(--color-ink-primary)]">{project.title}</h3>
            <span className="font-mono text-[11px] text-[var(--color-ink-tertiary)]">
              {project.period}
            </span>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
            >
              See more on GitHub
              <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
              >
                Live Demo
                <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
