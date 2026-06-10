import React from 'react'
import Link from 'next/link'
import { NAV_LINKS, SERVICES } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo & Description */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white">
                Crodlin<span className="text-ember"> Technology</span>
              </span>
            </Link>
            <p className="max-w-md text-sm text-gray-400">
              End-to-end software development and IT consultancy. We build
              scalable, modern digital products for startups and enterprises.
            </p>
          </div>

          {/* Links grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                Connect
              </h3>
              <ul role="list" className="mt-4 space-y-4 text-sm text-gray-400">
                <li>
                  <span className="block text-gray-300">Sales Inquiry</span>
                  <a
                    href="mailto:hello@crodlin.com"
                    className="transition-colors hover:text-white"
                  >
                    hello@crodlin.com
                  </a>
                </li>
                <li>
                  <span className="block text-gray-300">Office</span>
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Crodlin Technology. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition-colors hover:text-gray-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors hover:text-gray-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
