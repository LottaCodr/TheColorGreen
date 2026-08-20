import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import Reveal from '../Reveal'

/**
 * “Subscribe To Our Newsletter” — centered heading, underline-style email
 * input with a mail glyph, and the white/black-bordered Subscribe button
 * (exactly as the mockup shows), with a success micro-interaction.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    window.setTimeout(() => setSubscribed(false), 3200)
  }

  return (
    <section id="newsletter" aria-label="Newsletter" className="scroll-mt-24 bg-white pb-24 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-5 text-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-ink md:text-5xl">
            Subscribe To Our Newsletter
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            One email a month with upcoming events, early-bird passes, and stories from the
            community.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <form onSubmit={onSubmit} className="mx-auto mt-12 flex max-w-md flex-col items-center gap-10">
            <label className="flex w-full items-center gap-3 border-b border-neutral-300 pb-3 transition-colors duration-300 focus-within:border-black">
              <Mail className="size-5 shrink-0 text-faint" aria-hidden="true" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="michael@ymail.com"
                aria-label="Email address"
                className="w-full bg-transparent text-left text-lg text-ink outline-none placeholder:text-faint"
              />
            </label>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              className="relative min-w-[300px] border-2 border-black px-12 py-4 text-base font-bold text-ink transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {subscribed ? (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-2"
                  >
                    Subscribed <Check className="size-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    Subscribe Now
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
