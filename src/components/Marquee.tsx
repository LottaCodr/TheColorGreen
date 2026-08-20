import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  className?: string
}

/**
 * Infinite horizontal marquee. Content is duplicated once and translated
 * by -50% for a seamless loop; pauses on hover; hidden from a11y tree
 * duplication via aria-hidden.
 */
export default function Marquee({ children, className = '' }: MarqueeProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
      {/* soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
