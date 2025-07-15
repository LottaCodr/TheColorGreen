'use client'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setHasShadow(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, offset: 0 }
        return { id, offset: el.offsetTop - 120 }
      })

      const scrollPos = window.scrollY

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPos >= offsets[i].offset) {
          setActiveSection(offsets[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on outside click or Escape
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Smooth scroll for anchor links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        hasShadow ? 'shadow-lg' : '',
        'bg-white/90 dark:bg-black/60 backdrop-blur-lg'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-green-700 dark:text-green-400 tracking-tight hover:opacity-90 transition"
          aria-label="ColorGreen Home"
        >
          <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-green-700 mr-1" />
          ColorGreen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={e => handleNavLinkClick(e, id)}
              className={clsx(
                'px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
                activeSection === id
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold shadow'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-300'
              )}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}

          <Link
            href="#get-started"
            onClick={e => handleNavLinkClick(e, 'get-started')}
            className="ml-4 bg-gradient-to-tr from-green-600 to-green-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-green-700 hover:to-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition"
          >
            Contribute
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className={clsx(
            'md:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
            isOpen
              ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
              : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-800'
          )}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={clsx(
          'md:hidden fixed inset-0 z-40 transition-all duration-300',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!isOpen}
      >
        <div
          className={clsx(
            'absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        />
        <nav
          className={clsx(
            'absolute right-0 top-0 w-4/5 max-w-xs h-full bg-white dark:bg-neutral-900 shadow-lg flex flex-col gap-2 py-8 px-6 transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          tabIndex={-1}
          aria-label="Mobile"
        >
          <button
            onClick={toggleMenu}
            className="self-end mb-6 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={e => handleNavLinkClick(e, id)}
              className={clsx(
                'block px-3 py-3 rounded-md text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
                activeSection === id
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold shadow'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-800 hover:text-green-700 dark:hover:text-green-300'
              )}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#get-started"
            onClick={e => handleNavLinkClick(e, 'get-started')}
            className="mt-4 block bg-gradient-to-tr from-green-600 to-green-500 text-white text-center px-5 py-3 rounded-lg font-semibold shadow hover:from-green-700 hover:to-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
