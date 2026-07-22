import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import LanguagesPanel from '../components/skills/LanguagesPanel';
import StackColumnCard from '../components/skills/StackColumnCard';
import ToolsPanel from '../components/skills/ToolsPanel';
import DatabasesPanel from '../components/skills/DatabasesPanel';
import ExploringStrip from '../components/skills/ExploringStrip';
import { stackColumns } from '../data/skills';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Stack() {
  useDocumentTitle('Stack');

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Technical Stack"
        title="Systems & Frameworks."
        description="A specialised architecture of technologies employed to engineer high-integrity digital products, optimised for performance and long-term scalability."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <LanguagesPanel />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stackColumns.map((column, i) => (
              <StackColumnCard key={column.title} column={column} delay={i * 0.1} />
            ))}
          </div>
        </div>
        <ToolsPanel />
      </div>

      <div className="mt-6">
        <DatabasesPanel />
      </div>

      <ExploringStrip />
    </Container>
  );
}
