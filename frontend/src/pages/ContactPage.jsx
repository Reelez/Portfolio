import { useForm, ValidationError } from '@formspree/react'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/ui/SocialLinks'
import about from '../data/about.json'
import { useLanguage } from '../context/LanguageContext'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xbdzokql')
  const { t } = useLanguage()

  return (
    <div className="section space-y-12">
      <SectionTitle
        label={t.contact.label}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left — info */}
        <div className="space-y-6">
          <p className="text-gray-400 leading-relaxed">{t.contact.body}</p>

          <div className="space-y-3">
            {about.email && (
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="font-mono text-cyan-400">{t.contact.emailField}</span>
                <a href={`mailto:${about.email}`} className="hover:text-cyan-400 transition-colors">
                  {about.email}
                </a>
              </div>
            )}
            {about.location && (
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="font-mono text-cyan-400">{t.contact.locationField}</span>
                <span>{about.location}</span>
              </div>
            )}
          </div>

          <SocialLinks about={about} />
        </div>

        {/* Right — form */}
        {state.succeeded ? (
          <div className="card p-8 flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-4xl">✓</span>
            <p className="text-cyan-400 font-mono text-lg">{t.contact.sent}</p>
            <p className="text-gray-400 text-sm">{t.contact.sentSub}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5 font-mono">{t.contact.nameLabel}</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5 font-mono">{t.contact.emailLabel}</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors}
                className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5 font-mono">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors}
                className="text-red-400 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn-animated btn-animated-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? t.contact.sending : t.contact.send}
            </button>
          </form>
        )}

      </div>
    </div>
  )
}
