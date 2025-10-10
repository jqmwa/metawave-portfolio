"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

interface Particle {
  id: number
  x: string
  y: string
  left: string
  top: string
  duration: number
}

export function Sidebar() {
  const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "WebGL", "Solidity"]
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0
      hoverSoundRef.current.play().catch(() => {})
    }
  }

  useEffect(() => {
    // Generate particles on mount
    const newParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: `${Math.random() * 200 - 100}px`,
        y: `${Math.random() * 200 - 100}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 1 + Math.random() * 2,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-sidebar border-r border-sidebar-border p-8 flex-col justify-between overflow-hidden">
      <audio ref={hoverSoundRef} src="/hover-sound.mp3" preload="auto" />

      <div className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4 ring-2 ring-primary">
          <AvatarImage src="https://i.imgur.com/wQVOeSB.png" alt="Designer" />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">MW</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-foreground mb-1">Metawave Studio</h1>
        <p className="text-sm text-muted-foreground mb-2">Digital Design Agency</p>
        <Badge 
          variant="secondary"
          className="bg-primary/10 text-primary border border-primary/30 text-xs px-2 py-0.5"
        >
          jamesdesign.eth
        </Badge>
      </div>

      <button
        onMouseEnter={playHoverSound}
        className="magnetic-btn relative w-full aspect-square bg-[#62BE8F] rounded-[32px] overflow-visible group transition-all duration-300 hover:scale-[0.98] hover:shadow-lg hover:shadow-[#62BE8F]/20 p-6 hover:p-8"
      >
        {/* Particles Field Effect */}
        <div className="particles-field">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                '--x': particle.x,
                '--y': particle.y,
                left: particle.left,
                top: particle.top,
                animation: `particleFloat ${particle.duration}s infinite`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="absolute bottom-6 left-6 text-xs text-[#1a1a1a] font-medium transition-all duration-300 group-hover:bottom-8 group-hover:left-8 z-10">
          get started
        </div>
        <div className="absolute bottom-6 right-6 transition-all duration-300 group-hover:bottom-8 group-hover:right-8 z-10">
          <ArrowRight className="w-4 h-4 text-[#1a1a1a] transition-transform group-hover:translate-x-0.5" />
        </div>
      </button>

      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  )
}
