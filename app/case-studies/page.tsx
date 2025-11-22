import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function CaseStudies() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-12 px-6">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Case <span className="text-primary">Studies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our detailed case studies showcasing our design process and solutions
              </p>
            </div>

            <div className="space-y-6">
              {/* Large rectangle at top */}
              <a 
                href="https://mentalwealth.framer.website/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://framerusercontent.com/images/gRHSOiB8qJnFPbUxdFo2rMPoO0.png"
                      alt="The MWA Case Study - Mental Wealth Academy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-2xl font-bold mb-2">Mental Wealth Academy</h3>
                    <p className="text-muted-foreground">
                      A hackathon project for Buildspace focusing on mental wellness accountability through community and goal tracking.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>

              {/* Two smaller rectangles underneath */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10">
                      <div className="text-center p-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h2>
                        <p className="text-sm text-muted-foreground">More case studies coming soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">Future Project</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay tuned for more detailed case studies.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>

                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="text-center p-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h2>
                        <p className="text-sm text-muted-foreground">More case studies coming soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-xl font-bold mb-2">Future Project</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay tuned for more detailed case studies.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

