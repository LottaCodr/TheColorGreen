import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { EVENTS } from '../data/site'
import EventCard from '../components/EventCard'
import Reveal from '../components/Reveal'

/** Events gallery — mirrors the “Our Event Gallery Pieces” mockup. */
export default function Events() {
  useEffect(() => {
    document.title = 'Events — TCG The Colour Green'
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  return (
    <>
      {/* Full-width hero photograph */}
      <div ref={ref} className="relative overflow-hidden">
        <motion.img
          src="/images/gallery-hero.webp"
          alt="Crowd at a sustainable fashion festival"
          style={reduce ? undefined : { y }}
          className="h-[420px] w-full scale-110 object-cover grayscale sm:h-[560px] md:h-[720px]"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="py-16 text-center md:py-24">
          <Reveal>
            <h1 className="text-4xl font-extrabold text-ink md:text-5xl">
              Our Event Gallery Pieces
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
              A curated look at the moments that made each gathering unforgettable — and a preview
              of what is coming next.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-16 pb-24 sm:grid-cols-2 md:pb-32 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <EventCard key={event.slug} event={event} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
