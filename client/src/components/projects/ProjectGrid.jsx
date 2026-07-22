import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

/**
 * Renders every entry in `data/projects.js` as a responsive card grid.
 */
export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
