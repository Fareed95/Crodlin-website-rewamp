import React from 'react'
import { SERVICES } from '@/lib/constants'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Code, Lightbulb, Bot, Smartphone } from 'lucide-react'

const ICON_MAP = {
  Code: Code,
  Lightbulb: Lightbulb,
  Bot: Bot,
  Smartphone: Smartphone,
}

export default function ServicesPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            We provide full-spectrum engineering capabilities from scoping and
            design to deployment and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES.map((service) => {
            const IconComponent =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code
            return (
              <Card
                key={service.slug}
                className="border-border bg-card flex flex-col justify-between border p-8"
              >
                <CardHeader className="p-0">
                  <div className="bg-ember/10 text-ember mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-4 text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
