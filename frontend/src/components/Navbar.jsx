import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/experience', label: t.nav.experience },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
      isActive
        ? 'text-cyan-400 bg-cyan-400/10'
        : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/50'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm font-semibold gradient-text">
          Relez.dev
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="ml-2 px-3 py-1 rounded-full text-xs font-mono border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="px-3 py-1 rounded-full text-xs font-mono border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800/50 bg-gray-950/95 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
