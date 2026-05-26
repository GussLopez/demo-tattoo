"use client"

import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Client since 2021",
    content: "Marcus transformed my vague idea into the most beautiful piece of art. His attention to detail and patience throughout the process made the experience unforgettable. I&apos;ve never felt more confident about a tattoo.",
    image: "SM",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Full sleeve project",
    content: "Working with Marcus on my full sleeve was an incredible journey. He took the time to understand my story and created something truly unique. The craftsmanship is impeccable.",
    image: "JR",
  },
  {
    id: 3,
    name: "Elena Park",
    role: "First tattoo experience",
    content: "As someone getting their first tattoo, I was nervous, but Marcus made me feel completely at ease. He explained every step and the result exceeded all my expectations. Highly recommend!",
    image: "EP",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Memorial piece",
    content: "Marcus created a memorial piece for my grandmother that brings tears to my eyes every time I see it. He captured her essence perfectly. This is more than a tattoo — it&apos;s a treasure.",
    image: "MC",
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Cover-up specialist",
    content: "I came to Marcus with a tattoo I&apos;d regretted for years. He turned it into something I&apos;m now proud to show off. His skill in cover-up work is unmatched.",
    image: "AF",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Client Stories</h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
                >
                  <div className="bg-background border border-border p-8 md:p-12">
                    {/* Quote icon */}
                    <svg 
                      className="w-10 h-10 text-accent/30 mb-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Content */}
                    <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                      {testimonial.content}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary flex items-center justify-center text-foreground font-medium">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-accent w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
