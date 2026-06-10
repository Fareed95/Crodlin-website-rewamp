import React from 'react'
import { prisma } from '@/lib/prisma'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import Link from 'next/link'
import { Blog } from '@prisma/client'

export default async function BlogPage() {
  let blogs: Blog[] = []
  try {
    blogs = await prisma.blog.findMany({
      orderBy: { publishedAt: 'desc' },
    })
  } catch (error) {
    console.error('Failed to fetch blogs from database:', error)
  }

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Blog
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Thoughts, advice, and updates from our engineering and design teams.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-muted-foreground py-12 text-center">
            No articles published yet. Stay tuned!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Card
                key={blog.id.toString()}
                className="border-border bg-card flex flex-col justify-between border p-6"
              >
                <CardHeader className="p-0">
                  <CardTitle className="mb-2 text-xl font-bold">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:text-ember transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {blog.paragraph}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
