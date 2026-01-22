"use client"

import { Card } from "@/components/ui/card"
import { useRef } from "react"

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  sort_order?: number;
};

type PortfolioTimelineProps = {
  projects: Project[];
};

export function PortfolioTimeline({ projects }: PortfolioTimelineProps) {
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null)

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0
      hoverSoundRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <audio ref={hoverSoundRef} src="/hover-sound.mp3" preload="auto" />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Metawave Studio is a creative hub for design and branding.
        </h1>
        <p className="text-lg text-muted-foreground">
          We design innovative identities for creative onchain projects.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="relative overflow-hidden bg-card border-border"
            onMouseEnter={playHoverSound}
          >
            {/* Timeline connector */}
            {index !== projects.length - 1 && (
              <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-secondary to-transparent z-10" />
            )}

            {/* Card content */}
            <div className="p-[18px]">
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
