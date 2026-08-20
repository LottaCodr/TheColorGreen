import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/site'
import Logo from './Logo'

/** Sticky navbar: white, tall on desktop, shrinks + gains a hairline on scroll. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Prevent body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'border-b border-neutral-200/80 shadow-[0_1px_20px_rgba(0,0,0,0.04)]' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-300 md:px-10 ${
          scrolled ? 'h-[72px]' : 'h-[84px] md:h-[130px]'
        }`}
      >
        {/* Logo */}
        <Link to="/" aria-label="TCG — The Colour Green, home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="group relative py-2 text-[15px] font-medium text-body transition-colors hover:text-black"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-black font-semibold' : ''}>{link.label}</span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-black transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <motion.span whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact#newsletter"
              className="ml-2 bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
            >
              Contribute
            </Link>
          </motion.span>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center text-black lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Scroll progress hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-black"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[84px] z-40 bg-white lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
              }}
              className="flex flex-col gap-2 px-8 pt-10"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                  }}
                >
                  <NavLink
                    to={link.to}
                    className="block border-b border-neutral-200 py-5 text-2xl font-semibold text-ink"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -18 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                }}
                className="pt-8"
              >
                <Link
                  to="/contact#newsletter"
                  className="inline-block bg-black px-10 py-4 text-base font-semibold text-white"
                >
                  Contribute
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
