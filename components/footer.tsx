'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaYoutube, FaMedium } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaMedium />, href: 'https://medium.com', label: 'Medium' },
  { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
]

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Mission', href: '#mission' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Community', href: '#community' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Accessibility', href: '#accessibility' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold text-green-400 tracking-tight hover:opacity-90 transition"
              aria-label="ColorGreen Home"
            >
              <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-green-700 mr-1" />
              ColorGreen
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Discover a new era of sustainable style. Uniqueness, vibrance, and eco-conscious design that makes a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-lg"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-400 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-400 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-400 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ColorGreen. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with ❤️ for a sustainable future
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
