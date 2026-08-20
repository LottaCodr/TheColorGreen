import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'

/**
 * Contact page — the navbar links here, so a page must exist. Built in the
 * same monochrome editorial language as the mockups (left copy, bordered
 * form on the right).
 */
export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — TCG The Colour Green'
  }, [])

  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
  }

  const field =
    'w-full border-b border-neutral-300 bg-transparent py-3 text-lg text-ink outline-none placeholder:text-faint transition-colors duration-300 focus:border-black'

  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10">
      <div className="grid gap-16 py-16 md:py-24 lg:grid-cols-2 lg:gap-24">
        {/* Left copy */}
        <div>
          <Reveal>
            <h1 className="text-3xl font-extrabold tracking-wide text-ink sm:text-4xl md:text-[46px]">
              CONTACT US
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
              Questions about an upcoming event, a partnership idea, or a volunteer pitch? We read
              everything and answer everything — usually within two working days.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-10 space-y-5 text-base text-body md:text-lg">
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-ink" aria-hidden="true" />
                <a href="mailto:hello@thecolorgreen.com" className="transition-colors hover:text-black">
                  hello@thecolorgreen.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-ink" aria-hidden="true" />
                <span>14 Greenway Yard, Port Harcourt</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.12}>
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mute">
                Name
              </span>
              <input required placeholder="Your name" className={field} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mute">
                Email
              </span>
              <input required type="email" placeholder="you@example.com" className={field} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mute">
                Message
              </span>
              <textarea required rows={5} placeholder="Tell us everything…" className={field} />
            </label>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              className="mt-2 inline-flex w-fit items-center gap-2 bg-black px-10 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
            >
              {sent ? (
                <>
                  Message Sent <Check className="size-5" aria-hidden="true" />
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </div>
  )
}
