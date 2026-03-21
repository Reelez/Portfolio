import { useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'

export default function AnimatedThemeToggler({ duration = 400, className = '', ...props }) {
  const [isDark, setIsDark] = useState(true)
  const buttonRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved ? saved === 'dark' : true
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const vw = window.visualViewport?.width ?? window.innerWidth
    const vh = window.visualViewport?.height ?? window.innerHeight
    const maxRadius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y))

    const applyTheme = () => {
      const newDark = !isDark
      setIsDark(newDark)
      document.documentElement.classList.toggle('dark', newDark)
      localStorage.setItem('theme', newDark ? 'dark' : 'light')
    }

    if (typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    transition?.ready?.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [isDark, duration])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-200 ${className}`}
      {...props}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
