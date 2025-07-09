'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
    FaTwitter, FaInstagram, FaGlobe,
    FaDribbble, FaYoutube, FaGithub, FaMedium
} from 'react-icons/fa'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="home" className="bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-10 md:pt-20 relative">

                {/* Social Icons */}
                <div className="hidden md:flex flex-col gap-4 absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-gray-600 dark:text-gray-300">
                    <FaTwitter />
                    <FaInstagram />
                    <FaGlobe />
                    <FaMedium />
                    <FaDribbble />
                    <FaYoutube />
                    <FaGithub />
                </div>

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0"
                >
                    <Image
                        src="/heropics/malemodel.png"
                        alt="Model Left"
                        width={300}
                        height={500}
                        className="object-cover rounded-lg grayscale"
                    />
                </motion.div>

                {/* Center Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/3 text-center space-y-6"
                >
                    {/* Top Video */}
                    <div className="relative w-full max-w-sm mx-auto group cursor-pointer">
                        <Image
                            src="/heropics/group.png"
                            alt="Video Top"
                            width={400}
                            height={200}
                            className="mx-auto rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/50 transition">
                            <BsFillPlayCircleFill className="text-white text-4xl group-hover:scale-110 transition" />
                        </div>
                    </div>

                    {/* Center Text */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                        THE COLOUR
                    </h1>
                    <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-outline">
                        GREEN
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        A 2 LINE SUMMARY OF UNIQUENESS HERE
                    </p>

                    {/* Bottom Video */}
                    <div className="relative w-full max-w-sm mx-auto group cursor-pointer">
                        <Image
                            src="/heropics/group.png"
                            alt="Video Bottom"
                            width={400}
                            height={200}
                            className="mx-auto rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/50 transition">
                            <BsFillPlayCircleFill className="text-white text-4xl group-hover:scale-110 transition" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0"
                >
                    <Image
                        src="/heropics/whitemodel.png"
                        alt="Model Right"
                        width={300}
                        height={500}
                        className="object-cover rounded-lg grayscale"
                    />
                </motion.div>
            </div>
        </section>
    )
}
