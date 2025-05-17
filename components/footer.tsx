import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Home } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-10">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">HomeVista</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            Find your dream property with HomeVista, your trusted real estate partner for residential and commercial
            properties.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/agents" className="text-sm text-muted-foreground hover:text-primary">
                Agents
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Property Types</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Residential Properties
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Commercial Properties
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Luxury Homes
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                New Developments
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Vacation Rentals
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">123 Property Street, Real Estate City, 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">info@homevista.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HomeVista. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
