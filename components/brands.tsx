'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
    { name: 'Dream Works', src: '/brands/dreamworks.png' },
    { name: 'ESPN', src: '/brands/espn.png' },
    { name: 'Cambridge University', src: '/brands/cambrdge.png' },
    { name: 'Wendy', src: '/brands/wendy.png' },
    { name: 'Paco', src: '/brands/paco.png' },
    { name: 'Calvin Klein', src: '/brands/calvin.png' },
]

export default function BrandSection() {
    // Clone brands for infinite loop effect
    const marqueeBrands = [...brands, ...brands, ...brands];

    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-12 tracking-tight"
                >
                    Trusted by leading brands
                </motion.h3>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex w-max gap-20 animate-scroll-left"
                        style={{
                            animation: 'scrollLeft 30s linear infinite',
                        }}
                    >
                        {marqueeBrands.map((brand, index) => (
                            <motion.div
                                key={`${brand.name}-${index}`}
                                whileHover={{ scale: 1.12, y: -6, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="flex flex-col items-center justify-center min-w-[160px] h-24 md:h-28 px-4 py-2 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    width={140}
                                    height={60}
                                    loading="lazy"
                                    className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                                />
                                <span className="mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium text-center">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    {/* Gradient overlays for better UX */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/60" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/60 to-transparent dark:from-black dark:via-black/60" />
                </div>
            </div>
            {/* Custom marquee animation */}
            <style jsx>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>
        </section>
    )
}
