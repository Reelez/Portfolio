import { Link } from 'react-router-dom'
import aboutEn from '../data/about.json'
import aboutEs from '../data/about.es.json'
import projectsEn from '../data/projects.json'
import projectsEs from '../data/projects.es.json'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function HomePage() {
  const { lang, t } = useLanguage()
  const about = lang === 'es' ? aboutEs : aboutEn
  const projects = lang === 'es' ? projectsEs : projectsEn
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center py-24 md:py-20">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-12 animate-fade-in">

          {/* Text */}
          <div className="space-y-5 flex-1 text-center sm:text-left">
            <span className="font-mono text-sm text-cyan-400">
              {t.hero.greeting}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{about.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light">
              {about.title}
            </h2>

            {/* Avatar — mobile only, between title and bio */}
            {about.avatar && (
              <div className="sm:hidden -mt-8">
                <img
                  src={`${import.meta.env.BASE_URL}img/avatar.webp`}
                  alt={about.name}
                  className="w-56 object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            )}

            <p className="text-gray-400 max-w-xl leading-relaxed text-base sm:text-lg mx-auto sm:mx-0">
              {about.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center sm:justify-start">
              <Link to="/projects" className="btn-animated">
                {t.hero.cta}
              </Link>
            </div>

            {about.location && (
              <p className="text-gray-600 text-sm font-mono">
                📍 {about.location}
              </p>
            )}
          </div>

          {/* Avatar — desktop only */}
          {about.avatar && (
            <div className="hidden sm:block shrink-0 sm:-mt-16">
              <img
                src={`${import.meta.env.BASE_URL}img/avatar.webp`}
                alt={about.name}
                className="w-64 lg:w-80 object-contain drop-shadow-2xl"
              />
            </div>
          )}

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs font-mono">{t.hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="py-20">
          <SectionTitle
            label={t.hero.featuredLabel}
            title={t.hero.featuredTitle}
            subtitle={t.hero.featuredSubtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={i * 100}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/projects"
              className="text-sm text-gray-500 hover:text-cyan-400 transition-colors font-mono"
            >
              {t.hero.viewAll}
            </Link>
          </div>
        </section>
      )}

    </div>
  )
}
