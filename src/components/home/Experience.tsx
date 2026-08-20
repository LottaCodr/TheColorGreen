import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

/**
 * “Experience Our Event” — centered heading, dark cinematic event film
 * with a pulsing white play button, and a small “Gallery” label beneath.
 */
export default function Experience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 text-center md:pt-28">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-ink md:text-5xl">Experience Our Event</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            A sixty-second look at the energy that fills the room when fashion and sustainability
            share a stage. Watch the film from our last gathering and see what is waiting at the
            next one.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-12 max-w-[1440px] md:mt-16">
        <Link
          to="/events"
          aria-label="Watch the event film and explore the gallery"
          className="group relative block overflow-hidden bg-black"
        >
          <img
            src="/images/experience.webp"
            alt="Evening event with stage lights and a crowd"
            loading="lazy"
            className="h-[420px] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 sm:h-[540px] md:h-[640px]"
          />
          <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="relative grid size-20 place-items-center">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/40 motion-reduce:animate-none" />
              <span className="grid size-20 place-items-center rounded-full bg-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 size-8 fill-black" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </Reveal>

      <div className="pb-20 pt-10 text-center md:pb-28">
        <Reveal>
          <Link
            to="/events"
            className="text-xs font-semibold uppercase tracking-[0.4em] text-mute transition-colors duration-300 hover:text-black"
          >
            Gallery
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
