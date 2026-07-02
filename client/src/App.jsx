import { useEffect, useRef, useState } from 'react'
import RoleRotator from './components/RoleRotator'

// Detailed file buffers for Shashank's portfolio.
// Each line corresponds to 1 visible line in the editor, allowing relative/absolute scroll tracking.
const BUFFERS = {
  intro: {
    title: 'intro.md',
    lines: [
      { text: '# intro.md', type: 'header' },
      { text: '<!-- About Shashank Venkatesh -->', type: 'comment' },
      { text: '', type: 'empty' },
      { text: 'Role: ', type: 'rotator' },
      { text: '', type: 'empty' },
      { text: 'Hi, I am Shashank — a third-year B.Tech CSE student', type: 'normal' },
      { text: 'and full-stack developer passionate about building', type: 'normal' },
      { text: 'modern, user-focused web applications.', type: 'normal' },
      { text: '', type: 'empty' },
      { text: 'I work with React, Node.js, Express, and MongoDB,', type: 'normal' },
      { text: 'and I enjoy turning complex ideas into real-world builds.', type: 'normal' },
      { text: '', type: 'empty' },
      { text: '⌨️ Vim Controls:', type: 'keyword' },
      { text: '  - Click on NvimTree sidebar on left to browse files.', type: 'comment' },
      { text: '  - Press Ctrl-n to toggle focus between sidebar & editor.', type: 'comment' },
      { text: '  - Use Tab / Shift-Tab to switch open tabs.', type: 'comment' },
      { text: '  - Use j / k (or arrows) to move cursor line.', type: 'comment' },
      { text: '  - Type : to enter Command Mode (e.g. :help, :q).', type: 'comment' },
      { text: '', type: 'empty' },
      { text: '[[Back to top]', type: 'action-top' }
    ]
  },
  about: {
    title: 'about.md',
    lines: [
      { text: '# about.md', type: 'header' },
      { text: '<!-- Philosophy & Learning -->', type: 'comment' },
      { text: '', type: 'empty' },
      { text: 'Building calm, focused web experiences.', type: 'string' },
      { text: 'Full-stack architecture with control.', type: 'normal' },
      { text: 'A developer focused on simplicity and performance.', type: 'normal' },
      { text: '', type: 'empty' },
      { text: '## Focus Areas', type: 'header' },
      { text: '  - Real-time collaboration systems', type: 'bullet' },
      { text: '  - Seamless Authentication flows', type: 'bullet' },
      { text: '  - Pixel-perfect custom designs', type: 'bullet' },
      { text: '  - Performance optimization & speed', type: 'bullet' },
      { text: '', type: 'empty' },
      { text: '## Currently Learning', type: 'header' },
      { text: '  - Scalable backend architectures', type: 'bullet' },
      { text: '  - DevOps & CI/CD deployment pipelines', type: 'bullet' },
      { text: '  - Advanced relational database design', type: 'bullet' }
    ]
  },

  project: {
    title: 'project.md',
    lines: [
      { text: '# project.md', type: 'header' },
      { text: '<!-- Main Project Showcase -->', type: 'comment' },
      { text: '', type: 'empty' },
      { text: '## Synctroop', type: 'header' },
      { text: 'A modern collaborative productivity and communication', type: 'normal' },
      { text: 'platform powered by real-time sync systems.', type: 'normal' },
      { text: '', type: 'empty' },
      { text: 'Technologies: HTML, CSS, React, Node, Express, MongoDB', type: 'keyword' },
      { text: '', type: 'empty' },
      { text: 'Key Features:', type: 'keyword' },
      { text: '  - Real-time instant messaging & syncing', type: 'bullet' },
      { text: '  - Secure JWT Authentication system', type: 'bullet' },
      { text: '  - Fully responsive web UI layouts', type: 'bullet' },
      { text: '  - Multi-user collaborative workspace boards', type: 'bullet' },
      { text: '  - Fast response times & clean metrics', type: 'bullet' },
      { text: '', type: 'empty' },
      { text: 'actions', type: 'project-actions', demoUrl: 'https://synctroop.vercel.app/', githubUrl: 'https://github.com/Shashank-Venkatesh/SyncTroop' }
    ]
  },
  achievements: {
    title: 'achievements.md',
    lines: [
      { text: '# achievements.md', type: 'header' },
      { text: '<!-- OSS & Hackathons -->', type: 'comment' },
      { text: '', type: 'empty' },
      { text: '## Timeline', type: 'header' },
      { text: '● Open Source Contribution — Mathesar Foundation', type: 'keyword' },
      { text: '  · Nov 2025 - Jan 2026 (9-week Sprint)', type: 'comment' },
      { text: '  · Pull Request #1: Svelte frontend UI', type: 'pr-link', label: 'PR #1', url: 'https://github.com/mathesar-foundation/mathesar/pull/5032' },
      { text: '  · Pull Request #2: Postgres backend flows', type: 'pr-link', label: 'PR #2', url: 'https://github.com/mathesar-foundation/mathesar/pull/5032' },
      { text: '  · Certificate: [Onboarding]', type: 'cert-link', label: 'Onboarding Cert', url: 'https://drive.google.com/file/d/1kMrDFaH7n_tpxRGOJpIAmYjhwel0SzRn/view' },
      { text: '  · Certificate: [Completion]', type: 'cert-link', label: 'Completion Cert', url: 'https://drive.google.com/file/d/1PbqpLQ-ZDN6vpQlYEFVWqLM4kfORvljw/view' },
      { text: '', type: 'empty' },
      { text: '● Debug the Code (Hackathon)', type: 'keyword' },
      { text: '  · Secured 2nd Place in CSE competition', type: 'normal' },
      { text: '  · Organized by B.Tech Coding Club, July 2025', type: 'comment' }
    ]
  },
  contact: {
    title: 'contact.md',
    lines: [
      { text: '# contact.md', type: 'header' },
      { text: '<!-- Communication Info -->', type: 'comment' },
      { text: '', type: 'empty' },
      { text: 'Email ID:', type: 'keyword' },
      { text: '  Shashankvenkatesh7906@gmail.com', type: 'email', email: 'Shashankvenkatesh7906@gmail.com' },
      { text: '', type: 'empty' },
      { text: 'Location:', type: 'keyword' },
      { text: '  Chennai, India', type: 'location', location: 'Chennai, India' },
      { text: '', type: 'empty' },
      { text: 'Social Links:', type: 'keyword' },
      { text: 'GitHub:   https://github.com/Shashank-Venkatesh', type: 'social', label: 'GitHub', url: 'https://github.com/Shashank-Venkatesh', icon: 'https://cdn.simpleicons.org/github/98C379' },
      { text: 'Figma:    https://figma.com/@shashank_venkat', type: 'social', label: 'Figma', url: 'https://www.figma.com/@shashank_venkat', icon: 'https://cdn.simpleicons.org/figma/98C379' },
      { text: 'LinkedIn: https://linkedin.com/in/shashank-venkateshcse/', type: 'social', label: 'LinkedIn', url: 'https://www.linkedin.com/in/shashank-venkateshcse/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg' }
    ]
  }
}

