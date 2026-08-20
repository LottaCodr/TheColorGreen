import type { ReactNode } from 'react'

interface VideoThumbProps {
  src: string
  alt: string
  className?: string
  children?: ReactNode
}

/** Video thumbnail with a white circular play button and pulsing ring. */
export default function VideoThumb({ src, alt, className = '', children }: VideoThumbProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-panel ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="relative grid size-16 place-items-center">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/50 motion-reduce:animate-none" />
          <span className="grid size-16 place-items-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-black" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
        </span>
      </div>
      {children}
    </div>
  )
}
