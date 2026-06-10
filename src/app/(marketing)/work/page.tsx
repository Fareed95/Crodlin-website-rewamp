import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

const PORTFOLIO_PROJECTS = [
  {
    title: 'Veloce SaaS Platform',
    description:
      'Built a robust multitenant dashboard and API platform serving 10k+ requests per second.',
    slug: 'veloce-saas',
  },
  {
    title: 'Helix Mobile App',
    description:
      'Created a cross-platform mobile application with secure offline sync and biometrics.',
    slug: 'helix-mobile',
  },
]

export default function WorkPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Case studies of some of the software products and systems we have
            delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Card
              key={project.slug}
              className="border-border bg-card flex flex-col justify-between border p-8"
            >
              <CardHeader className="p-0">
                <CardTitle className="mb-4 text-2xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
