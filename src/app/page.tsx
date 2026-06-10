import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SERVICES } from '@/lib/constants'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { ArrowRight, Code, Lightbulb, Bot, Smartphone } from 'lucide-react'
import Link from 'next/link'

const ICON_MAP = {
  Code: Code,
  Lightbulb: Lightbulb,
  Bot: Bot,
  Smartphone: Smartphone,
}

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Showcase Section */}
        <section className="bg-surface-warm py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-ember text-base font-semibold tracking-wider uppercase">
                Our Services
              </h2>
              <p className="text-foreground mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Comprehensive tech solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => {
                const IconComponent =
                  ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code
                return (
                  <Card
                    key={service.slug}
                    className="group border-border bg-card hover:border-ember relative border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardHeader className="p-0">
                      <div className="bg-ember/10 text-ember group-hover:bg-ember mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="mb-2 text-xl font-bold">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="mt-6">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-ember hover:text-ember-dark inline-flex items-center text-sm font-semibold transition-colors"
                      >
                        Learn more{' '}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
