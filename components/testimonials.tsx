"use client"

import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Hernández",
    role: "Cliente desde 2021",
    content:
      "Carlos convirtió mi idea en una obra de arte increíble. Su atención al detalle y la paciencia durante todo el proceso hicieron que la experiencia fuera inolvidable. Nunca me había sentido tan seguro con un tatuaje.",
    image: "CH",
  },
  {
    id: 2,
    name: "Luis Martínez",
    role: "Proyecto de manga completa",
    content:
      "Trabajar con Carlos en mi manga completa fue una experiencia increíble. Se tomó el tiempo de entender mi historia y creó algo realmente único. La calidad de su trabajo es impecable.",
    image: "LM",
  },
  {
    id: 3,
    name: "Fernanda López",
    role: "Primer tatuaje",
    content:
      "Como era mi primer tatuaje, estaba muy nerviosa, pero Carlos hizo que me sintiera completamente tranquila. Me explicó cada paso y el resultado superó todas mis expectativas. ¡Lo recomiendo muchísimo!",
    image: "FL",
  },
  {
    id: 4,
    name: "Jorge Ramírez",
    role: "Tatuaje conmemorativo",
    content:
      "Carlos creó un tatuaje en honor a mi abuela que me emociona cada vez que lo veo. Capturó perfectamente su esencia. Esto es más que un tatuaje, es un recuerdo para toda la vida.",
    image: "JR",
  },
  {
    id: 5,
    name: "Andrea Gómez",
    role: "Especialista en cover-ups",
    content:
      "Llegué con un tatuaje del que me arrepentía desde hace años y Carlos lo transformó en algo que ahora me encanta presumir. Su habilidad para hacer cover-ups es impresionante.",
    image: "AG",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Reseñas</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Historias de Clientes</h2>
        </motion.div>

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
                    <svg
                      className="w-10 h-10 text-accent/30 mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                      {testimonial.content}
                    </p>

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

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
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
