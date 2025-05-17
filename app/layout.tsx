import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/hooks/use-toast"
import { AuthProvider } from "@/components/auth-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HomeVista | Find Your Dream Home",
  description: "Browse and find your perfect property with HomeVista",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ToastProvider>
              <div className="flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
