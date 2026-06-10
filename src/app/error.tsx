'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Uncaught application error:', error)
  }, [error])

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-ember text-4xl font-extrabold tracking-tight">
        Something went wrong!
      </h1>
      <p className="text-muted-foreground mt-2 max-w-md">
        An unexpected error occurred. Our team has been notified and we are
        looking into it.
      </p>
      <div className="mt-8 flex gap-4">
        <Button
          onClick={() => reset()}
          className="bg-ember hover:bg-ember-dark font-semibold text-white"
        >
          Try again
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = '/')}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}
