"use client"

import { Card } from "@/components/ui/card"
import { useRef } from "react"

const projects = [
  {
    id: 42,
    title: "Patchbox 02",
    description: "",
    image: "https://i.imgur.com/p9DQ9KY.png",
  },
  {
    id: 39,
    title: "Interactive Experience",
    description: "Dynamic interface with animated elements and interactions",
    image: "https://i.imgur.com/vSNqugG.gif",
  },
  {
    id: 40,
    title: "Modern Interface",
    description: "Contemporary design with clean aesthetics and functionality",
    image: "https://i.imgur.com/Tv9qJXt.png",
  },
  {
    id: 41,
    title: "Digital Design",
    description: "Innovative digital solution with cutting-edge visuals",
    image: "https://i.imgur.com/vZe4VVf.png",
  },
  {
    id: 38,
    title: "Featured Design",
    description: "Latest portfolio showcase with cutting-edge design elements",
    image: "https://i.imgur.com/nFyaBwx.png",
  },
  {
    id: 1,
    title: "Quantum Interface",
    description: "Futuristic quantum computing dashboard with holographic elements",
    image: "https://i.imgur.com/cYcmj9A.png",
  },
  {
    id: 6,
    title: "NFT Gallery",
    description: "Immersive 3D NFT gallery experience with Web3 integration",
    image: "https://i.imgur.com/0f1Lj0u.gif",
  },
  {
    id: 4,
    title: "Holographic UI",
    description: "Next-gen holographic user interface for spatial computing",
    image: "https://i.imgur.com/lkJiH08.png",
  },
  {
    id: 5,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency trading dashboard with advanced analytics",
    image: "https://i.imgur.com/2gloIMC.png",
  },
  {
    id: 2,
    title: "Neural Network Viz",
    description: "AI-powered neural network visualization with neon aesthetics",
    image: "https://i.imgur.com/LaK3xKq.png",
  },
  {
    id: 3,
    title: "Cyber Marketplace",
    description: "Immersive cyberpunk marketplace with dynamic neon signage",
    image: "https://i.imgur.com/eIZAV7A.gif",
  },
  {
    id: 7,
    title: "Metaverse Portal",
    description: "Gateway interface for metaverse navigation and exploration",
    image: "https://i.imgur.com/t0RQ1bF.jpeg",
  },
  {
    id: 8,
    title: "AI Assistant",
    description: "Conversational AI interface with personality and emotion",
    image: "https://i.imgur.com/luBVT7n.png",
  },
  {
    id: 9,
    title: "Digital Ecosystem",
    description: "Interconnected digital workspace with real-time collaboration",
    image: "https://i.imgur.com/1PmWMXN.png",
  },
  {
    id: 10,
    title: "Data Visualization",
    description: "Advanced data analytics platform with interactive visualizations",
    image: "https://i.imgur.com/EOLUSDx.png",
  },
  {
    id: 11,
    title: "Smart City Interface",
    description: "Urban planning and management dashboard for smart cities",
    image: "https://i.imgur.com/bJllb2F.png",
  },
  {
    id: 12,
    title: "Virtual Showroom",
    description: "Immersive product showcase with 3D interactive elements",
    image: "https://i.imgur.com/Q3a6KOh.png",
  },
  {
    id: 13,
    title: "Gaming Platform",
    description: "Next-generation gaming interface with social features",
    image: "https://i.imgur.com/2nBuwqu.jpeg",
  },
  {
    id: 14,
    title: "Music Visualizer",
    description: "Real-time audio visualization with stunning visual effects",
    image: "https://i.imgur.com/0nJeC1i.png",
  },
  {
    id: 15,
    title: "E-Commerce Hub",
    description: "Modern shopping experience with AR product previews",
    image: "https://i.imgur.com/llqXNTL.jpeg",
  },
  {
    id: 16,
    title: "Social Network",
    description: "Decentralized social platform with Web3 integration",
    image: "https://i.imgur.com/uo6hBAZ.png",
  },
  {
    id: 17,
    title: "Fitness Tracker",
    description: "Health and wellness dashboard with AI coaching",
    image: "https://i.imgur.com/DgVQe2a.png",
  },
  {
    id: 18,
    title: "Education Portal",
    description: "Interactive learning platform with gamification",
    image: "https://i.imgur.com/XfXQG9c.png",
  },
  {
    id: 19,
    title: "Finance Dashboard",
    description: "Personal finance management with investment insights",
    image: "https://i.imgur.com/AJUelZE.png",
  },
  {
    id: 20,
    title: "Travel Planner",
    description: "AI-powered travel recommendations and booking system",
    image: "https://i.imgur.com/MR84nX1.png",
  },
  {
    id: 21,
    title: "Creative Studio",
    description: "Digital art creation tools with AI assistance",
    image: "https://i.imgur.com/cSNkJ3d.png",
  },
  {
    id: 22,
    title: "Task Manager",
    description: "Productivity suite with team collaboration features",
    image: "https://i.imgur.com/1Hk6bp3.png",
  },
  {
    id: 23,
    title: "Weather Station",
    description: "Hyperlocal weather forecasting with climate data",
    image: "https://i.imgur.com/HoDXr33.png",
  },
  {
    id: 24,
    title: "Recipe Hub",
    description: "Culinary platform with meal planning and nutrition tracking",
    image: "https://i.imgur.com/PgSaCMg.png",
  },
  {
    id: 25,
    title: "IoT Controller",
    description: "Smart home automation and device management system",
    image: "https://i.imgur.com/jBFVozw.png",
  },
  {
    id: 26,
    title: "Event Platform",
    description: "Virtual and hybrid event management with live streaming",
    image: "https://i.imgur.com/jR0XvoU.png",
  },
  {
    id: 27,
    title: "Portfolio Showcase",
    description: "Creative portfolio builder with interactive galleries",
    image: "https://i.imgur.com/AG4vj9U.png",
  },
  {
    id: 28,
    title: "Analytics Engine",
    description: "Business intelligence platform with predictive analytics",
    image: "https://i.imgur.com/ggxwHS9.png",
  },
  {
    id: 29,
    title: "Video Streaming",
    description: "Content delivery platform with adaptive streaming",
    image: "https://i.imgur.com/FzBrT7X.png",
  },
  {
    id: 30,
    title: "Messaging App",
    description: "Encrypted messaging with voice and video calls",
    image: "https://i.imgur.com/nxQVUGb.png",
  },
  {
    id: 31,
    title: "News Aggregator",
    description: "Personalized news feed with AI content curation",
    image: "https://i.imgur.com/fSmwV7p.png",
  },
  {
    id: 32,
    title: "Booking System",
    description: "Appointment scheduling with calendar integration",
    image: "https://i.imgur.com/ipJ2CK4.png",
  },
  {
    id: 33,
    title: "AR Experience",
    description: "Augmented reality showcase with spatial computing",
    image: "https://i.imgur.com/eUfM4fs.png",
  },
  {
    id: 34,
    title: "Security Dashboard",
    description: "Cybersecurity monitoring with threat detection",
    image: "https://i.imgur.com/cVd1IUk.png",
  },
  {
    id: 35,
    title: "Marketplace Pro",
    description: "P2P marketplace with escrow and ratings system",
    image: "https://i.imgur.com/90ueAK4.png",
  },
  {
    id: 36,
    title: "Cloud Storage",
    description: "Decentralized file storage with encryption",
    image: "https://i.imgur.com/gxp9xik.jpeg",
  },
  {
    id: 37,
    title: "Design System",
    description: "Component library with design tokens and documentation",
    image: "https://i.imgur.com/r4QQWrd.png",
  },
]

export function PortfolioTimeline() {
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
