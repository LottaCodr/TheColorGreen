'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function EventSection() {
    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-7"
                >
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-2 animate-pulse">
                        Upcoming Event
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900 dark:text-white mb-4 leading-tight">
                        E for Effort, E for Event
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Join us for an unforgettable experience where creativity meets opportunity. 
                        Network with industry leaders, participate in hands-on workshops, and discover what makes our event truly unique.
                    </p>
                    <ul className="mb-8 space-y-2">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-base">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                            Inspiring keynote speakers
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-base">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                            Interactive workshops & networking
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-base">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                            Free swag & refreshments
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                            Apply Now
                        </button>
                        <button className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT: Video/Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="relative group cursor-pointer shadow-2xl rounded-2xl overflow-hidden"
                    tabIndex={0}
                    aria-label="Watch event highlight video"
                    role="button"
                >
                    <Image
                        src="/event/event1.png"
                        alt="Event highlight"
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover w-full h-[320px] md:h-[400px] grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition duration-500"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/50 group-focus:bg-black/50 transition rounded-2xl">
                        <BsFillPlayCircleFill className="text-white text-6xl md:text-7xl drop-shadow-lg group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" />
                        <span className="mt-4 text-white text-base font-medium bg-black/60 px-4 py-1 rounded-full opacity-80">
                            Watch Highlights
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
