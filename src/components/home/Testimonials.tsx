import { TESTIMONIALS } from '../../data/site'
import Reveal from '../Reveal'

/**
 * “This Is What Our Community Says” — two borderless cards, each with a
 * monochrome portrait, the quote, the name and the role (per the mockup).
 */
export default function Testimonials() {
  return (
    <section aria-label="Community testimonials" className="bg-white pb-24 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-5">
        <div className="text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.12] text-ink md:text-5xl">
              This Is What Our
              <br className="sm:hidden" /> Community Says
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
              Real words from the people who make every gathering feel like home.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:mt-20 md:grid-cols-2 md:gap-14 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex gap-6 md:gap-8">
                <div className="shrink-0 overflow-hidden bg-panel">
                  <img
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    loading="lazy"
                    className="h-36 w-28 object-cover grayscale transition-all duration-700 hover:grayscale-0 md:h-60 md:w-44"
                  />
                </div>
                <figcaption className="flex flex-col justify-between py-1">
                  <blockquote className="text-base leading-relaxed text-body md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="text-base font-bold text-ink md:text-lg">{t.name}</p>
                    <p className="mt-0.5 text-sm text-mute md:text-base">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
