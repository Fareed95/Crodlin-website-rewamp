import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://crodlin.com'

export const siteConfig = {
  name: 'Crodlin Technology',
  description:
    'End-to-end software development and IT consultancy for startups and enterprises.',
  url: baseUrl,
  ogImage: `${baseUrl}/images/og-default.jpg`,
}

export function generatePageMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title: string
  description?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      images: [{ url: image ?? siteConfig.ogImage }],
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      images: [image ?? siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
