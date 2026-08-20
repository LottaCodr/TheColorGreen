'use client'
import { motion } from 'framer-motion'

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
            <div className="text-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 mx-auto mb-4"
                >
                    <div className="w-full h-full rounded-full border-4 border-green-200 border-t-green-600" />
                </motion.div>
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-gray-600 dark:text-gray-300 font-medium"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    )
} 