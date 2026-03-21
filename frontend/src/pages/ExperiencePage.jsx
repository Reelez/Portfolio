import experienceEn from '../data/experience.json'
import experienceEs from '../data/experience.es.json'
import SectionTitle from '../components/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function ExperiencePage() {
  const { lang, t } = useLanguage()
  const experience = lang === 'es' ? experienceEs : experienceEn

  function formatDate(dateStr) {
    if (!dateStr) return ''
    const [year, month] = dateStr.split('-')
    return `${t.experience.months[parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="section">
      <SectionTitle
        label={t.experience.label}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="relative">
        {/* Línea vertical del timeline */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 ml-2 hidden sm:block" />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={exp.id} className="sm:pl-10 relative" data-aos="fade-up" data-aos-delay={i * 100}>
              {/* Punto del timeline */}
              <div className="absolute left-0 top-5 w-5 h-5 rounded-full border-2 border-cyan-400 bg-gray-950 hidden sm:flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400' : 'bg-gray-600'}`} />
              </div>

              <div className="card card-hover p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-100">{exp.position}</h2>
                    <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-gray-500">
                      {formatDate(exp.start_date)} — {exp.current ? <span className="text-cyan-400">{t.experience.present}</span> : formatDate(exp.end_date)}
                    </span>
                    {exp.current && (
                      <div className="mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                          {t.experience.current}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {exp.highlights?.length > 0 ? (
                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-gray-400 bg-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
