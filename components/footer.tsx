"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "TikTok", href: "#", icon: "TK" },
  { name: "Pinterest", href: "#", icon: "PI" },
]

const quickLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Book Now", href: "#booking" },
  { name: "Reviews", href: "#testimonials" },
]

export function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-foreground">MARCUS VEGA</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bespoke tattoo artistry in Los Angeles. 
              Custom designs crafted with precision and passion.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-xs"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-foreground font-medium mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-medium mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Studio</span>
                123 Arts District Blvd<br />
                Los Angeles, CA 90013
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:hello@marcusvega.ink" className="hover:text-foreground transition-colors">
                  hello@marcusvega.ink
                </a>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Hours</span>
                Tue — Sat: 11AM — 8PM<br />
                By appointment only
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Marcus Vega. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Designed with precision. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
