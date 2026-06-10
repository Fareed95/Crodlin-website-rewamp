import React from 'react'
import { notFound } from 'next/navigation'

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

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-foreground mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
            {project.description}
          </p>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none leading-relaxed">
            <p>
              This case study covers our architecture choices, the technologies
              selected (Next.js, Supabase, Prisma), and how we implemented
              high-performance scaling solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
