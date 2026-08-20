import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { EVENTS } from '../data/site'
import EventCard from '../components/EventCard'
import Reveal from '../components/Reveal'

/** Single event page — mirrors the “ABOUT THE EVENT” mockup. */
export default function EventDetail() {
  const { slug } = useParams()
  const event = EVENTS.find((e) => e.slug === slug) ?? EVENTS[0]
  const others = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3)

  useEffect(() => {
    document.title = `${event.title} — TCG The Colour Green`
  }, [event.title])

  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <>
      <div ref={ref} className="relative overflow-hidden">
        <motion.img
          src="/images/event-hero.webp"
          alt={`${event.title} — runway show`}
          style={reduce ? undefined : { y }}
          className="h-[420px] w-full scale-110 object-cover grayscale sm:h-[520px] md:h-[640px]"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* About the event */}
        <div className="py-16 md:py-24">
          <Reveal>
            <h1 className="text-3xl font-extrabold tracking-wide text-ink sm:text-4xl md:text-[46px]">
              ABOUT THE EVENT
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2 className="text-2xl font-bold text-[#5f5f5f] md:text-3xl">{event.title}</h2>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-mute">
                {event.date}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-4xl text-base leading-loose text-body md:text-lg md:leading-loose">
              {event.about}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.a
              href="/contact#newsletter"
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-block bg-black px-7 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
            >
              Apply Now
            </motion.a>
          </Reveal>
        </div>

        {/* More events */}
        <div className="pb-24 md:pb-32">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-wide text-ink sm:text-4xl md:text-[46px]">
              EXPERIENCE MORE EVENTS
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            {others.map((other, i) => (
              <EventCard key={other.slug} event={other} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
