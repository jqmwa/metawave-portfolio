"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60">
      <div className="flex h-14 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
          Metawave Studio
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="/articles" className="text-sm text-foreground hover:text-primary transition-colors">Articles</a>
          <a href="/ux-laws" className="text-sm text-foreground hover:text-primary transition-colors">UX Laws</a>
          <a href="/case-studies" className="text-sm text-foreground hover:text-primary transition-colors">Case Studies</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-sidebar-border bg-sidebar/95 backdrop-blur px-4 pb-4 pt-2 space-y-1">
          <a href="/articles" className="block py-2 text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Articles</a>
          <a href="/ux-laws" className="block py-2 text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>UX Laws</a>
          <a href="/case-studies" className="block py-2 text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <a href="/contact" className="block py-2 text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}
