import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amplified Tech - Fast, Practical Digital Capability for SMEs",
  description: "We build the digital capability you don't have - fast. From websites to internal tools, automation and dashboards - built around the way your business already works.",
  keywords: ["SME", "digital transformation", "automation", "AI", "business tools", "dashboards"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
