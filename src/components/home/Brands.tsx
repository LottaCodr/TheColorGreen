import { BRANDS } from '../../data/site'
import Marquee from '../Marquee'
import Reveal from '../Reveal'

/** Trusted-by brand strip — monochrome wordmarks in an infinite marquee. */
export default function Brands() {
  return (
    <section aria-label="Trusted by leading brands" className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-[1440px] px-5 py-10 md:py-12">
          <Marquee>
            {BRANDS.map((brand) => (
              <span
                key={brand.name}
                className={`mx-10 whitespace-nowrap text-xl text-neutral-900/70 transition-colors duration-300 hover:text-black md:mx-14 md:text-2xl ${brand.className}`}
              >
                {brand.name}
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  )
}
