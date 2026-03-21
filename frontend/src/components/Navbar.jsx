import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/experience', label: t.nav.experience },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm font-semibold gradient-text">
          Relez.dev
        </NavLink>

        <div className="flex items-center gap-2">
          <ul className="flex gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/50'
                    }`
                  }
                >
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
      </nav>
    </header>
  )
}
