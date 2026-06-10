import React from 'react'

export default function Loading() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="border-ember h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
        <p className="text-muted-foreground animate-pulse text-sm font-medium">
          Loading Crodlin Technology...
        </p>
      </div>
    </div>
  )
}
