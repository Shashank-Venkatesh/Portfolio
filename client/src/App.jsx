import { useEffect, useRef, useState } from 'react'
import HeroIntroRotator from './components/HeroIntroRotator'
import RoleRotator from './components/RoleRotator'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Shashank-Venkatesh',
    icon: 'https://cdn.simpleicons.org/github/63C5FF',
  },
  {
    label: 'Figma',
    href: 'https://www.figma.com/@shashank_venkat',
    icon: 'https://cdn.simpleicons.org/figma/63C5FF',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shashank-venkateshcse/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
  },
  {
    label: 'Email',
    href: 'mailto:Shashankvenkatesh7906@gmail.com',
    icon: 'https://cdn.simpleicons.org/gmail/63C5FF',
  },
]

const techStack = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/63C5FF', level: 90 },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/63C5FF', level: 82 },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/63C5FF', level: 80 },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/63C5FF', level: 84 },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/63C5FF', level: 88 },
  { name: 'Socket.io', icon: 'https://cdn.simpleicons.org/socketdotio/63C5FF', level: 76 },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/63C5FF', level: 86 },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/63C5FF', level: 78 },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/63C5FF', level: 70 },
]

const projectFeatures = [
  'Real-time communication',
  'Authentication system',
  'Responsive UI',
  'Team collaboration features',
  'Clean dashboard',
  'Fast performance',
]

