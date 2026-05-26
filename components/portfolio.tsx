"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Geometric Sleeve",
    category: "Blackwork",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=800&fit=crop",
    height: "tall",
  },
  {
    id: 2,
    title: "Fine Line Rose",
    category: "Fine Line",
    image: "/comp-tattoo.jpg",
    height: "normal",
  },
  {
    id: 3,
    title: "Traditional Eagle",
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?w=600&h=700&fit=crop",
    height: "tall",
  },
  {
    id: 4,
    title: "Minimalist Script",
    category: "Lettering",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&h=500&fit=crop",
    height: "normal",
  },
  {
    id: 5,
    title: "Japanese Koi",
    category: "Japanese",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=900&fit=crop",
    height: "tall",
  },
  {
    id: 6,
    title: "Botanical Piece",
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=600&fit=crop",
    height: "normal",
  },
  {
    id: 7,
    title: "Portrait Work",
    category: "Realism",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=600&h=750&fit=crop",
    height: "tall",
  },
  {
    id: 8,
    title: "Dotwork Mandala",
    category: "Dotwork",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=600&fit=crop",
    height: "normal",
  },
]

const categories = ["All", "Blackwork", "Fine Line", "Traditional", "Japanese", "Realism", "Dotwork"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Portfolio</h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden"
            >
              <div className={`relative ${item.height === "tall" ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-background/80 flex flex-col justify-end p-6"
                >
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === item.id ? 0 : 20, 
                      opacity: hoveredId === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-2"
                  >
                    {item.category}
                  </motion.p>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === item.id ? 0 : 20, 
                      opacity: hoveredId === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="font-serif text-2xl text-foreground"
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>

                {/* Border animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
