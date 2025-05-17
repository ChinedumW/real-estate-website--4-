import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | HomeVista",
  description: "Learn about HomeVista's mission, values, and team of real estate professionals",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">About HomeVista</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Your trusted partner in finding the perfect property since 2010
          </p>
          <p className="mb-6">
            HomeVista was founded with a simple mission: to make real estate accessible, transparent, and stress-free
            for everyone. We believe that finding your dream home should be an exciting journey, not a daunting task.
          </p>
          <p className="mb-6">
            With over a decade of experience in the real estate market, our team of dedicated professionals combines
            industry expertise with personalized service to guide you through every step of your property journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/agents">Meet Our Team</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src="/images/property2.jpg" alt="HomeVista Office" fill className="object-cover" priority />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At HomeVista, our core values guide everything we do, from how we treat our clients to how we conduct our
            business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
              <p className="text-muted-foreground">
                We put our clients' needs first, providing personalized service and guidance throughout the entire
                process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from property listings to client communications and
                negotiations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty, building trust with our clients through ethical practices and
                clear communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming a leading real estate agency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/images/property5.jpg" alt="HomeVista History" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">A Decade of Excellence</h3>
            <p className="mb-4">
              HomeVista was founded in 2010 by a group of passionate real estate professionals who saw an opportunity to
              transform the traditional real estate experience. Starting with just three agents and a small office,
              we've grown to become one of the most trusted names in real estate.
            </p>
            <p className="mb-4">
              Our journey has been defined by our commitment to innovation, client satisfaction, and community
              involvement. We've embraced technology to streamline the property search process while maintaining the
              personal touch that makes finding a home special.
            </p>
            <p>
              Today, HomeVista serves thousands of clients annually, with a portfolio of properties ranging from
              first-time buyer homes to luxury estates. Despite our growth, we remain committed to our founding
              principles: integrity, excellence, and putting clients first.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose HomeVista</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the HomeVista difference and see why thousands of clients trust us with their real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Local Knowledge</h3>
              <p className="text-muted-foreground">
                Our agents have in-depth knowledge of local markets, neighborhoods, schools, and amenities to help you
                make informed decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                We take the time to understand your unique needs and preferences to find properties that truly match
                your lifestyle and budget.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                Our platform combines advanced search tools, virtual tours, and real-time updates to make your property
                search efficient and enjoyable.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
              <p className="text-muted-foreground">
                We guide you through every step of the buying or selling process with clear communication and no hidden
                surprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
          Let our team of experienced agents help you navigate the real estate market and find the perfect property for
          your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/properties">Browse Properties</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
