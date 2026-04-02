"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { getLawBySlug, getAdjacentLaws, uxLaws } from "@/lib/ux-laws-data"
import Link from "next/link"
import { useEffect, useRef, useState, useCallback } from "react"
import { useParams, notFound } from "next/navigation"

const GLITCH_CHARS = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`"

function GlitchText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const scramble = useCallback(() => {
    const chars = text.split("")
    const numToScramble = Math.floor(Math.random() * 6) + 3
    const indices = new Set<number>()
    while (indices.size < Math.min(numToScramble, chars.length)) {
      indices.add(Math.floor(Math.random() * chars.length))
    }

    let frame = 0
    const totalFrames = 5

    const animate = () => {
      if (frame >= totalFrames) {
        setDisplay(text)
        timeoutRef.current = setTimeout(scramble, Math.random() * 4000 + 2000)
        return
      }

      const scrambled = chars.map((char, i) => {
        if (indices.has(i) && char !== " ") {
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        }
        return char
      })
      setDisplay(scrambled.join(""))
      frame++
      timeoutRef.current = setTimeout(animate, 60)
    }

    animate()
  }, [text])

  useEffect(() => {
    timeoutRef.current = setTimeout(scramble, Math.random() * 2000 + 500)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [scramble])

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono">
      {display}
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
