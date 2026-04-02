"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { uxLaws } from "@/lib/ux-laws-data"
import { useEffect, useRef } from "react"
import Link from "next/link"

function GlitchText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationId: number
    let timeout: ReturnType<typeof setTimeout>

    const glitch = () => {
      el.style.textShadow = `
        ${Math.random() * 4 - 2}px ${Math.random() * 2 - 1}px 0 rgba(33, 186, 140, 0.7),
        ${Math.random() * -4 + 2}px ${Math.random() * 2 - 1}px 0 rgba(102, 83, 223, 0.7),
        ${Math.random() * 2 - 1}px ${Math.random() * 4 - 2}px 0 rgba(212, 207, 242, 0.4)
      `
      el.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 1 - 0.5}px)`

      timeout = setTimeout(() => {
        el.style.textShadow = "none"
        el.style.transform = "translate(0, 0)"
      }, 100)

      animationId = requestAnimationFrame(() => {
        setTimeout(glitch, Math.random() * 3000 + 2000)
      })
    }

    const initial = setTimeout(glitch, Math.random() * 2000)

    return () => {
      clearTimeout(initial)
      clearTimeout(timeout)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <h2
      ref={ref}
      className="text-3xl md:text-4xl font-bold text-foreground transition-transform duration-75"
      style={{ willChange: "transform, text-shadow" }}
    >
      {text}
    </h2>
  )
}

function getCategoryColor(category: string) {
  switch (category) {
    case "Heuristic":
      return "border-primary/40 text-primary"
    case "Gestalt":
      return "border-secondary/40 text-secondary"
    case "Principle":
      return "border-accent/40 text-accent"
    default:
      return "border-muted-foreground/40 text-muted-foreground"
  }
}

export default function UXLaws() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-12 px-6">
            <div className="mb-16">
              <div className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
                Reference Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                UX <span className="text-primary">Laws</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Fundamental principles that guide user experience design.
                Understanding these laws helps create products that feel
                intuitive and work the way users expect.
              </p>
            </div>

            <div className="space-y-16">
              {uxLaws.map((law) => (
                <Link
                  key={law.id}
                  href={`/ux-laws/${law.slug}`}
                  className="group relative block"
                >
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-sm font-mono text-muted-foreground">
                        {String(law.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-xs font-mono uppercase tracking-wider px-2 py-0.5 border rounded-full ${getCategoryColor(law.category)}`}
                      >
                        {law.category}
                      </span>
                    </div>

                    <GlitchText text={law.name} />

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      {law.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Read more</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </div>

                  <div className="mt-8 h-px bg-gradient-to-r from-border/50 via-border/20 to-transparent" />
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
