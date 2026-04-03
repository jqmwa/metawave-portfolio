import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function Articles() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-primary">Articles</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Thoughts on design, strategy, and building profitable creative businesses
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://medium.com/design-bootcamp/express-design-choices-to-win-over-clients-create-highly-profitable-businesses-7ea561806c4e"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src="https://miro.medium.com/1*9uV6zfXlonJv6iEICYStbA.png"
                      alt="Express Design Choices To Win Over Clients, & Create Highly Profitable Businesses"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">Article</span>
                      <span className="text-xs text-muted-foreground">January 12, 2024</span>
                      <span className="text-xs text-muted-foreground">Design Bootcamp</span>
                    </div>
                    <p className="text-muted-foreground">
                      How UX designers can succeed by learning to articulate design decisions — a skill essential for winning clients and building profitable careers.
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