function App() {
  const cursorRef = useRef(null)
  const rafRef = useRef(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleMove = (event) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const { innerWidth, innerHeight } = window
      const offsetX = (event.clientX / innerWidth - 0.5) * 2
      const offsetY = (event.clientY / innerHeight - 0.5) * 2
      rafRef.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--parallax-x', offsetX.toFixed(3))
        document.documentElement.style.setProperty('--parallax-y', offsetY.toFixed(3))
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    if (!('IntersectionObserver' in window) || elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!('IntersectionObserver' in window) || sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.site-header')
      if (!header) return
      header.classList.toggle('site-header--scrolled', window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderName = () => {
    const name = 'Shashank Venkatesh'
    return name.split('').map((char, index) => (
      <span
        key={`${char}-${index}`}
        className="hero-letter"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <div className="app">
      <div className="boot-screen" aria-hidden="true">
        <div className="boot-card">
          <p className="boot-title">INITIALIZING PORTFOLIO...</p>
          <p className="boot-line">Loading modules</p>
          <p className="boot-line">Syncing pixel grid</p>
          <p className="boot-line">Access granted_</p>
        </div>
      </div>

      <div className="cursor" ref={cursorRef} aria-hidden="true" />

      <div className="bg" aria-hidden="true">
        <div className="bg-sky" />
        <div className="bg-stars" />
        <div className="bg-clouds" />
        <div className="bg-city" />
        <div className="bg-room" />
        <div className="bg-layer bg-layer--far" />
        <div className="bg-layer bg-layer--mid" />
        <div className="bg-layer bg-layer--front" />
        <div className="bg-grid" />
        <div className="bg-particles" />
        <div className="scanlines" />
        <div className="noise" />
      </div>

      <header className="site-header">
        <div className="logo">SV</div>
        <nav className="site-nav">
          <a href="#home" className={activeSection === 'home' ? 'is-active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'is-active' : ''}>About</a>
          <a href="#stack" className={activeSection === 'stack' ? 'is-active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'is-active' : ''}>Projects</a>
          <a href="#experience" className={activeSection === 'experience' ? 'is-active' : ''}>Experience</a>
          <a href="#contact" className={activeSection === 'contact' ? 'is-active' : ''}>Contact</a>
        </nav>
      </header>

      <main className="content">
        <section className="hero" id="home">
          <div className="hero-left">
            <div className="pixel-label">LIVE PORTFOLIO</div>
            <HeroIntroRotator />
            <h1 className="hero-name" aria-label="Shashank Venkatesh">
              <span className="hero-name-line">{renderName()}</span>
              <span className="role">Fullstack Developer</span>
            </h1>
            <p className="hero-bio" data-animate>
              Hi, I am Shashank — a third-year B.Tech CSE student and full-stack web developer
              passionate about building modern, user-focused applications. I work with React,
              Express, MongoDB, and Tailwind CSS, and I enjoy turning ideas into real-world
              projects. I am currently focused on improving my development skills, exploring
              devops, deployment flows, and scalable architecture.
            </p>
            <div className="hero-cta">
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
              <a
                className="secondary-btn"
                href="https://docs.google.com/document/d/1zXf4rdrbeuOaSVXg9wtjote1p0hVXUJRWoxGIro7P4k/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-terminal" data-animate>
              <div className="terminal-header">
                <span>SYNC ROOM</span>
                <span className="terminal-status">LIVE</span>
              </div>
              <div className="terminal-body">
                <RoleRotator />
                <div className="hud-grid">
                  <div>
                    <span className="hud-label">Sessions</span>
                    <strong>24</strong>
                  </div>
                  <div>
                    <span className="hud-label">Focus</span>
                    <strong>98%</strong>
                  </div>
                  <div>
                    <span className="hud-label">Stack</span>
                    <strong>MERN</strong>
                  </div>
                </div>
                <div className="loading-bar">
                  <span />
                </div>
              </div>
            </div>

            <div className="hero-skyline" aria-hidden="true">
              <div className="skyline-layer skyline-layer--back" />
              <div className="skyline-layer skyline-layer--front" />
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section" id="about">
          <div className="section-heading" data-animate>
            <p className="pixel-label">About</p>
            <h2>Building calm, focused web experiences</h2>
            <p className="section-sub" data-animate>
              I design and develop modern full-stack interfaces with a focus on clarity, performance, and
              thoughtful user experience. My current focus is on building real-time apps and leveling up my
              backend systems knowledge.
            </p>
          </div>
          <div className="about-grid" data-animate>
            <div className="about-card">
              <h3>Focus Areas</h3>
              <p>Real-time collaboration, auth flows, pixel-perfect UI, performance tuning.</p>
            </div>
            <div className="about-card">
              <h3>Currently Learning</h3>
              <p>Scalable backend systems, deployment pipelines, and advanced database design.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section" id="stack">
          <div className="section-heading" data-animate>
            <p className="pixel-label">Skills</p>
            <h2>Terminal modules, measured skill levels</h2>
            <p className="section-sub" data-animate>
              A snapshot of my core tools, each with a pixel HUD for quick scanning.
            </p>
          </div>

          <div className="stack-grid" data-animate>
            {techStack.map((tech) => (
              <div className="skill-card" key={tech.name}>
                <div className="skill-header">
                  <img src={tech.icon} alt="" aria-hidden="true" />
                  <span>{tech.name}</span>
                  <span className="skill-level">{tech.level}%</span>
                </div>
                <div className="skill-bar" style={{ '--level': `${tech.level}%` }}>
                  <span />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section" id="projects">
          <div className="section-heading" data-animate>
            <p className="pixel-label">Main Project</p>
            <h2>Synctroop</h2>
            <p className="section-sub" data-animate>
              A modern collaborative productivity and communication platform built using the MERN stack with
              real-time features powered by Socket.io.
            </p>
          </div>

          <div className="project-card" data-animate>
            <div className="project-info">
              <div className="project-tags">
                {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Socket.io'].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <ul className="project-features">
                {projectFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a className="primary-btn" href="https://synctroop.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a className="secondary-btn" href="https://github.com/Shashank-Venkatesh/SyncTroop" target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="project-mockup" aria-hidden="true">
              <div className="mockup-header">
                <span>SYNC ROOM</span>
                <span className="status-dot" />
              </div>
              <div className="mockup-body">
                <div className="mockup-block" />
                <div className="mockup-block" />
                <div className="mockup-block" />
              </div>
              <div className="mockup-footer">
                <span>Realtime sync online</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section" id="experience">
          <div className="section-heading" data-animate>
            <p className="pixel-label">Achievements</p>
            <h2>Learning in public, shipping real builds</h2>
            <p className="section-sub" data-animate>
              A timeline of hands-on work as I grow toward internships and startup opportunities.
            </p>
          </div>
          <div className="experience-grid" data-animate>
            <div className="experience-card">
              <div>
                <h3>Open Source Contribution — Mathesar Foundation</h3>
                <p className="experience-meta">Nov 2025 - Jan 2026 · Kalvium × Mathesar</p>
              </div>
              <ul>
                <li>
                  Selected in Nov 2025 after onboarding, Linux setup, and a 3-week FOSS Sprint.{' '}
                  <a
                    className="secondary-btn certificate-btn"
                    href="https://drive.google.com/file/d/1kMrDFaH7n_tpxRGOJpIAmYjhwel0SzRn/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate Link
                  </a>
                </li>
                <li>
                  Passed screening with an initial PR and invited to the 9-week Mathesar Sprint.{' '}
                  <a
                    className="secondary-btn certificate-btn"
                    href="https://drive.google.com/file/d/1PbqpLQ-ZDN6vpQlYEFVWqLM4kfORvljw/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate Link
                  </a>
                </li>
                <li>Contributed under mentorship from Mathesar engineers (Dec 2025 - Jan 2026).</li>
                <li>
                  Pull Requests:
                  <div className="hero-cta">
                    <a
                      className="ghost-btn"
                      href="https://github.com/mathesar-foundation/mathesar/pull/5032"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PR #1
                    </a>
                    <a
                      className="ghost-btn"
                      href="https://github.com/mathesar-foundation/mathesar/pull/5032"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PR #2
                    </a>
                  </div>
                </li>
                <li>
                  Tech exposure: Svelte, Postgres UI flows, Git collaboration, code reviews, CI, and
                  open-source best practices.
                </li>
              </ul>
            </div>
            <div className="experience-card">
              <div>
                <h3>Hackathons & Competitions</h3>
                <p className="experience-meta">31 July 2025 · Coding Club, B.Tech CSE</p>
              </div>
              <ul>
                <li>Secured 2nd place in the “Debug the Code” competition among B.Tech CSE students.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="section" id="contact">
          <div className="section-heading" data-animate>
            <p className="pixel-label">Contact</p>
            <h2>Let us build something together</h2>
            <p className="section-sub" data-animate>
              Open for internships, collaborations, and ambitious product ideas.
            </p>
          </div>

          <div className="contact-card" data-animate>
            <div>
              <p className="contact-label">Email ID</p>
              <p className="contact-value">Shashankvenkatesh7906@gmail.com</p>
            </div>
            <div>
              <p className="contact-label">Location</p>
              <p className="contact-value">Chennai</p>
            </div>
            <div>
              <p className="contact-label">Links</p>
              <div className="social-row">
                {socialLinks.map((link) => (
                  <a className="social-pill" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <img src={link.icon} alt="" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-actions">
              <a className="ghost-btn" href="#home">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Designed with pixel precision.</span>
        <span>Shashank Venkatesh</span>
      </footer>
    </div>
  )
}

export default App
