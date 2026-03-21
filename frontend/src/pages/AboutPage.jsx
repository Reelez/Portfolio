import aboutEn from '../data/about.json'
import aboutEs from '../data/about.es.json'
import hobbiesEn from '../data/hobbies.json'
import hobbiesEs from '../data/hobbies.es.json'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/ui/SocialLinks'
import { useLanguage } from '../context/LanguageContext'

export default function AboutPage() {
  const { lang, t } = useLanguage()
  const about = lang === 'es' ? aboutEs : aboutEn
  const hobbies = lang === 'es' ? hobbiesEs : hobbiesEn

  return (
    <div className="section space-y-16">

      {/* About */}
      <section>
        <SectionTitle label={t.about.label} title={t.about.title} />

        <div className="card p-6 sm:p-8" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">

            {/* Left column: image + social links */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="w-40 h-56 sm:w-48 sm:h-64 rounded-xl overflow-hidden ring-2 ring-cyan-400/30 shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}img/avatar2.webp`}
                  alt={about.name}
                  className="w-full h-full object-contain pointer-events-none"
                  style={{ transformOrigin: 'center center', transform: 'scale(2) translate(15px, 37px)' }}
                />
              </div>
              <SocialLinks about={about} />
            </div>

            {/* Right column: name, title, location, bio */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-100">{about.name}</h2>
                <p className="gradient-text font-medium">{about.title}</p>
                {about.location && (
                  <p className="text-gray-500 text-sm font-mono">📍 {about.location}</p>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{about.bio}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Hobbies */}
      {hobbies.length > 0 && (
        <section>
          <SectionTitle label={t.about.hobbiesLabel} title={t.about.hobbiesTitle} />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, i) => (
              <div key={hobby.id} className="card card-hover p-5 space-y-3" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="text-3xl">{hobby.icon}</span>
                <h3 className="font-semibold text-gray-200">{hobby.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
