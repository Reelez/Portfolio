import projectsEn from '../data/projects.json'
import projectsEs from '../data/projects.es.json'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectsPage() {
  const { lang, t } = useLanguage()
  const projects = lang === 'es' ? projectsEs : projectsEn

  return (
    <div className="section">
      <SectionTitle
        label={t.projects.label}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={i * 100}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
