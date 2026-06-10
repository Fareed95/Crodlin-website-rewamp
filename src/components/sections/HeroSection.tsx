import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-surface-dark relative overflow-hidden py-24 text-white sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,90,48,0.15),transparent_45%)]" />
      <div className="bg-ember/5 absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Text Content */}
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm">
              <Star className="fill-ember text-ember h-4 w-4" />
              <span>Trusted Software Partners</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              We build software{' '}
              <span className="from-ember to-ember-dark bg-gradient-to-r bg-clip-text text-transparent">
                that scales
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              End-to-end custom product engineering, software development, and
              IT consultancy. We turn ambitious visions into robust digital
              realities for startups and enterprises.
            </p>

            {/* CTAs */}
            <div className="mt-10 gap-4 sm:flex sm:justify-center lg:justify-start">
              <Link href="/contact">
                <Button className="bg-ember hover:bg-ember-dark shadow-ember/25 w-full rounded-md px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 sm:w-auto">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  className="w-full rounded-md border-white/20 px-8 py-6 text-base font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element / Graphic */}
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Glassmorphic card */}
              <div className="relative rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-400">
                    crodlin.config.ts
                  </span>
                </div>

                <div className="mt-4 space-y-2 font-mono text-sm text-gray-300">
                  <p className="text-gray-500">
                    {'// Initialize Crodlin Technology'}
                  </p>
                  <p>
                    <span className="text-ember">const</span>{' '}
                    <span className="text-blue-400">project</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    client:{' '}
                    <span className="text-green-400">
                      &quot;Your Startup / Enterprise&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    scope: [
                    <span className="text-green-400">&quot;Frontend&quot;</span>
                    ,{' '}
                    <span className="text-green-400">&quot;Backend&quot;</span>,{' '}
                    <span className="text-green-400">
                      &quot;AI Integration&quot;
                    </span>
                    ],
                  </p>
                  <p className="pl-4">
                    velocity:{' '}
                    <span className="text-yellow-400">&quot;Maximum&quot;</span>
                    ,
                  </p>
                  <p className="pl-4">
                    deployment:{' '}
                    <span className="text-yellow-400">
                      &quot;AWS/Supabase&quot;
                    </span>
                    ,
                  </p>
                  <p>{'}'}</p>
                  <br />
                  <p className="text-gray-500">{'// Run build pipeline'}</p>
                  <p>
                    <span className="text-purple-400">await</span>{' '}
                    buildSuccess(project)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
