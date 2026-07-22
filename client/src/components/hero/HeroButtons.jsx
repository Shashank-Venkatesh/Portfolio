import { FiArrowRight, FiLinkedin } from 'react-icons/fi';
import Button from '../common/Button';
import { getSocial } from '../../data/socials';

/**
 * Primary hero actions: navigate to the Work page, or open LinkedIn.
 */
export default function HeroButtons() {
  const linkedin = getSocial('linkedin');

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button to="/work" icon={FiArrowRight}>
        View Work
      </Button>
      <Button href={linkedin.href} variant="secondary" icon={FiLinkedin}>
        LinkedIn
      </Button>
    </div>
  );
}
