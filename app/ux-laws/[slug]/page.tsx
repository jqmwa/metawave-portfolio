"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { getLawBySlug, getAdjacentLaws, uxLaws } from "@/lib/ux-laws-data"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useParams, notFound } from "next/navigation"

function GlitchText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationId: number
    let timeout: ReturnType<typeof setTimeout>

    const glitch = () => {
      el.style.textShadow = `
        ${Math.random() * 6 - 3}px ${Math.random() * 3 - 1.5}px 0 rgba(33, 186, 140, 0.7),
        ${Math.random() * -6 + 3}px ${Math.random() * 3 - 1.5}px 0 rgba(102, 83, 223, 0.7),
        ${Math.random() * 3 - 1.5}px ${Math.random() * 6 - 3}px 0 rgba(212, 207, 242, 0.4)
      `
      el.style.transform = `translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 2 - 1}px)`

      timeout = setTimeout(() => {
        el.style.textShadow = "none"
        el.style.transform = "translate(0, 0)"
      }, 120)

      animationId = requestAnimationFrame(() => {
        setTimeout(glitch, Math.random() * 3000 + 2000)
      })
    }

    const initial = setTimeout(glitch, Math.random() * 1500)

    return () => {
      clearTimeout(initial)
      clearTimeout(timeout)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <h1
      ref={ref}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-transform duration-75"
      style={{ willChange: "transform, text-shadow" }}
    >
      {text}
    </h1>
  )
}

function getCategoryColor(category: string) {
  switch (category) {
    case "Heuristic":
      return "border-primary/40 text-primary bg-primary/5"
    case "Gestalt":
      return "border-secondary/40 text-secondary bg-secondary/5"
    case "Principle":
      return "border-accent/40 text-accent bg-accent/5"
    default:
      return "border-muted-foreground/40 text-muted-foreground"
  }
}

function getCategoryAccent(category: string) {
  switch (category) {
    case "Heuristic":
      return "text-primary"
    case "Gestalt":
      return "text-secondary"
    case "Principle":
      return "text-accent"
    default:
      return "text-muted-foreground"
  }
}

export default function UXLawDetail() {
  const params = useParams()
  const slug = params.slug as string
  const law = getLawBySlug(slug)

  if (!law) {
    notFound()
  }

  const { prev, next } = getAdjacentLaws(slug)
  const accentColor = getCategoryAccent(law.category)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-4xl mx-auto py-12 px-6">
            {/* Back link */}
            <Link
              href="/ux-laws"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <span>&larr;</span>
              <span>All UX Laws</span>
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 flex-wrap mb-6">
                <span className="text-sm font-mono text-muted-foreground">
                  {String(law.id).padStart(2, "0")} / {String(uxLaws.length).padStart(2, "0")}
                </span>
                <span
                  className={`text-xs font-mono uppercase tracking-wider px-3 py-1 border rounded-full ${getCategoryColor(law.category)}`}
                >
                  {law.category}
                </span>
              </div>

              <GlitchText text={law.name} />

              <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {law.description}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-12" />

            {/* Key Takeaways */}
            <section className="mb-12">
              <h2 className={`text-xs font-mono uppercase tracking-wider mb-6 ${accentColor}`}>
                Key Takeaways
              </h2>
              <div className="space-y-4">
                {law.keyTakeaways.map((takeaway, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border transition-colors duration-300"
                  >
                    <span className={`font-mono text-sm mt-0.5 ${accentColor}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/90 leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-12" />

            {/* Origin */}
            <section className="mb-12">
              <h2 className={`text-xs font-mono uppercase tracking-wider mb-6 ${accentColor}`}>
                Origin
              </h2>
              <div className="relative pl-6 border-l-2 border-border/50">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {law.origin}
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-12" />

            {/* Related Laws */}
            <section className="mb-16">
              <h2 className={`text-xs font-mono uppercase tracking-wider mb-6 ${accentColor}`}>
                Related Laws
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {law.relatedLaws.map((relatedName) => {
                  const related = uxLaws.find((l) => l.name === relatedName)
                  if (!related) return null
                  return (
                    <Link
                      key={related.slug}
                      href={`/ux-laws/${related.slug}`}
                      className="group p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          {String(related.id).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 border rounded-full ${getCategoryColor(related.category)}`}
                        >
                          {related.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                  )
                })}
              </div>
            </section>

            {/* Prev / Next Navigation */}
            <div className="flex items-stretch gap-4 border-t border-border/50 pt-8">
              {prev ? (
                <Link
                  href={`/ux-laws/${prev.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <span className="text-xs text-muted-foreground font-mono">&larr; Previous</span>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                    {prev.name}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/ux-laws/${next.slug}`}
                  className="group flex-1 p-4 rounded-lg border border-border/50 hover:border-primary/40 transition-all duration-300 text-right"
                >
                  <span className="text-xs text-muted-foreground font-mono">Next &rarr;</span>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                    {next.name}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
