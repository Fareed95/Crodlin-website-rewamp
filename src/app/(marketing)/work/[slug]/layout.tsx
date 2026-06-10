import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Project Case Study',
  description: 'Deep dive into how we built this project.',
})

export default function WorkSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
