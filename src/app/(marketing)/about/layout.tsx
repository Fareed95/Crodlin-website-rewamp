import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Meet the team behind Crodlin Technology.',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