// Order of files in explorer tree navigation mapping
const ALL_FILES = ['intro', 'about', 'project', 'achievements', 'contact']

function App() {
  const [booting, setBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)
  
  // Navigation State
  const [activeBuffer, setActiveBuffer] = useState('intro')
  const [openBuffers, setOpenBuffers] = useState(['intro', 'about', 'project'])
  const [focusedPanel, setFocusedPanel] = useState('editor') // 'editor' | 'tree'
  const [treeExpanded, setTreeExpanded] = useState(true)
  const [selectedTreeIndex, setSelectedTreeIndex] = useState(1) // 0 is portfolio directory, 1 is intro.md

  const [activeLineIndex, setActiveLineIndex] = useState({
    intro: 0,
    about: 0,
    project: 0,
    achievements: 0,
    contact: 0
  })

  // Theme & CRT state
  const [colorscheme, setColorscheme] = useState('classic')
  const [commandMode, setCommandMode] = useState(false)
  const [commandText, setCommandText] = useState('')
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const [feedbackIsError, setFeedbackIsError] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [crtEnabled, setCrtEnabled] = useState(true)
  const [isShutdown, setIsShutdown] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const audioCtxRef = useRef(null)
  const editorBodyRef = useRef(null)
  const feedbackTimeoutRef = useRef(null)
  const cmdInputRef = useRef(null)

  // NvimTree flattened nodes list
  const getTreeNodes = () => {
    const list = [{ type: 'directory', name: 'portfolio/', key: 'root' }]
    if (treeExpanded) {
      ALL_FILES.forEach(file => {
        list.push({ type: 'file', name: `${file}.md`, key: file })
      })
    }
    return list
  }

  const treeNodes = getTreeNodes()

  // Initialize sound context
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }

  // Play mechanical keyboard click sounds
  const playClickSound = (pitch = 1.0) => {
    if (!soundEnabled) return
    try {
      initAudio()
      const ctx = audioCtxRef.current
      if (!ctx) return
      
      const now = ctx.currentTime

      // High frequency mechanical click transient
      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      osc1.type = 'triangle'
      osc1.frequency.setValueAtTime(1350 * pitch, now)
      osc1.frequency.exponentialRampToValueAtTime(180, now + 0.012)
      gain1.gain.setValueAtTime(0.06, now)
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.012)
      osc1.connect(gain1)
      gain1.connect(ctx.destination)

      // Chamber housing snap resonance
      const osc2 = ctx.createOscillator()
      const gain2 = ctx.createGain()
      osc2.type = 'sine'
      osc2.frequency.setValueAtTime(300 * pitch, now)
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.025)
      gain2.gain.setValueAtTime(0.04, now)
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.025)
      osc2.connect(gain2)
      gain2.connect(ctx.destination)

      osc1.start(now)
      osc2.start(now)
      osc1.stop(now + 0.013)
      osc2.stop(now + 0.026)
    } catch (e) {
      console.warn('Audio click generation failed', e)
    }
  }

  const triggerCommandFeedback = (msg, isError = false) => {
    setFeedbackMsg(msg)
    setFeedbackIsError(isError)
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current)
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedbackMsg('')
      setFeedbackIsError(false)
    }, 4500)
  }

  // Switch to next buffer tab
  const handleNextBuffer = () => {
    if (openBuffers.length <= 1) return
    const currIndex = openBuffers.indexOf(activeBuffer)
    const nextIndex = (currIndex + 1) % openBuffers.length
    setActiveBuffer(openBuffers[nextIndex])
    playClickSound(1.2)
  }

  // Switch to previous buffer tab
  const handlePrevBuffer = () => {
    if (openBuffers.length <= 1) return
    const currIndex = openBuffers.indexOf(activeBuffer)
    const prevIndex = (currIndex - 1 + openBuffers.length) % openBuffers.length
    setActiveBuffer(openBuffers[prevIndex])
    playClickSound(1.15)
  }

  // Close specific buffer tab
  const handleCloseBuffer = (bufferKey) => {
    playClickSound(0.8)
    const filtered = openBuffers.filter(b => b !== bufferKey)
    setOpenBuffers(filtered)
    
    if (activeBuffer === bufferKey) {
      if (filtered.length > 0) {
        setActiveBuffer(filtered[filtered.length - 1])
      } else {
        // Fallback to open intro.md if everything is closed
        setOpenBuffers(['intro'])
        setActiveBuffer('intro')
      }
    }
  }

  // Open buffer in editor tab
  const handleOpenBuffer = (bufferKey) => {
    if (!openBuffers.includes(bufferKey)) {
      setOpenBuffers([...openBuffers, bufferKey])
    }
    setActiveBuffer(bufferKey)
    setFocusedPanel('editor')
  }

  // Execute Neovim command bar requests
  const executeCommand = (cmdStr) => {
    playClickSound(1.3)
    const trimmed = cmdStr.trim()
    if (trimmed === ':') {
      setCommandMode(false)
      return
    }

    const parts = trimmed.substring(1).trim().split(/\s+/)
    const cmd = parts[0]
    const args = parts.slice(1)

    setCommandMode(false)
    setCommandText('')

    if (cmd === 'q' || cmd === 'quit') {
      triggerCommandFeedback('Shutting down editor...')
      setTimeout(() => {
        setIsShutdown(true)
      }, 400)
    } else if (cmd === 'h' || cmd === 'help') {
      setShowHelp(true)
      triggerCommandFeedback('Help Guide loaded. Esc to dismiss.')
    } else if (cmd === 'colorscheme' || cmd === 'color') {
      const theme = args[0]?.toLowerCase()
      const themes = ['classic', 'gruvbox', 'tokyonight', 'dracula', 'nord']
      if (!theme) {
        triggerCommandFeedback('Usage: :colorscheme <classic|gruvbox|tokyonight|dracula|nord>', true)
      } else if (themes.includes(theme)) {
        setColorscheme(theme)
        triggerCommandFeedback(`Colorscheme changed to "${theme}"`)
      } else {
        triggerCommandFeedback(`Error: Colorscheme "${theme}" not found`, true)
      }
    } else if (cmd === 'e' || cmd === 'edit') {
      const targetFile = args[0]?.replace(/\.md$/, '').toLowerCase()
      if (!targetFile) {
        triggerCommandFeedback('Usage: :e <filename.md>', true)
      } else if (ALL_FILES.includes(targetFile)) {
        handleOpenBuffer(targetFile)
        triggerCommandFeedback(`Opened buffer [${targetFile}.md]`)
      } else {
        triggerCommandFeedback(`Error: File [${args[0]}] not found`, true)
      }
    } else if (cmd === 'bd' || cmd === 'bdelete') {
      const targetFile = args[0]?.replace(/\.md$/, '').toLowerCase()
      const fileToClose = targetFile || activeBuffer
      if (openBuffers.includes(fileToClose)) {
        handleCloseBuffer(fileToClose)
        triggerCommandFeedback(`Closed buffer [${fileToClose}.md]`)
      } else {
        triggerCommandFeedback(`Error: Buffer [${fileToClose}] not active`, true)
      }
    } else if (cmd === 'bn' || cmd === 'bnext') {
      handleNextBuffer()
    } else if (cmd === 'bp' || cmd === 'bprevious') {
      handlePrevBuffer()
    } else if (cmd === 'w' || cmd === 'write') {
      triggerCommandFeedback(`"${BUFFERS[activeBuffer].title}" written successfully.`)
    } else if (cmd === 'crt') {
      setCrtEnabled(prev => !prev)
      triggerCommandFeedback(`CRT scanlines ${!crtEnabled ? 'enabled' : 'disabled'}.`)
    } else if (cmd === 'sound') {
      setSoundEnabled(prev => !prev)
      triggerCommandFeedback(`Audio click feedback ${!soundEnabled ? 'enabled' : 'disabled'}.`)
    } else {
      triggerCommandFeedback(`Error: Not an editor command: ${trimmed}`, true)
    }
  }

  // Handle keys globally for Vim Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (booting || isShutdown) return

      if (showHelp) {
        if (e.key === 'Escape') {
          e.preventDefault()
          setShowHelp(false)
          playClickSound(0.7)
        }
        return
      }

      if (commandMode) {
        if (e.key === 'Escape') {
          e.preventDefault()
          setCommandMode(false)
          setCommandText('')
          playClickSound(0.7)
        }
        return
      }

      // Enter command mode
      if (e.key === ':') {
        e.preventDefault()
        setCommandMode(true)
        setCommandText(':')
        playClickSound(1.1)
        return
      }

      // Focus toggling sidebar/editor via Ctrl + n
      if (e.ctrlKey && e.key.toLowerCase() === 'n') {
        e.preventDefault()
        playClickSound(1.2)
        setFocusedPanel(prev => prev === 'editor' ? 'tree' : 'editor')
        return
      }

      // Tab / Shift-Tab buffer tab switching
      if (e.key === 'Tab') {
        e.preventDefault()
        if (e.shiftKey) {
          handlePrevBuffer()
        } else {
          handleNextBuffer()
        }
        return
      }

      // Panel specific keys
      if (focusedPanel === 'tree') {
        if (e.key === 'j' || e.key === 'ArrowDown') {
          e.preventDefault()
          const nextIdx = Math.min(treeNodes.length - 1, selectedTreeIndex + 1)
          if (nextIdx !== selectedTreeIndex) {
            playClickSound(1.05)
            setSelectedTreeIndex(nextIdx)
          }
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
          e.preventDefault()
          const prevIdx = Math.max(0, selectedTreeIndex - 1)
          if (prevIdx !== selectedTreeIndex) {
            playClickSound(0.95)
            setSelectedTreeIndex(prevIdx)
          }
        } else if (e.key === 'Enter') {
          e.preventDefault()
          const node = treeNodes[selectedTreeIndex]
          if (node.type === 'directory') {
            playClickSound(1.1)
            setTreeExpanded(prev => !prev)
            setSelectedTreeIndex(0) // root
          } else if (node.type === 'file') {
            playClickSound(1.3)
            handleOpenBuffer(node.key)
          }
        }
      } else if (focusedPanel === 'editor') {
        const lines = BUFFERS[activeBuffer].lines
        const currentLine = activeLineIndex[activeBuffer] || 0
        const maxLine = lines.length - 1

        if (e.key === 'j' || e.key === 'ArrowDown') {
          e.preventDefault()
          const target = Math.min(maxLine, currentLine + 1)
          if (target !== currentLine) {
            playClickSound(1.05)
            setActiveLineIndex(prev => ({ ...prev, [activeBuffer]: target }))
          }
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
          e.preventDefault()
          const target = Math.max(0, currentLine - 1)
          if (target !== currentLine) {
            playClickSound(0.95)
            setActiveLineIndex(prev => ({ ...prev, [activeBuffer]: target }))
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booting, isShutdown, showHelp, commandMode, focusedPanel, selectedTreeIndex, activeBuffer, openBuffers, activeLineIndex, treeNodes])

  // Focus command line element when opened
  useEffect(() => {
    if (commandMode && cmdInputRef.current) {
      cmdInputRef.current.focus()
      cmdInputRef.current.selectionStart = cmdInputRef.current.selectionEnd = cmdInputRef.current.value.length
    }
  }, [commandMode])

  // Auto-scroll active line of editor into view
  useEffect(() => {
    if (editorBodyRef.current) {
      const activeLineEl = editorBodyRef.current.querySelector('.editor-line.cursorline')
      if (activeLineEl) {
        activeLineEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }
  }, [activeLineIndex, activeBuffer])

  // Run startup boot loader progress bar
  useEffect(() => {
    if (!booting) return
    const timer = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setBooting(false)
            playClickSound(1.5)
          }, 150)
          return 100
        }
        return prev + 4
      })
    }, 70)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booting])

  const handleJumpToTop = () => {
    playClickSound(1.4)
    handleOpenBuffer('intro')
    setActiveLineIndex(prev => ({
      ...prev,
      intro: 0,
      about: 0,
      project: 0,
      achievements: 0,
      contact: 0
    }))
  }

  // Format line styling for Vim syntax highlights
  const renderLineContent = (line, lineIndex) => {
    const isFocused = focusedPanel === 'editor'
    const isCursorLine = activeLineIndex[activeBuffer] === lineIndex
    const showBlinkCursor = isFocused && isCursorLine

    const cursorMarker = showBlinkCursor ? <span className="block-cursor" /> : null

    switch (line.type) {
      case 'header':
        return <span className="hl-header">{line.text}{cursorMarker}</span>
      case 'comment':
        return <span className="hl-comment">{line.text}{cursorMarker}</span>
      case 'keyword':
        return <span className="hl-keyword">{line.text}{cursorMarker}</span>
      case 'string':
        return <span className="hl-string">{line.text}{cursorMarker}</span>
      case 'email':
        return (
          <div className="contact-value-line">
            <span className="hl-comment">✉</span>
            <span className="hl-string">{line.email}</span>
            {cursorMarker}
          </div>
        )
      case 'location':
        return (
          <div className="contact-value-line">
            <span className="hl-comment">📍</span>
            <span>{line.location}</span>
            {cursorMarker}
          </div>
        )
      case 'bullet':
        return (
          <span>
            <span className="hl-bullet">{line.text.substring(0, 4)}</span>
            <span>{line.text.substring(4)}</span>
            {cursorMarker}
          </span>
        )
      case 'rotator':
        return (
          <div className="inline-flex items-center gap-1.5">
            <span className="hl-keyword">▶ Role: </span>
            <RoleRotator />
            {cursorMarker}
          </div>
        )
      case 'project-actions':
        return (
          <div className="flex flex-wrap gap-3 py-1">
            <a href={line.demoUrl} target="_blank" rel="noreferrer" className="vim-btn" onClick={() => playClickSound(1.4)}>[Live Demo]</a>
            <a href={line.githubUrl} target="_blank" rel="noreferrer" className="vim-btn" onClick={() => playClickSound(1.4)}>[GitHub Repository]</a>
            {cursorMarker}
          </div>
        )
      case 'pr-link':
      case 'cert-link':
        return (
          <div className="pl-4">
            <span className="hl-bullet">· </span>
            <a href={line.url} target="_blank" rel="noreferrer" className="timeline-link" onClick={() => playClickSound(1.4)}>{line.text}</a>
            {cursorMarker}
          </div>
        )
      case 'social':
        return (
          <div className="contact-value-line">
            <span className="social-icon-mask" style={{ maskImage: `url(${line.icon})`, WebkitMaskImage: `url(${line.icon})` }} />
            <a href={line.url} target="_blank" rel="noreferrer" className="social-link" onClick={() => playClickSound(1.4)}>{line.label}</a>
            <span className="hl-comment opacity-50 ml-2 hidden sm:inline">- {line.url}</span>
            {cursorMarker}
          </div>
        )
      case 'action-top':
        return (
          <span className="vim-btn" style={{ margin: 0 }} onClick={handleJumpToTop}>
            {line.text}
            {cursorMarker}
          </span>
        )
      case 'empty':
        return <span>{cursorMarker || '\u00A0'}</span>
      default:
        return <span>{line.text}{cursorMarker}</span>
    }
  }

  return (
    <div className="crt-monitor">
      <div className={`crt-bezel ${!soundEnabled ? 'muted-led' : ''}`}>
        
        {/* Startup Booting Overlay */}
        {booting && (
          <div className="nvim-boot-screen">
            <div className="nvim-logo-art">
{`   _  _              _
  | \\| | ___ ___ _ _(_)_ __
  | .\` |/ -_) _ \\ V / | '  \\
  |_|\\_|\\___\\___/\\_/|_|_|_|_|`}
            </div>
            <div style={{ fontFamily: 'Press Start 2P', fontSize: '13px', marginBottom: '28px' }}>
              NVIM - PORTFOLIO LOADER
            </div>
            <div className="boot-progress-box">
              <div className="boot-progress-bar" style={{ width: `${bootProgress}%` }} />
            </div>
            <div style={{ fontSize: '17px', marginTop: '20px', color: 'var(--fg-muted)' }}>
              Loading plugins & buffers... {bootProgress}%
            </div>
          </div>
        )}

        {/* Shutdown View */}
        {isShutdown && (
          <div className="shutdown-overlay">
            <div className="shutdown-animation" />
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'Press Start 2P', fontSize: '12px' }}>SYSTEM TERMINATED</p>
              <button 
                className="reboot-btn" 
                onClick={() => {
                  playClickSound(1.5)
                  setIsShutdown(false)
                  setBooting(true)
                  setBootProgress(0)
                }}
              >
                Reboot System
              </button>
            </div>
          </div>
        )}

        {/* Help Overlay Guide */}
        {showHelp && (
          <div className="help-overlay" onClick={() => setShowHelp(false)}>
            <div className="help-box" onClick={e => e.stopPropagation()}>
              <h3 className="hl-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '12px' }}>
                Neovim Editor Mode Guide
              </h3>
              <p className="hl-keyword" style={{ marginBottom: '8px' }}>Normal Mode Controls:</p>
              <ul style={{ paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
                <li><span className="hl-number">Ctrl-n</span> : Toggle focus between Left File Explorer (NvimTree) & Right Editor Pane.</li>
                <li><span className="hl-number">j / k</span> (or <span className="hl-number">Down / Up</span> arrows) : Move selection / cursor scroll.</li>
                <li><span className="hl-number">Enter</span> : Open highlighted file when sidebar is active.</li>
                <li><span className="hl-number">Tab</span> : Switch next buffer tab.</li>
                <li><span className="hl-number">Shift-Tab</span> : Switch previous buffer tab.</li>
                <li><span className="hl-number">:</span> : Open bottom command line input bar.</li>
              </ul>
              
              <p className="hl-keyword" style={{ margin: '14px 0 8px 0' }}>Editor Commands (type `:` then command name):</p>
              <ul style={{ paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
                <li><span className="hl-string">:e &lt;file.md&gt;</span> or <span className="hl-string">:edit &lt;file.md&gt;</span> : Open buffer. (e.g. `:e about.md`)</li>
                <li><span className="hl-string">:bd</span> or <span className="hl-string">:bdelete</span> : Close current buffer tab.</li>
                <li><span className="hl-string">:bn</span> / <span className="hl-string">:bp</span> : Jump to next / previous buffer tab.</li>
                <li><span className="hl-string">:colorscheme &lt;theme&gt;</span> : Change styling palette: <span className="hl-number">classic</span>, <span className="hl-number">gruvbox</span>, <span className="hl-number">tokyonight</span>, <span className="hl-number">dracula</span>, <span className="hl-number">nord</span>.</li>
                <li><span className="hl-string">:crt</span> : Toggle scanline curves / grid flicker overlay.</li>
                <li><span className="hl-string">:sound</span> : Mute mechanical switch click sounds.</li>
                <li><span className="hl-string">:w</span> / <span className="hl-string">:write</span> : Save current buffer mock state.</li>
                <li><span className="hl-string">:q</span> / <span className="hl-string">:quit</span> : Shut down terminal.</li>
              </ul>
              
              <div style={{ marginTop: '16px', textAlign: 'right' }}>
                <button className="vim-btn" onClick={() => { playClickSound(0.7); setShowHelp(false) }}>
                  Close [Esc]
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={`crt-screen theme-${colorscheme} ${crtEnabled ? 'crt-active' : ''}`}>
          
          {/* Top Window Bezel bar */}
          <div className="app-titlebar">
            <span className="app-titlebar-left">
              &gt; NEOVIM &gt; Code with purpose...
            </span>
            <div className="app-titlebar-right">
              <div className="window-dot minimize" />
              <div className="window-dot maximize" />
              <div className="window-dot close" onClick={() => { playClickSound(0.7); setIsShutdown(true) }} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Core editor layout splits */}
          <div className="workspace-container">
            
            {/* Left NvimTree folder explorer sidebar */}
            <div className={`nvim-tree-sidebar ${focusedPanel === 'tree' ? 'focused' : ''}`} onClick={() => setFocusedPanel('tree')}>
              <div className="tree-header">
                📁 NvimTree
              </div>
              <div className="tree-body">
                {treeNodes.map((node, index) => {
                  const isSelected = selectedTreeIndex === index && focusedPanel === 'tree'
                  const isActive = activeBuffer === node.key
                  
                  return (
                    <div 
                      key={node.key} 
                      className={`tree-node ${isSelected ? 'selected-line' : ''} ${isActive ? 'active-file' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setFocusedPanel('tree')
                        setSelectedTreeIndex(index)
                        if (node.type === 'directory') {
                          playClickSound(1.1)
                          setTreeExpanded(prev => !prev)
                          setSelectedTreeIndex(0)
                        } else {
                          playClickSound(1.3)
                          handleOpenBuffer(node.key)
                        }
                      }}
                    >
                      {node.type === 'directory' ? (
                        <>
                          <span className="folder-arrow">{treeExpanded ? '▼' : '▶'}</span>
                          <span>📁 {node.name}</span>
                        </>
                      ) : (
                        <>
                          <span className="folder-arrow"></span>
                          <span className="tree-icon" style={{ color: isActive ? 'var(--fg-accent)' : 'var(--fg-muted)' }}>🗎</span>
                          <span>{node.name}</span>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Main Editor workspace */}
            <div className="editor-workspace" onClick={() => setFocusedPanel('editor')}>
              
              {/* Bufferline tabs bar */}
              <div className="bufferline-tabs">
                {openBuffers.map(bufferKey => {
                  const isActive = activeBuffer === bufferKey
                  
                  return (
                    <div 
                      key={bufferKey} 
                      className={`buffer-tab ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setFocusedPanel('editor')
                        setActiveBuffer(bufferKey)
                        playClickSound(1.1)
                      }}
                    >
                      <span className="tab-icon" style={{ color: isActive ? 'var(--fg-accent)' : 'var(--fg-muted)' }}>🗎</span>
                      <span>{BUFFERS[bufferKey].title}</span>
                      <span 
                        className="tab-close" 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCloseBuffer(bufferKey)
                        }}
                      >
                        ×
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Main Editing Text Pane */}
              <div className={`editor-body ${focusedPanel === 'editor' ? 'focused' : ''}`} ref={editorBodyRef}>
                <div className="line-numbers-col">
                  {BUFFERS[activeBuffer].lines.map((_, i) => (
                    <span key={i} className={activeLineIndex[activeBuffer] === i ? 'line-active' : ''}>
                      {i + 1}
                    </span>
                  ))}
                </div>
                
                <div className="lines-content-col">
                  {BUFFERS[activeBuffer].lines.map((line, i) => (
                    <div 
                      key={i} 
                      className={`editor-line ${activeLineIndex[activeBuffer] === i ? 'cursorline' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setFocusedPanel('editor')
                        setActiveLineIndex(prev => ({ ...prev, [activeBuffer]: i }))
                        playClickSound(1.0)
                      }}
                    >
                      {renderLineContent(line, i)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Lualine status line */}
              <div className="lualine-status">
                <div className="lualine-left">
                  <span className="lualine-mode">
                    {commandMode ? 'COMMAND' : (focusedPanel === 'tree' ? 'EXPLORER' : 'NORMAL')}
                  </span>
                  <span className="lualine-file hidden md:inline">
                    portfolio/{BUFFERS[activeBuffer].title}
                  </span>
                </div>
                
                <div className="lualine-right">
                  <div className="lualine-item hidden sm:flex">
                    utf-8
                  </div>
                  <div className="lualine-item hidden sm:flex">
                    [unix]
                  </div>
                  <div className="lualine-item">
                    <span>{activeLineIndex[activeBuffer] + 1}:{BUFFERS[activeBuffer].lines.length}</span>
                  </div>
                  <div className="lualine-item stack">
                    MERN
                  </div>
                  <button 
                    className="sound-toggle-btn"
                    title={soundEnabled ? 'Mute Mech Click Audio' : 'Unmute Mech Click Audio'}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSoundEnabled(prev => !prev)
                      playClickSound(1.4)
                    }}
                  >
                    {soundEnabled ? '🔊' : '🔇'}
                  </button>
                </div>
              </div>

              {/* Vim command entry line */}
              <div className="vim-commandline">
                {commandMode ? (
                  <>
                    <span className="command-prompt">:</span>
                    <input 
                      ref={cmdInputRef}
                      type="text" 
                      className="command-input-element" 
                      value={commandText.substring(1)} 
                      onChange={(e) => {
                        playClickSound(1.0)
                        setCommandText(':' + e.target.value)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          executeCommand(commandText)
                        }
                      }}
                    />
                  </>
                ) : (
                  <div className={`command-feedback ${feedbackIsError ? 'error' : ''}`}>
                    {feedbackMsg || 'Press : to type commands. Press Ctrl-n to focus sidebar explorer. Type :help for info.'}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
