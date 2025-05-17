"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, User, Home, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/components/auth-provider"
import { logout } from "@/app/actions/auth"

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useIsMobile()
  const { user, loading } = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Home className="h-6 w-6" />
            <span>HomeVista</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/properties" className="text-sm font-medium transition-colors hover:text-primary">
            Properties
          </Link>
          <Link href="/agents" className="text-sm font-medium transition-colors hover:text-primary">
            Agents
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {!loading && user ? (
                  <>
                    <DropdownMenuItem disabled>{user.name}</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <form action={logout}>
                        <button className="w-full text-left flex items-center">
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </button>
                      </form>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/signup">Register</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link href="/" className="text-lg font-medium transition-colors hover:text-primary" onClick={closeMenu}>
              Home
            </Link>
            <Link
              href="/properties"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Properties
            </Link>
            <Link
              href="/agents"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Agents
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              {!loading && user ? (
                <>
                  <div className="text-lg font-medium">Welcome, {user.name}</div>
                  <Link href="/dashboard" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/profile" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Profile
                    </Button>
                  </Link>
                  <form action={logout}>
                    <Button variant="outline" className="w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={closeMenu}>
                    <Button className="w-full">Register</Button>
                  </Link>
                </>
              )}
              <div className="flex justify-center mt-4">
                <ModeToggle />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
