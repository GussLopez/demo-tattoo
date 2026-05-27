"use client"

import { motion } from "framer-motion"
import { useState, useRef, type ChangeEvent, type FormEvent } from "react"

const tattooTypes = [
  "Blackwork",
  "Línea fina",
  "Tradicional",
  "Japonés",
  "Realismo",
  "Geométrico",
  "Dotwork",
  "Lettering",
  "Otro",
]

const sizes = [
  "Pequeño (5-10 cm)",
  "Mediano (10-15 cm)",
  "Grande (15-25 cm)",
  "Extra grande (25+ cm)",
  "Manga completa",
  "Media manga",
]

const bodyParts = [
  "Brazo",
  "Antebrazo",
  "Muñeca",
  "Hombro",
  "Espalda",
  "Pecho",
  "Costillas",
  "Pierna",
  "Muslo",
  "Tobillo",
  "Cuello",
  "Mano",
  "Otro",
]

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    size: "",
    bodyPart: "",
    description: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files).slice(0, 5))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 md:py-32 md:pt-58 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-8 border border-accent flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-serif text-3xl text-foreground mb-4">
              Solicitud recibida
            </h3>

            <p className="text-muted-foreground">
              Gracias por contactarme. Revisaré tu solicitud y te responderé en un plazo de 24 a 48 horas.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            Agenda tu cita
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Reserva una consulta
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            ¿Listo para convertir tu idea en realidad? Completa el formulario y me pondré en contacto contigo
            para hablar sobre tu proyecto y agendar tu sesión.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Información personal */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground mb-2">
                Nombre completo *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-foreground mb-2">
                Correo electrónico *
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-foreground mb-2">
              Número de teléfono
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="+52 999 000 0000"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="tattooType" className="block text-sm text-foreground mb-2">
                Estilo de tatuaje *
              </label>

              <select
                id="tattooType"
                name="tattooType"
                required
                value={formData.tattooType}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Selecciona un estilo</option>

                {tattooTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="size" className="block text-sm text-foreground mb-2">
                Tamaño aproximado *
              </label>

              <select
                id="size"
                name="size"
                required
                value={formData.size}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Selecciona un tamaño</option>

                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="bodyPart" className="block text-sm text-foreground mb-2">
                Parte del cuerpo *
              </label>

              <select
                id="bodyPart"
                name="bodyPart"
                required
                value={formData.bodyPart}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Selecciona una zona</option>

                {bodyParts.map(part => (
                  <option key={part} value={part}>{part}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm text-foreground mb-2">
              Describe tu idea *
            </label>

            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Cuéntame sobre tu idea de tatuaje, elementos específicos, significado, referencias, etc."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full bg-foreground text-background py-4 font-medium tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>

                Enviando solicitud...
              </span>
            ) : (
              "Enviar solicitud de cita"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}