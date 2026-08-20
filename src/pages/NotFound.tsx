import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — TCG The Colour Green'
  }, [])

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-32 text-center md:py-48">
      <Reveal>
        <p className="text-7xl font-black tracking-tight text-[#8c8c8c] md:text-9xl">404</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 text-2xl font-extrabold text-ink md:text-4xl">THE PAGE WENT GREEN</h1>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-4 max-w-md text-body">
          We could not find that page — but the events are still running.
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <Link
          to="/"
          className="mt-10 inline-block bg-black px-9 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
        >
          Back Home
        </Link>
      </Reveal>
    </div>
  )
}
