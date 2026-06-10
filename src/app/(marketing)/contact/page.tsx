import React from 'react'
import { ContactForm } from '@/components/forms/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Have a project in mind? Fill out the form below or drop us an email,
            and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="bg-card border-border rounded-xl border p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
