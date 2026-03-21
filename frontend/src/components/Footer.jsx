import about from '../data/about.json'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm gradient-text">Relez.dev</span>

        <div className="flex gap-5">
          {about.github && (
            <a href={about.github} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
              GitHub
            </a>
          )}
          {about.linkedin && (
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
              LinkedIn
            </a>
          )}
          {about.email && (
            <a href={`mailto:${about.email}`}
               className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
              Email
            </a>
          )}
        </div>

        <span className="text-gray-600 text-xs">
          © {new Date().getFullYear()} {about.name}
        </span>
      </div>
    </footer>
  )
}
