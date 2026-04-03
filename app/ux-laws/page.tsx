"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { uxLaws } from "@/lib/ux-laws-data"
import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"

const GLITCH_CHARS = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`"

function GlitchText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const scramble = useCallback(() => {
    const chars = text.split("")
    const numToScramble = Math.floor(Math.random() * 4) + 2
    const indices = new Set<number>()
    while (indices.size < Math.min(numToScramble, chars.length)) {
      indices.add(Math.floor(Math.random() * chars.length))
    }

    let frame = 0
    const totalFrames = 4

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
    timeoutRef.current = setTimeout(scramble, Math.random() * 3000 + 500)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [scramble])

  return (
    <h2 className="text-lg font-bold text-foreground font-mono">
      {display}
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

// Space images from Unsplash
const cardImages = [
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&q=80",
  "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&q=80",
  "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&q=80",
  "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",
  "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80",
  "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&q=80",
  "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=600&q=80",
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
]

export default function UXLaws() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
                Reference Guide
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                UX <span className="text-primary">Laws</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Fundamental principles that guide user experience design.
                Understanding these laws helps create products that feel
                intuitive and work the way users expect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {uxLaws.map((law, index) => (
                <Link
                  key={law.id}
                  href={`/ux-laws/${law.slug}`}
                  className="group relative block rounded-xl bg-card border border-border/50 hover:border-primary/60 transition-all duration-300 overflow-hidden"
                >
                  {/* Image with gradient + noise */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cardImages[index]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Green + secondary gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(33, 186, 140, 0.55) 0%, rgba(102, 83, 223, 0.55) 100%)",
                      }}
                    />
                    {/* Noise texture */}
                    <div
                      className="absolute inset-0 opacity-40 mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        backgroundSize: "128px 128px",
                      }}
                    />
                    {/* Number overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                        {String(law.id).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border rounded-full backdrop-blur-sm bg-black/20 ${getCategoryColor(law.category)}`}
                      >
                        {law.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <GlitchText text={law.name} />
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {law.description}
                    </p>
                  </div>
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
