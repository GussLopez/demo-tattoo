"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { number: "12+", label: "Years Experience" },
  { number: "3000+", label: "Tattoos Created" },
  { number: "50+", label: "Awards Won" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=1000&fit=crop"
                alt="Marcus Vega - Tattoo Artist"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 -z-10"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">About</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">The Artist</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                I&apos;m Marcus Vega, a tattoo artist based in Los Angeles with over a decade of 
                experience transforming ideas into permanent art. My journey began in the 
                underground scene of East LA, where I learned the fundamentals from some of 
                the industry&apos;s most respected artists.
              </p>
              <p>
                My approach combines traditional craftsmanship with contemporary aesthetics. 
                Each piece I create is a collaboration — your story, my execution. I specialize 
                in blackwork, fine line, and geometric designs, though my portfolio spans 
                multiple styles.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                &quot;Every tattoo tells a story. I&apos;m here to make sure yours is told beautifully.&quot;
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
