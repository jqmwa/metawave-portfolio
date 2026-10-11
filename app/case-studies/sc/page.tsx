import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, Users, Compass, Eye, Sliders } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "SoundCloud Spatial — Apple Vision Pro UX Case Study | Metawave Studio",
  description:
    "UX Case study by James Q. Marsh redesigning SoundCloud for spatial computing on Apple Vision Pro with eye-and-hand gestural interfaces.",
}

export default function SCCaseStudy() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-5xl mx-auto py-8 sm:py-16 px-4 sm:px-8">
            {/* Header Badge & Title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Spatial Computing // visionOS Case Study
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Apple Vision Pro: SoundCloud Re-Design
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                Reimagining the future of music streaming in a 3D spatial canvas. Solving spatial window layout,
                eye-and-pinch gestural navigation, and creator monetization for Apple Vision Pro.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-border py-4">
                <div>
                  <span className="text-white font-medium">Author:</span> James Q. Marsh
                </div>
                <span className="text-border">•</span>
                <div>
                  <span className="text-white font-medium">Format:</span> visionOS / Spatial UX
                </div>
                <span className="text-border">•</span>
                <div>
                  <span className="text-white font-medium">Read Time:</span> 6 min
                </div>
                <div className="ml-auto">
                  <a
                    href="https://godsfavoriteq.medium.com/apple-vision-pro-soundcloud-re-design-ux-case-study-78cf387efb14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-mono text-xs font-semibold cursor-pointer underline underline-offset-4"
                  >
                    <span>Read on Medium</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="mb-14 overflow-hidden rounded-2xl border border-primary/30 bg-card/60 shadow-[0_0_40px_rgba(33,186,140,0.15)] backdrop-blur-sm">
              <img
                src="https://miro.medium.com/v2/resize:fit:2506/1*q62AKZvTPatH59fGM85Jzw.png"
                alt="SoundCloud Apple Vision Pro Spatial Interface"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Figure 1.0 — SoundCloud Spatial Environment on visionOS</span>
                <span className="text-primary font-semibold">4K Spatial Glass Window</span>
              </div>
            </div>

            {/* Background & Context */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>01 // Background & Cultural Shift</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Rise, Fall, and Future of the Orange Cloud
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Between 2014 and 2017, SoundCloud was at its absolute cultural pinnacle. The orange cloud was the
                unquestioned global heartbeat of underground music—catalyzing the meteoric rise of artists like Lil
                Uzi Vert, XXXTentacion, Trippie Redd, and hundreds of visionary producers who sculpted modern sound.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                As mainstream streaming titans like Spotify and Apple Music matured, curating playlists became
                effortless. SoundCloud struggled to evolve its value proposition, eventually even altering its iconic
                vibrant orange cloud to a muted monochrome icon—a symbolic change that sparked frustration across its
                community.
              </p>

              {/* Icon change comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="p-6 rounded-xl border border-border bg-card/40 flex flex-col items-center justify-center text-center">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:698/1*YX4GopuW-Rdpy6sW2Ygngw.png"
                    alt="Classic Orange Cloud Era"
                    className="h-28 object-contain mb-4"
                  />
                  <h4 className="text-white font-semibold text-sm">The Golden Era (2014–2017)</h4>
                  <p className="text-xs text-muted-foreground mt-1">Underground discovery, community rawness, cultural catalyst</p>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card/40 flex flex-col items-center justify-center text-center">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:166/1*4DUv-XTrOYf8RHmljPcfBA.png"
                    alt="SoundCloud Monochromatic Shift"
                    className="h-28 object-contain mb-4"
                  />
                  <h4 className="text-white font-semibold text-sm">The Identity Shift</h4>
                  <p className="text-xs text-muted-foreground mt-1">Loss of brand warmth and community differentiation</p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
                <h4 className="text-primary font-bold text-base mb-1 font-mono uppercase">The Design Question</h4>
                <p className="text-foreground text-sm sm:text-base leading-relaxed">
                  How can SoundCloud leapfrog traditional 2D flat apps and define the definitive audio hub for spatial
                  computing on Apple Vision Pro?
                </p>
              </div>
            </section>

            <Separator className="my-10" />

            {/* User Research */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>02 // User Research & Synthesis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                50+ Diverse Creator & Listener Surveys
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I surveyed and interviewed over 50 individuals across diverse demographics, production backgrounds, and
                musical genres through Reddit, Twitter/X, and SoundCloud community comment threads. Responses and
                sentiment patterns were systematically synthesized in Obsidian.
              </p>

              <div className="overflow-hidden rounded-xl border border-border bg-card/50 my-6">
                <img
                  src="https://miro.medium.com/v2/resize:fit:700/1*b7mnHB73HHMDjmt2KbCAQA.png"
                  alt="Obsidian Research Documentation"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                  Figure 2.0 — Systematic research questionnaire data recorded in Obsidian.md
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl border border-border bg-card/40">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 font-mono font-bold flex items-center justify-center mb-3">
                    01
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-base">Community Isolation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direct fan connection features had degraded. Listeners and producers needed external chat tools
                    just to communicate with collaborators.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card/40">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold flex items-center justify-center mb-3">
                    02
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-base">Weak Creator Royalties</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Underground creators receive negligible payout from traditional algorithmic streams, eroding
                    incentive to publish unreleased gems.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card/40">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 font-mono font-bold flex items-center justify-center mb-3">
                    03
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-base">Low Subscription Value</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    SoundCloud+ lacked compelling perks. Users wanted tangible benefits: high-fidelity spatial audio,
                    exclusive stems, and direct artist chat access.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Interaction Wireframing & Procreate */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Eye className="w-4 h-4" />
                <span>03 // Spatial Interaction & Wireframing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Designing for Gaze & Pinch Gestures
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Unlike the Meta Quest 2 which relies on handheld 6DoF controllers and raycast pointers, Apple Vision Pro
                operates entirely on gaze tracking and micro-finger pinches. This eliminates the need for bulky buttons,
                introducing floating translucent glass ornaments that react to eye fixation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="overflow-hidden rounded-xl border border-border bg-card/50">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:700/1*LwJ0onp0hUHLt9Zq812i_Q.png"
                    alt="Procreate Wireframe Concept 1"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                    Figure 3.1 — Early spatial layout doodle in Procreate
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-border bg-card/50">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:700/1*sPgUkLfGhnUKNSJvy39lqQ.png"
                    alt="Procreate Interaction Doodles"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                    Figure 3.2 — Spatial audio routing and floating widgets
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* User Personas */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>04 // 4 Core User Personas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Tailored Spaces for Every Role in Music
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-primary/20 bg-card/60">
                  <h4 className="text-primary font-bold text-base mb-1 font-mono">Music Producers</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Needs stem isolation tools, high-resolution audio mastering gauges, and real-time listener engagement metrics across the spatial canvas.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-secondary/20 bg-card/60">
                  <h4 className="text-secondary font-bold text-base mb-1 font-mono">Songwriters</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prioritizes lyric sheets, collaborator discovery channels, and local event revenue dashboards to monetize sync licensing.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-accent/20 bg-card/60">
                  <h4 className="text-accent font-bold text-base mb-1 font-mono">Singers & Vocalists</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Requires direct interactive chatrooms with supporters, beat-leasing portals, and instant fan tipping via digital tokens.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card/60">
                  <h4 className="text-white font-bold text-base mb-1 font-mono">Casual Listeners</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Craves immersive visualizers, spatial concert mode, dual-algorithm playlist generation, and one-touch bluetooth audio handoff.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Information Architecture & FigJam */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>05 // Spatial Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Transforming the App from 2D Screen to Spatial Hub
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                In visionOS, windows do not just scroll; they anchor within the physical room. Using FigJam, I mapped
                the spatial flow so users can position their active queue, visualizer, and artist discussion rooms
                floating anywhere around their perimeter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                <div className="overflow-hidden rounded-xl border border-border bg-card/50">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:700/1*VwAzx5y59_e0bxL1lLkc5g.png"
                    alt="FigJam Information Architecture Map"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                    Figure 4.1 — Information architecture mapped in FigJam
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-border bg-card/50">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:700/1*-ab0KJXAQdN3Bgu3KsS2hw.png"
                    alt="Spatial Multi-Window Ecosystem"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                    Figure 4.2 — 3D spatial window hub progression
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* The Final Design Solutions */}
            <section className="mb-14 space-y-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>06 // The Final Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The New visionOS SoundCloud Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                The finalized design leverages Apple’s glass materials, dynamic specular lighting, and prominent
                SoundCloud orange glowing focus halos.
              </p>

              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card/50 my-6 shadow-xl">
                <img
                  src="https://miro.medium.com/v2/resize:fit:700/1*ZosKZ1W5wSFmNaBXOV-k-g.png"
                  alt="SoundCloud Navigation and Feature Views"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-muted/40 border-t border-border text-xs font-mono text-muted-foreground">
                  Figure 5.0 — Spatial Navigation Bar, Bluetooth Audio Switcher, and Tailored Creator Views
                </div>
              </div>

              {/* Solution Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Spatial Audio Handoff</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Top CTA allows listeners to seamlessly route sound from their Vision Pro headset to studio monitors or home audio setups with a single gesture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Direct Artist Micro-Communities</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Verified artist chatrooms where 100% of room tips and subscription splits flow directly to the creator.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Tokenized Lifetime Membership</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      A blockchain-backed one-time membership option ($20) granting lifetime ad-free streaming and stem downloads, drastically improving conversion over recurring churn.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* All Deliverables */}
            <section className="mb-14">
              <h3 className="text-2xl font-bold text-foreground mb-6">Deliverables & Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Spatial UI / UX Architecture",
                  "visionOS Design System",
                  "Obsidian Qualitative Research",
                  "Procreate Interaction Wireframes",
                  "FigJam User Flow Mapping",
                  "High-Fidelity Figma Mockups",
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-border bg-card/40 font-mono text-xs text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-10" />

            {/* More Work */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">More Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/case-studies/mwa" className="block">
                  <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src="https://i.imgur.com/blWW0jZ.png"
                        alt="Mental Wealth Academy Case Study"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                      <h3 className="text-xl font-bold mb-2">Mental Wealth Academy</h3>
                      <p className="text-muted-foreground text-sm">
                        Virtual learning environment and tokenized LMS on Base.
                      </p>
                    </div>
                  </Card>
                </Link>

                <Link href="/case-studies/autocrat" className="block">
                  <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src="https://i.imgur.com/Td382hF.png"
                        alt="Autocrat"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                      <h3 className="text-xl font-bold mb-2">Autocrat</h3>
                      <p className="text-muted-foreground text-sm">
                        AI agent squad builder for DAO trading and governance.
                      </p>
                    </div>
                  </Card>
                </Link>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
