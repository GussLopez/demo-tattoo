"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Booking", href: "#booking" },
  { name: "Reviews", href: "#testimonials" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="group">
          <motion.span 
            className="text-foreground text-lg tracking-tight font-medium"
            whileHover={{ opacity: 0.7 }}
          >
            MARCUS VEGA
          </motion.span>
          <span className="block h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              href="#booking"
              className="text-sm text-foreground border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Contact ↗
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block w-6 h-px bg-foreground"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block w-6 h-px bg-foreground"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block w-6 h-px bg-foreground"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm mt-4"
      >
        <ul className="flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
