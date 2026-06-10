import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Service Details',
  description: 'Learn more about this specific technology service.',
})

export default function ServiceSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
