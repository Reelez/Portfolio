const DURATION = 20  // seconds for one full rotation
const RADIUS = 240   // translateZ in px

export default function Carousel({ images, title }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-72 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center">
        <span className="text-gray-600 font-mono text-sm">// no images available</span>
      </div>
    )
  }

  const count = images.length
  const stepAngle = 360 / count
  const stepDelay = DURATION / count

  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="card-3d">
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              transform: `translate(-50%, -50%) rotateY(${stepAngle * i}deg) translateZ(${RADIUS}px)`,
              animationDelay: `${-(stepDelay * i)}s`,
            }}
          >
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
