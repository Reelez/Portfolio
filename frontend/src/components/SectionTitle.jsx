export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-12" data-aos="fade-up">
      {label && (
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold text-gray-100">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-400 max-w-xl">{subtitle}</p>}
    </div>
  )
}
