"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background z-10" />
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear" 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6"
        >
          Tattoo Artist · Los Angeles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-none tracking-tight mb-8"
        >
          <span className="italic">Crafting</span> stories
          <br />
          on skin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Bespoke tattoo artistry. Custom designs crafted with precision, 
          passion, and a deep respect for the art form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#booking"
            className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Book a Consultation</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="#portfolio"
            className="px-8 py-4 text-foreground border border-foreground/20 hover:border-foreground/50 transition-all duration-300 tracking-wide"
          >
            View Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
