'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="from-ember to-ember-dark bg-gradient-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Crodlin Technology
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-ember text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-ember font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/contact">
            <Button className="bg-ember hover:bg-ember-dark text-white shadow-sm transition-all duration-300">
              Get a Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-border bg-background animate-in slide-in-from-top-5 border-b px-4 pt-2 pb-6 shadow-lg duration-200 md:hidden">
          <div className="space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:bg-muted hover:text-ember block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive ? 'text-ember bg-muted' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="border-border border-t pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <Button className="bg-ember hover:bg-ember-dark w-full text-white">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
