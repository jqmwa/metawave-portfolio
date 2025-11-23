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
    icon: "/favicon.png",
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
