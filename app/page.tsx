import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { PortfolioTimeline } from "@/components/portfolio-timeline"
import { CompanySection } from "@/components/company-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { getAllProjects } from "@/lib/projects"

export const dynamic = 'force-dynamic';

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <PortfolioTimeline projects={projects} />
          <CompanySection />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </div>
  )
}
