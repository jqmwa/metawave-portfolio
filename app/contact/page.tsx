"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-0 lg:ml-80">
        <TopNavbar />
        <div className="overflow-y-auto">
          <div className="max-w-4xl mx-auto py-16 px-6">
            {/* Header */}
            <div className="mb-16 text-center">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border border-primary/30 text-xs px-3 py-1 mb-6"
              >
                Get in Touch
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Let's Build Something{" "}
                <span className="text-primary">Together</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your vision to life? Schedule a call or reach out
                directly — I'd love to hear about your project.
              </p>
            </div>

            {/* Calendly Card */}
            <div className="relative group mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      Schedule a Call
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Pick a time that works for you
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8">
                  Book a free consultation to discuss your project, timeline,
                  and goals. Whether it's a full product build, design system, or
                  Web3 integration — let's talk it through.
                </p>

                <a
                  href="https://calendly.com/metawavestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-5 h-5" />
                  Book on Calendly
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Contact Options Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <a
                href="mailto:q@metawavestudio.com"
                className="group/card relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Email Directly
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For proposals, inquiries, or just to say hello.
                </p>
                <span className="text-sm text-primary flex items-center gap-1.5 group-hover/card:gap-2.5 transition-all">
                  q@metawavestudio.com
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="https://discord.gg/ZTRVCYwncs"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Join the Discord
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat in real-time and connect with the community.
                </p>
                <span className="text-sm text-primary flex items-center gap-1.5 group-hover/card:gap-2.5 transition-all">
                  discord.gg/ZTRVCYwncs
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* View Portfolio CTA */}
            <div className="text-center border-t border-border pt-16">
              <p className="text-muted-foreground mb-6">
                Want to see what we've built? Check out our latest work.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-3 border border-primary/30 text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary/10 transition-all duration-300 hover:border-primary/60 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
