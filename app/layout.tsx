import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Metawave Studio - Digital Design Agency",
  description: "Cyberpunk portfolio showcasing cutting-edge digital designs",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Metawave Studio - Digital Design Agency",
    description: "Cyberpunk portfolio showcasing cutting-edge digital designs",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Metawave Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metawave Studio - Digital Design Agency",
    description: "Cyberpunk portfolio showcasing cutting-edge digital designs",
    images: ["/favicon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${rethinkSans.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
