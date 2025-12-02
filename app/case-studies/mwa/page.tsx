import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function MWACaseStudy() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-12 px-6">
            {/* H1 */}
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Mental Wealth Academy
            </h1>

            {/* Image */}
            <div className="mb-8">
              <img
                src="https://i.imgur.com/blWW0jZ.png"
                alt="Mental Wealth Academy"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Separator className="my-8" />

            {/* What we Did */}
            <h3 className="text-3xl font-bold text-foreground mb-6">What we Did</h3>
            
            <div className="space-y-4 mb-8">
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Pitch Deck</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Brand Identity</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Visualization</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Mobile Design</p>
              </div>
              <div className="w-full p-6 border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="text-lg font-semibold">Design System</p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Images */}
            <div className="space-y-6 mb-8">
              <img
                src="https://i.imgur.com/9I1iP8H.jpeg"
                alt="MWA Case Study Image 2"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/u0YYuIh.png"
                alt="MWA Case Study Image 6"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/Ph0hSvt.jpeg"
                alt="MWA Case Study Image 8"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/dM9e1va.png"
                alt="MWA Case Study Image 9"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/Hg9QasA.png"
                alt="MWA Case Study Image 10"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/rfB5sq1.png"
                alt="MWA Case Study Image 11"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/GfAqjIk.png"
                alt="MWA Case Study Image 4"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/Fu2iduQ.jpeg"
                alt="MWA Case Study Image 5"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/Jjcou09.png"
                alt="MWA Case Study Image 12"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/TCjAf8U.png"
                alt="MWA Case Study Image 13"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/IH9hn7a.jpeg"
                alt="MWA Case Study Image 14"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://i.imgur.com/RAkQwM6.png"
                alt="MWA Case Study Image 15"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Separator className="my-8" />

            {/* All Deliverables */}
            <h3 className="text-3xl font-bold text-foreground mb-6">All Deliverables</h3>
            
            <div className="space-y-3 mb-8">
              <p className="text-lg text-foreground">Website Design</p>
              <p className="text-lg text-foreground">User Experience Design</p>
              <p className="text-lg text-foreground">Community Platform</p>
              <p className="text-lg text-foreground">Goal Tracking System</p>
            </div>

            <Separator className="my-8" />

            {/* More Work */}
            <h3 className="text-3xl font-bold text-foreground mb-6">More Work</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/case-studies/sc" className="block">
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://i.imgur.com/w3OJfrf.png"
                      alt="Abnormal Fashion Design for SC"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">Abnormal Fashion Design for SC</h3>
                    <p className="text-muted-foreground text-sm">
                      A blend of accessibility and luxe dystopia.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </Link>

              <Link href="/case-studies/digicat" className="block">
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://i.imgur.com/B0RpDP9.png"
                      alt="Digicat"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">Digicat</h3>
                    <p className="text-muted-foreground text-sm">
                      Brand identity, visual direction, and mobile design.
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

