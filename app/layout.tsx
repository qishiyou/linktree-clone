import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QR Code Pro - Professional QR Code Generation Platform",
  description: "All-in-one QR code solution supporting multiple types of QR codes with management and analytics.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <MainNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'