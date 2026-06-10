import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Our Work',
  description: 'View case studies of custom products we have built.',
})

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
