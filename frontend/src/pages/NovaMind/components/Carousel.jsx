import { useState } from 'react'

export default function Carousel({ images, title }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-72 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center">
        <span className="text-gray-600 font-mono text-sm">// no images available</span>
      </div>
    )
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900">

      {/* Slide */}
      <div className="relative h-64 sm:h-96">
        <img
          key={current}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full h-full object-contain"
          draggable={false}
        />

        {/* Slide counter */}
        <span className="absolute top-3 right-3 text-xs font-mono text-gray-400 bg-gray-900/70 px-2 py-1 rounded-full">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Prev button */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center rounded-full transition-colors"
      >
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center rounded-full transition-colors"
      >
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === current ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

    </div>
  )
}
