import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../Reveal'

/**
 * “E for Effort, E for Event” — text + black Apply Now button on the left,
 * full-bleed monochrome model photo on the right (per the mockup).
 */
export default function Effort() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        {/* Copy */}
        <div className="px-5 py-16 sm:px-8 md:px-16 md:py-24 lg:px-24 lg:py-32">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
              E for Effort,
              <br />
              E for Event
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-body md:text-lg">
              Join us for an unforgettable experience where creativity meets opportunity. Network
              with industry leaders, explore sustainable design first-hand, and take part in
              workshops led by the people reshaping fashion. From upcycling labs to live styling
              sessions, every hour is built to spark something new. Whether you are a designer, a
              dreamer, or simply curious, there is a seat with your name on it. Come for the craft,
              stay for the community, and leave with ideas you can actually wear. Spaces are
              limited and fill up fast — save the date, bring a friend, and get ready to make
              something that lasts.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <motion.a
              href="/events/green-runway"
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-block bg-black px-7 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
            >
              Apply Now
            </motion.a>
          </Reveal>
        </div>

        {/* Photo */}
        <div className="relative h-96 overflow-hidden bg-white md:h-auto md:min-h-[640px] lg:min-h-[720px]">
          <motion.img
            src="/images/effort-model.webp"
            alt="Model in minimalist sustainable fashion"
            loading="lazy"
            style={reduce ? undefined : { y }}
            className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-top grayscale"
          />
        </div>
      </div>
    </section>
  )
}
