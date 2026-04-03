import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AutocratCaseStudy() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8">
              Autocrat
            </h1>

            {/* Quote - Left side style */}
            <div className="mb-12 border-l-4 border-primary pl-4 sm:pl-6 py-2">
              <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
                &ldquo;Autocrat runs the first DAO experiments where AI Agent CEOs fully operate or co-manage DAOs. Our 100,000+ userbase generates new data for future investment case studies with clear, predictable ROI.&rdquo;
              </p>
            </div>

            {/* Client Overview */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Client Overview
            </h2>

            <div className="space-y-4 mb-8">
              <div className="w-full p-4 sm:p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-base sm:text-lg font-semibold">Agent-led DAOs with AI-managed trading and governance</p>
              </div>
              <div className="w-full p-4 sm:p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-base sm:text-lg font-semibold">5+ platforms, 10+ campaigns across digital and IRL</p>
              </div>
              <div className="w-full p-4 sm:p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-base sm:text-lg font-semibold">$100k+ revenue generated through DAO voting mechanics and AI agent supervision</p>
              </div>
            </div>

            {/* Table */}
            <div className="mb-8 space-y-3 sm:space-y-0">
              <div className="sm:hidden space-y-3">
                <div className="border border-primary/20 rounded-lg overflow-hidden">
                  <div className="p-4 font-semibold text-foreground bg-card/50">Strategy</div>
                  <div className="p-4 text-muted-foreground">Art Direction, Brand Strategy, Research</div>
                </div>
                <div className="border border-primary/20 rounded-lg overflow-hidden">
                  <div className="p-4 font-semibold text-foreground bg-card/50">Visual Identity</div>
                  <div className="p-4 text-muted-foreground">Illustration, Conceptual UI, Procedural Motion, Sub-branding</div>
                </div>
              </div>
              <div className="hidden sm:block border border-primary/20 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-primary/20">
                      <td className="p-6 text-lg font-semibold text-foreground w-1/3 bg-card/50">Strategy</td>
                      <td className="p-6 text-lg text-muted-foreground">Art Direction, Brand Strategy, Research</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-lg font-semibold text-foreground w-1/3 bg-card/50">Visual Identity</td>
                      <td className="p-6 text-lg text-muted-foreground">Illustration, Conceptual UI, Procedural Motion, Sub-branding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Systematic Languages */}
            <h2 className="text-3xl font-bold text-foreground mb-6">Systematic Languages</h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Autocrat brings structure and organization to onchain finance. We echoed that into the brand, building a visual language that scales from simple grid-like rules. Social-first components that make DAOs fun and less complex.
            </p>

            <div className="mb-8">
              <img
                src="https://i.imgur.com/Td382hF.png"
                alt="Autocrat Systematic Languages"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              We worked with their team on the 2.0 brand, bringing AI-native concepts into the system. The goal was modern and fresh, but resonant with finance teams. After multiple rounds of iteration, we landed on a system inspired by the Excel grid — an instantly recognizable finance motif.
            </p>

            <div className="mb-8">
              <img
                src="https://i.imgur.com/dXu4Amc.png"
                alt="Autocrat Brand System"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Separator className="my-8" />

            {/* More Work */}
            <h3 className="text-3xl font-bold text-foreground mb-6">More Work</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/case-studies/sa" className="block">
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://i.imgur.com/C0CkwDh.png"
                      alt="SocialAudits.ai Case Study"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">SocialAudits.ai</h3>
                    <p className="text-muted-foreground text-sm">
                      Blockchain forensics and wallet auditing dashboard.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </Link>

              <Link href="/case-studies/mwa" className="block">
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://i.imgur.com/YrtkD2a.png"
                      alt="Mental Wealth Academy Case Study"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">Mental Wealth Academy</h3>
                    <p className="text-muted-foreground text-sm">
                      Virtual learning environment and LMS for Web3.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
