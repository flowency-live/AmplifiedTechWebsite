import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FlinkWorks - Fast, Practical Digital Capability for SMEs",
  description: "We act as your internal CTO and delivery team. Building the digital operating system your business should have had years ago. Clarity + Speed + Capability.",
  keywords: ["SME", "digital transformation", "automation", "AI", "business operating system", "CTO"],
  icons: {
    icon: '/flink-logo.png',
    apple: '/flink-logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
