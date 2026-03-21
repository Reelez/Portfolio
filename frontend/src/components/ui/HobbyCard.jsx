export default function HobbyCard({ hobby }) {
  const { name, description, icon, image } = hobby

  return (
    <div className="hobby-flip-card" style={{ perspective: '1000px' }}>
      <div className="hobby-flip-inner">

        {/* Front */}
        <div className="hobby-flip-front card border border-gray-800">
          <span className="text-4xl mb-3">{icon}</span>
          <h3 className="font-semibold text-gray-200 text-base">{name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-2 px-2">{description}</p>
        </div>

        {/* Back */}
        <div className="hobby-flip-back rounded-2xl overflow-hidden border border-cyan-400/30">
          {image ? (
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 gap-2">
              <span className="text-5xl">{icon}</span>
              <span className="text-gray-600 text-xs font-mono">// photo coming soon</span>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
