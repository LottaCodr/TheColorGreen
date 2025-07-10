'use client'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

const sections = ['home', 'about', 'features', 'contact']

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasShadow, setHasShadow] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const toggleMenu = () => setIsOpen(!isOpen)

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
            const offsets = sections.map(id => {
                const el = document.getElementById(id)
                if (!el) return { id, offset: 0 }
                return { id, offset: el.offsetTop - 100 }
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

    // Auto-close on link click
    const handleMobileLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <header
            className={clsx(
                'sticky top-0 z-50 backdrop-blur-md transition-all duration-300',
                hasShadow && 'shadow-md',
                'bg-white/80 dark:bg-black/50'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
                    ColorGreen
                </Link>

                {/* Mobile Button */}
                <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-200">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {sections.map(section => (
                        <Link
                            key={section}
                            href={`#${section}`}
                            className={clsx(
                                'capitalize hover:text-green-600 dark:hover:text-green-400 transition',
                                activeSection === section
                                    ? 'text-green-600 dark:text-green-400 font-semibold'
                                    : 'text-gray-700 dark:text-gray-300'
                            )}
                        >
                            {section}
                        </Link>
                    ))}

                    <Link
                        href="#get-started"
                        className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-500 transition"
                    >
                        Contribute
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-white/80 dark:bg-black/70 backdrop-blur-md">
                    {sections.map(section => (
                        <Link
                            key={section}
                            href={`#${section}`}
                            onClick={handleMobileLinkClick}
                            className={clsx(
                                'block capitalize',
                                activeSection === section
                                    ? 'text-green-600 dark:text-green-400 font-semibold'
                                    : 'text-gray-700 dark:text-gray-300'
                            )}
                        >
                            {section}
                        </Link>
                    ))}

                    <Link
                        href="#get-started"
                        onClick={handleMobileLinkClick}
                        className="block bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-500 transition"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    )
}
