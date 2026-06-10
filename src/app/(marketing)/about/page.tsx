import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            About Us
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Crodlin Technology is a premier software engineering and IT
            consultancy. We are dedicated to partnering with businesses to
            architect, build, and deploy custom software systems that solve
            complex problems.
          </p>
        </div>

        <div className="border-border mt-16 grid grid-cols-1 gap-12 border-t pt-16 md:grid-cols-2">
          <div>
            <h2 className="text-foreground text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              To empower enterprises and high-growth startups by delivering
              custom-crafted software products with superior performance,
              reliability, and modern UX design.
            </p>
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-bold">Our Values</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We believe in extreme transparency, rapid delivery velocity, clean
              engineering architecture, and continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
