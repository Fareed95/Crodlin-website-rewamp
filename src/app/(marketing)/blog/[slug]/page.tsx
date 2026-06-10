import React from 'react'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  let blog = null

  try {
    blog = await prisma.blog.findUnique({
      where: { slug },
    })
  } catch (error) {
    console.error('Failed to query blog post:', error)
  }

  if (!blog) {
    notFound()
  }

  return (
    <article className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {blog.title}
          </h1>
          {blog.publishedAt && (
            <time className="text-muted-foreground text-sm">
              {new Date(blog.publishedAt).toLocaleDateString()}
            </time>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none leading-relaxed">
          <p className="text-foreground mb-6 text-xl font-medium">
            {blog.paragraph}
          </p>
          {blog.metaDescription && (
            <p className="border-ember mt-4 border-l-4 pl-4 italic">
              {blog.metaDescription}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
