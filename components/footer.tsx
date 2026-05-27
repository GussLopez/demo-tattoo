"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "TikTok", href: "#", icon: "TK" },
  { name: "Pinterest", href: "#", icon: "PI" },
]

const quickLinks = [
  { name: "Portafolio", href: "#portfolio" },
  { name: "Sobre mí", href: "#about" },
  { name: "Reserva ahora", href: "#booking" },
  { name: "Reseñas", href: "#testimonials" },
]

export function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-foreground">Juan Pérez</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tatuajes personalizados en Cancún. Diseños a medida elaborados con precisión y pasión.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-foreground font-medium mb-6 text-sm tracking-wider uppercase">Enlaces Rápidos</h4>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-medium mb-6 text-sm tracking-wider uppercase">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Estudio</span>
                123 Blvd Colosio<br />
                Cancún, Quintana Roo 77530
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:hello@juanperez.com" className="hover:text-foreground transition-colors">
                  hello@juanperez.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">Horarios</span>
                LUn — Sab: 11AM — 8PM<br />
                Con reservación uicamente
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Juan Pérez. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Diseñado con precisión. Hecho con pasión.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
