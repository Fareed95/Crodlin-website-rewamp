import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Blog Post',
  description: 'Read this article from Crodlin Technology.',
})

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
