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
                Featured <span className="text-primary">Work</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore detailed case studies showcasing our design process and solutions
              </p>
            </div>

            <div className="space-y-6">
              {/* All case studies are now full width and same size */}
              <a 
                href="/case-studies/sa" 
                className="block"
              >
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
                    <h3 className="text-2xl font-bold mb-2">SocialAudits.ai</h3>
                    <p className="text-muted-foreground">
                      AI-powered social media auditing with dashboard design and analytics interface.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>

              <a 
                href="/case-studies/mwa" 
                className="block"
              >
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://i.imgur.com/YrtkD2a.png"
                      alt="The MWA Case Study - Mental Wealth Academy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Case Study</div>
                    <h3 className="text-2xl font-bold mb-2">Mental Wealth Academy</h3>
                    <p className="text-muted-foreground">
                    Mental health accountability w/ community and goal tracking.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>

              <a 
                href="/case-studies/sc" 
                className="block"
              >
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
                    <h3 className="text-2xl font-bold mb-2">Abnormal Fashion Design for SC</h3>
                    <p className="text-muted-foreground">
                      A blend of accessibility and luxe dystopia.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>

              <a 
                href="/case-studies/digicat" 
                className="block"
              >
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
                    <h3 className="text-2xl font-bold mb-2">Digicat</h3>
                    <p className="text-muted-foreground">
                      Brand identity, visual direction, and mobile design.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

