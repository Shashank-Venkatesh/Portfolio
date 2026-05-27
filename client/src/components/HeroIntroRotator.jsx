import { useEffect, useMemo, useState } from 'react'

const defaultLines = ['Code with purpose...', 'Pixels. Logic. Creativity....', 'Built with pixels & passion...']

function HeroIntroRotator({ lines = defaultLines, intervalMs = 4000 }) {
  const [lineIndex, setLineIndex] = useState(0)
  const lineList = useMemo(() => lines, [lines])

  useEffect(() => {
    if (!lineList.length) return undefined
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % lineList.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [intervalMs, lineList.length])

  const activeLine = lineList[lineIndex] ?? ''
  const textLength = activeLine.length
  // Keep a consistent pacing based on the "Pixels. Logic. Creativity..." length.
  const pacingLength = 'Built with pixels & passion.'.length +1 
  const steps = Math.min(60, Math.max(12, pacingLength))
  const duration = Math.min(5.8, Math.max(1.4, pacingLength * 0.09))
  // Use a ch-based width so the typewriter fully reveals long lines.
  const typeWidth = `${Math.max(10, textLength)}ch`

  return (
    <div className="hero-intro" aria-live="polite">
      <div
        className="hero-intro-rotator"
        key={lineIndex}
        style={{ '--type-steps': steps, '--type-duration': `${duration}s`, '--type-width': typeWidth }}
      >
        <span>&gt; {activeLine}</span>
        <span className="cursor-blink" aria-hidden="true" />
      </div>
    </div>
  )
}

export default HeroIntroRotator
