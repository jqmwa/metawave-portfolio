"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          James Marsh — Product & UI/UX Designer specializing in immersive 3D, Web3, and interactive digital products.
        </h1>
        <p className="text-lg text-muted-foreground">
          Solving complex user experience challenges through intuitive product architecture, spatial computing, and interactive systems.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {projects.map((project, index) => {
          const isSoundCloudVR =
            project.title.toLowerCase().includes("soundcloud") ||
            project.description.toLowerCase().includes("better with music") ||
            project.description.toLowerCase().includes("virtual reaality") ||
            project.description.toLowerCase().includes("virtual reality");

          const title = isSoundCloudVR
            ? "SoundCloud Spatial"
            : project.title;

          const description = isSoundCloudVR
            ? "Redesigning the audio experience for standalone VR headsets. Solving spatial layout, hand-tracking accessibility, and multi-window navigation."
            : project.description;

          const caseStudyLink =
            project.link && project.link.trim() !== ""
              ? project.link
              : isSoundCloudVR
              ? "/case-studies/sc"
              : "/case-studies";

          return (
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
                    alt={title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-lg text-muted-foreground">{description}</p>

                  <div className="mt-5">
                    <a
                      href={caseStudyLink}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/30 uppercase tracking-wider font-mono cursor-pointer"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
