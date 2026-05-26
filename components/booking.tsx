"use client"

import { motion } from "framer-motion"
import { useState, useRef, type ChangeEvent, type FormEvent } from "react"

const tattooTypes = [
  "Blackwork",
  "Fine Line",
  "Traditional",
  "Japanese",
  "Realism",
  "Geometric",
  "Dotwork",
  "Lettering",
  "Other",
]

const sizes = [
  "Small (2-4 inches)",
  "Medium (4-6 inches)",
  "Large (6-10 inches)",
  "Extra Large (10+ inches)",
  "Full Sleeve",
  "Half Sleeve",
]

const bodyParts = [
  "Arm",
  "Forearm",
  "Wrist",
  "Shoulder",
  "Back",
  "Chest",
  "Ribs",
  "Leg",
  "Thigh",
  "Ankle",
  "Neck",
  "Hand",
  "Other",
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 md:py-32 px-6 md:px-12">
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
            <h3 className="font-serif text-3xl text-foreground mb-4">Request Received</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. I&apos;ll review your request and get back to you within 24-48 hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Get Inked</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Book a Consultation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and I&apos;ll get back to you 
            to discuss your project and schedule your session.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Tattoo Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="tattooType" className="block text-sm text-foreground mb-2">
                Tattoo Style *
              </label>
              <select
                id="tattooType"
                name="tattooType"
                required
                value={formData.tattooType}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select style</option>
                {tattooTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="size" className="block text-sm text-foreground mb-2">
                Approximate Size *
              </label>
              <select
                id="size"
                name="size"
                required
                value={formData.size}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select size</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bodyPart" className="block text-sm text-foreground mb-2">
                Body Placement *
              </label>
              <select
                id="bodyPart"
                name="bodyPart"
                required
                value={formData.bodyPart}
                onChange={handleChange}
                className="w-full bg-input border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select area</option>
                {bodyParts.map(part => (
                  <option key={part} value={part}>{part}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm text-foreground mb-2">
              Describe Your Vision *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your tattoo idea, any specific elements, meaning behind it, etc."
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm text-foreground mb-2">
              Reference Images (Optional)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-border hover:border-accent/50 p-8 text-center cursor-pointer transition-colors"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <svg className="w-8 h-8 mx-auto mb-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-muted-foreground text-sm">
                {files.length > 0 
                  ? `${files.length} file(s) selected`
                  : "Click to upload reference images (max 5)"}
              </p>
            </div>
          </div>

          {/* Submit Button */}
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
                Sending Request...
              </span>
            ) : (
              "Submit Booking Request"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
