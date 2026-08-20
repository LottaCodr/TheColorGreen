import { Link } from 'react-router-dom'
import Logo from './Logo'

const SOCIALS = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    path: (
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L2.8 2h6.4l4.4 5.9L18.9 2zm-1.1 18.1h1.7L7.1 3.8H5.3l12.5 16.3z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: (
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zm0 11a4.4 4.4 0 1 1 0-8.7 4.4 4.4 0 0 1 0 8.7zm7-11.4a1.6 1.6 0 1 1-3.1 0 1.6 1.6 0 0 1 3.1 0z" />
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com',
    path: (
      <path d="M13.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0zm8.7 0c0 3.9-1.7 7-3.8 7s-3.7-3.1-3.7-7 1.6-7 3.7-7 3.8 3.2 3.8 7zM24 12c0 3.4-.6 6.2-1.3 6.2S21.4 15.4 21.4 12s.6-6.2 1.3-6.2S24 8.6 24 12z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
    ),
  },
]

/** Footer: logo left, socials right, centered copyright — per the mockup. */
export default function Footer() {
  return (
    <footer className="bg-white pb-12 pt-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link to="/" aria-label="TCG — The Colour Green, home">
            <Logo />
          </Link>
          <nav aria-label="Social media" className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-black"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                  {s.path}
                </svg>
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-14 text-center text-sm text-mute">
          Copyright © {new Date().getFullYear()} TCG. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
