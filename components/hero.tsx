'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
    FaTwitter, FaInstagram,
    FaYoutube, FaMedium
} from 'react-icons/fa'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const SOCIALS = [
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaMedium />, href: 'https://medium.com', label: 'Medium' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
]

function SocialIcons() {
    return (
        <nav
            aria-label="Social media"
            className="hidden md:flex flex-col gap-4 absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-gray-600 dark:text-gray-300 z-20"
        >
            {SOCIALS.map((s, i) => (
                <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                    {s.icon}
                </Link>
            ))}
        </nav>
    )
}

function VideoCard({ src, alt, onClick, label }: { src: string, alt: string, onClick?: () => void, label?: string }) {
    return (
        <button
            className="relative w-full max-w-sm mx-auto group focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl transition"
            onClick={onClick}
            aria-label={label || alt}
            type="button"
        >
            <Image
                src={src}
                alt={alt}
                width={400}
                height={200}
                className="mx-auto rounded-xl object-cover"
                priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/50 transition">
                <BsFillPlayCircleFill className="text-white text-5xl group-hover:scale-110 transition-transform drop-shadow-lg" />
            </div>
        </button>
    )
}

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gradient-to-br from-white via-green-50 to-green-100 dark:from-black dark:via-gray-900 dark:to-green-950 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-12 md:pt-24 relative gap-8">

                {/* Social Icons */}
                <SocialIcons />

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0 relative z-10"
                >
                    <div className="relative group">
                        <Image
                            src="/heropics/malemodel.png"
                            alt="Model Left"
                            width={320}
                            height={520}
                            className="object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all shadow-xl"
                            priority
                        />
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Meet our team
                        </span>
                    </div>
                </motion.div>

                {/* Center Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/3 text-center space-y-8 relative z-20"
                >
                    {/* Top Video */}
                    <VideoCard
                        src="/heropics/group.png"
                        alt="Watch our story"
                        label="Watch our story"
                        onClick={() => window.open('https://youtube.com', '_blank')}
                    />

                    {/* Center Text */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
                            THE COLOUR
                        </h1>
                        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-500 via-lime-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
                            GREEN
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xs mx-auto">
                            Discover a new era of sustainable style.<br />
                            Uniqueness, vibrance, and eco-conscious design.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Link
                            href="#about"
                            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Bottom Video */}
                    <VideoCard
                        src="/heropics/group.png"
                        alt="See our process"
                        label="See our process"
                        onClick={() => window.open('https://youtube.com', '_blank')}
                    />
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 relative z-10"
                >
                    <div className="relative group">
                        <Image
                            src="/heropics/whitemodel.png"
                            alt="Model Right"
                            width={320}
                            height={520}
                            className="object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all shadow-xl"
                            priority
                        />
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Explore our collection
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
