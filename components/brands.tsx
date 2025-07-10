'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
    { name: 'Chanel', src: '/brands/chanel.png' },
    { name: 'Louis Vuitton', src: '/brands/lv.png' },
    { name: 'Prada', src: '/brands/prada.png' },
    { name: 'Calvin Klein', src: '/brands/calvinklein.png' },
    // add more brands here if needed
]

export default function BrandSection() {
    return (
        <section className="bg-white dark:bg-black py-12">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-xl font-medium text-gray-500 dark:text-gray-400 mb-6"
                >
                    Trusted by leading brands
                </motion.h3>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {},
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center"
                >
                    {brands.map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={160}
                                height={80}
                                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
