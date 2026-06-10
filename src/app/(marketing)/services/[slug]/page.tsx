import React from 'react'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/constants'
import { Code, Lightbulb, Bot, Smartphone } from 'lucide-react'

const ICON_MAP = {
  Code: Code,
  Lightbulb: Lightbulb,
  Bot: Bot,
  Smartphone: Smartphone,
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="bg-ember/10 text-ember mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <IconComponent className="h-6 w-6" />
          </div>
          <h1 className="text-foreground mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
            {service.description}
          </p>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none leading-relaxed">
            <p>
              We provide custom engineering, deployment architectures, and
              detailed scoping sessions to implement this solution correctly for
              your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
