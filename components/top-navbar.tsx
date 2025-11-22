import Link from "next/link"

export function TopNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60">
      <div className="flex h-16 items-center justify-between px-8">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
          Metawave Studio
        </Link>
        <a 
          href="/case-studies" 
          className="text-sm text-foreground hover:text-primary transition-colors"
        >
          Case Studies
        </a>
      </div>
    </nav>
  )
}
