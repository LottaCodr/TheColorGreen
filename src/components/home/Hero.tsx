import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import VideoThumb from '../VideoThumb'

const EASE = [0.22, 1, 0.36, 1] as const

/** Editorial word-by-word reveal for the big headline. */
function WordReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <span className={`block ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Side model panel (gray studio panel with a monochrome model photo). */
function ModelPanel({
  src,
  alt,
  y,
  reduce,
  className = '',
}: {
  src: string
  alt: string
  y: MotionValue<string>
  reduce: boolean
  className?: string
}) {
  return (
    <div className={`hidden overflow-hidden bg-panel md:block ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y }}
        className="h-full w-full scale-110 object-cover object-top grayscale"
      />
    </div>
  )
}

/**
 * Hero — faithful to the homepage mockup: black side rails, two gray model
 * panels, and a white center column with two video thumbs, the stacked
 * “THE COLOUR / GREEN” headline and a two-line summary.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yLeft = useTransform(scrollYProgress, [0, 1], ['-4%', '10%'])
  const yRight = useTransform(scrollYProgress, [0, 1], ['4%', '-12%'])

  return (
    <section ref={ref} aria-label="The Colour Green" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-[1fr_minmax(0,560px)_1fr]">
        {/* Left model panel */}
        <ModelPanel
          src="/images/hero-left.webp"
          alt="Model in dark sustainable streetwear"
          y={yLeft}
          reduce={reduce || false}
          className="h-[760px] lg:h-[860px]"
        />

        {/* Center column */}
        <div className="flex flex-col items-center justify-between gap-10 bg-white px-6 py-14 md:px-12 lg:px-14 lg:py-16">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="w-full"
          >
            <VideoThumb
              src="/images/hero-top.webp"
              alt="Crowd celebrating at a sustainable fashion event"
              className="h-[190px] sm:h-[225px]"
            />
          </motion.div>

          <div className="text-center">
            <WordReveal
              text="THE COLOUR"
              className="text-[40px] font-extrabold leading-[1.05] tracking-[0.08em] text-ink sm:text-[48px] lg:text-[56px]"
              delay={0.25}
            />
            <WordReveal
              text="GREEN"
              className="mt-2 text-[86px] font-black leading-[0.95] tracking-[0.02em] text-[#8c8c8c] sm:text-[112px] lg:text-[128px]"
              delay={0.45}
            />
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              className="mx-auto mt-4 max-w-[480px] text-[13px] font-medium uppercase leading-relaxed tracking-[0.08em] text-[#5f5f5f] sm:text-[15px]"
            >
              Discover a new era of sustainable style.
              <br />
              Uniqueness, vibrance, and eco-conscious design.
            </motion.p>
          </div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="w-full"
          >
            <VideoThumb
              src="/images/hero-bottom.webp"
              alt="Hands holding seedlings at a community eco workshop"
              className="h-[190px] sm:h-[225px]"
            />
          </motion.div>
        </div>

        {/* Right model panel */}
        <ModelPanel
          src="/images/hero-right.webp"
          alt="Model in a dark oversized eco-fashion coat"
          y={yRight}
          reduce={reduce || false}
          className="h-[760px] lg:h-[860px]"
        />
      </div>

      {/* Mobile-only model strip (panels are hidden on small screens) */}
      <div className="grid grid-cols-2 md:hidden">
        <div className="h-64 overflow-hidden bg-panel">
          <img
            src="/images/hero-left.webp"
            alt="Model in dark sustainable streetwear"
            className="h-full w-full object-cover object-top grayscale"
          />
        </div>
        <div className="h-64 overflow-hidden bg-panel">
          <img
            src="/images/hero-right.webp"
            alt="Model in a dark oversized eco-fashion coat"
            className="h-full w-full object-cover object-top grayscale"
          />
        </div>
      </div>
    </section>
  )
}
