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
          <div className="max-w-7xl mx-auto py-12 px-6">
            {/* Title */}
            <h1 className="text-5xl font-bold text-foreground mb-8">
              How Autocrat Unlocked Millions in DAO Decision-Making Models For Communities
            </h1>

            {/* Quote - Left side style */}
            <div className="mb-12 border-l-4 border-primary pl-6 py-2">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                &ldquo;Autocrat&apos;s rigorous testing gave us the confidence we needed to turn from speculative spend into a proven growth tactic. By running the first DAO-experiment where DAOs are completely or co-opt&apos;d by AI Agent CEOs, this demonstrates innovative methodology to reveal which factors matter in an Onchain, Decision-Making environment with trust, pressure, and risk. Our 100,000+ userbase brings incremental new data to case studies for future investments with clear, predictable ROI.&rdquo;
              </p>
            </div>

            {/* Client Overview */}
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Client Overview: Autocrat
            </h1>

            <div className="space-y-4 mb-8">
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Innovative Agent-led DAOs (Decentralized Autonomous Organizations)</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Trading Channels: 5+ platforms, 10+ campaigns, including digital and IRL</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">The Bold Move: $100,000+ in revenue generated on the platform without traditional human trading, just human supervision of DAOs and integrated voting mechanics</p>
              </div>
            </div>

            {/* Table */}
            <div className="mb-8 border border-primary/20 rounded-lg overflow-hidden">
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

            <Separator className="my-8" />

            {/* Systematic Languages */}
            <h2 className="text-3xl font-bold text-foreground mb-6">Systematic Languages</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A core part of Autocrat&apos;s product has been the structure and organization it brings into finance. We wanted to echo that into the brand and built a language that could scale out of simple grid-like rules. Social-first components that make DAOs fun and less-complex.
            </p>

            <div className="mb-8">
              <img
                src="https://i.imgur.com/Td382hF.png"
                alt="Autocrat Systematic Languages"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We worked closely with their team to help navigate their 2.0 brand, bringing forward AI-native concepts into the brand system. We were tasked to build a system that felt modern + fresh, but also resonate deeply with sophisticated finance teams. After a deep collaboration with multiple rounds of iterations, we built a system inspired by the complexity and structure of the Excel grid - an instantly recognizable finance motif.
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
                      AI-powered social media auditing with dashboard design and analytics interface.
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
                      Mental health accountability w/ community and goal tracking.
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
