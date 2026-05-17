'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Upload, X, Loader2, CheckCircle } from 'lucide-react'

interface FormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  partDescription: string
  annualQuantity: string
  file: File | null
}

interface FormErrors {
  companyName?: string
  contactName?: string
  email?: string
  partDescription?: string
  annualQuantity?: string
  file?: string
}

const ACCEPTED_FILE_TYPES = '.pdf,.step,.stp,.igs,.dxf,.dwg,.png,.jpg,.jpeg'
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

const initialFormData: FormData = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  partDescription: '',
  annualQuantity: '',
  file: null,
}

export function QuoteForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters'
    }

    if (formData.contactName.trim().length < 2) {
      newErrors.contactName = 'Contact name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.partDescription.trim().length < 10) {
      newErrors.partDescription = 'Part description must be at least 10 characters'
    }

    const quantity = parseInt(formData.annualQuantity, 10)
    if (isNaN(quantity) || quantity < 1) {
      newErrors.annualQuantity = 'Annual quantity must be at least 1'
    }

    if (formData.file && formData.file.size > MAX_FILE_SIZE) {
      newErrors.file = 'File size must be less than 10MB'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]')
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('[v0] Form submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileSelect = useCallback((file: File | null) => {
    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: 'File size must be less than 10MB' }))
      return
    }
    setFormData((prev) => ({ ...prev, file }))
    setErrors((prev) => ({ ...prev, file: undefined }))
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleFileSelect(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0] || null
    handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setErrors({})
    setIsSubmitted(false)
  }

  const isFormValid =
    formData.companyName.trim().length >= 2 &&
    formData.contactName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.partDescription.trim().length >= 10 &&
    parseInt(formData.annualQuantity, 10) >= 1

  return (
    <section
      id="quote-form"
      aria-labelledby="quote-heading"
      className="py-16 lg:py-20"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-surface/80 backdrop-blur-md border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6 sm:p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8 min-h-[600px] flex flex-col justify-center items-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Thank You!
                </h2>
                <p className="mt-4 text-muted max-w-md mx-auto">
                  Your inquiry has been received. Our engineering team will review
                  your specifications and respond within 48 business hours.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-8 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                  >
                    Request a Quote
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Submit your part specifications and receive a detailed quote
                    within 48 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Company & Contact Name */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors ${
                          errors.companyName
                            ? 'border-destructive focus:border-destructive focus:ring-destructive'
                            : 'border-border focus:border-accent focus:ring-accent'
                        }`}
                        placeholder="Your company"
                      />
                      {errors.companyName && (
                        <p id="companyName-error" className="mt-1 text-sm text-destructive">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Contact Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.contactName}
                        aria-describedby={errors.contactName ? 'contactName-error' : undefined}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors ${
                          errors.contactName
                            ? 'border-destructive focus:border-destructive focus:ring-destructive'
                            : 'border-border focus:border-accent focus:ring-accent'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.contactName && (
                        <p id="contactName-error" className="mt-1 text-sm text-destructive">
                          {errors.contactName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-destructive focus:border-destructive focus:ring-destructive'
                            : 'border-border focus:border-accent focus:ring-accent'
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone <span className="text-muted">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="+49 123 456 7890"
                      />
                    </div>
                  </div>

                  {/* Part Description */}
                  <div className="mb-4">
                    <label
                      htmlFor="partDescription"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Part Description <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="partDescription"
                      name="partDescription"
                      value={formData.partDescription}
                      onChange={handleInputChange}
                      rows={4}
                      aria-invalid={!!errors.partDescription}
                      aria-describedby={errors.partDescription ? 'partDescription-error' : undefined}
                      className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.partDescription
                          ? 'border-destructive focus:border-destructive focus:ring-destructive'
                          : 'border-border focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="Describe your part requirements, materials, tolerances, etc."
                    />
                    {errors.partDescription && (
                      <p id="partDescription-error" className="mt-1 text-sm text-destructive">
                        {errors.partDescription}
                      </p>
                    )}
                  </div>

                  {/* Annual Quantity */}
                  <div className="mb-4">
                    <label
                      htmlFor="annualQuantity"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Annual Quantity <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="number"
                      id="annualQuantity"
                      name="annualQuantity"
                      value={formData.annualQuantity}
                      onChange={handleInputChange}
                      min="1"
                      aria-invalid={!!errors.annualQuantity}
                      aria-describedby={errors.annualQuantity ? 'annualQuantity-error' : undefined}
                      className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors ${
                        errors.annualQuantity
                          ? 'border-destructive focus:border-destructive focus:ring-destructive'
                          : 'border-border focus:border-accent focus:ring-accent'
                      }`}
                      placeholder="Expected yearly volume"
                    />
                    {errors.annualQuantity && (
                      <p id="annualQuantity-error" className="mt-1 text-sm text-destructive">
                        {errors.annualQuantity}
                      </p>
                    )}
                  </div>

                  {/* File Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Attach Drawing{' '}
                      <span className="text-muted">(optional, max 10MB)</span>
                    </label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        isDragging
                          ? 'border-accent bg-accent/5'
                          : errors.file
                          ? 'border-destructive'
                          : 'border-border hover:border-muted'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          fileInputRef.current?.click()
                        }
                      }}
                      aria-describedby="file-hint"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPTED_FILE_TYPES}
                        onChange={handleFileChange}
                        className="sr-only"
                        aria-label="Upload file"
                      />

                      {formData.file ? (
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-sm text-foreground truncate max-w-xs">
                            {formData.file.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeFile()
                            }}
                            className="p-1 text-muted hover:text-destructive transition-colors"
                            aria-label="Remove file"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-muted" />
                          <p className="text-sm text-muted">
                            Drag and drop or click to attach a file
                          </p>
                        </div>
                      )}
                    </div>
                    <p id="file-hint" className="mt-1 text-xs text-muted">
                      PDF, STEP, STP, IGS, DXF, DWG, PNG, JPG accepted
                    </p>
                    {errors.file && (
                      <p className="mt-1 text-sm text-destructive">{errors.file}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
