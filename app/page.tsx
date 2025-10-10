import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { PortfolioTimeline } from "@/components/portfolio-timeline"
import { CompanySection } from "@/components/company-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <PortfolioTimeline />
          <CompanySection />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </div>
  )
}
