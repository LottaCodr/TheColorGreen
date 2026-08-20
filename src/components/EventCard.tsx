import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { SiteEvent } from '../data/site'
import Reveal from './Reveal'

interface EventCardProps {
  event: SiteEvent
  index?: number
}

/**
 * Gallery card — photo (grayscale -> colour on hover), title, one-line
 * description and a red right-aligned “Experience More” link, exactly as
 * the mockup specifies.
 */
export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <Link
        to={`/events/${event.slug}`}
        className="group block"
        aria-label={`${event.title} — experience more`}
      >
        <div className="overflow-hidden bg-panel">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
          />
        </div>
        <h3 className="mt-6 text-xl font-bold text-[#5f5f5f] transition-colors group-hover:text-black">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-faint">{event.description}</p>
        <div className="mt-4 flex justify-end">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Experience More
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
