import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-ember text-6xl font-extrabold tracking-tight">404</h1>
      <h2 className="text-foreground mt-4 text-2xl font-bold">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved to a
        new address.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button className="bg-ember hover:bg-ember-dark px-6 py-3 font-semibold text-white">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  )
}
