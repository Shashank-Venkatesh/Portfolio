import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Consistent "eyebrow / title / description" heading block used at the
 * top of each page (Stack, Contact, etc).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(align === "center" && "text-center", className)}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {align !== "center" && (
            <span className="h-px w-8 bg-[var(--color-border-strong)]" />
          )}
          <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-ink-primary)] sm:text-5xl">
          {title}
        </h1>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
