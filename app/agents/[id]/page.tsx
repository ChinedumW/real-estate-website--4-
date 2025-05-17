import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Building,
  Phone,
  Mail,
  Award,
  MapPin,
  Calendar,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
} from "lucide-react"

interface AgentPageProps {
  params: {
    id: string
  }
}

// This would normally be fetched from an API
const getAgent = (id: string) => {
  // Mock agent data
  return {
    id,
    name: "Jennifer Smith",
    title: "Senior Real Estate Agent",
    phone: "(555) 123-4567",
    email: "jennifer@homevista.com",
    bio: "Jennifer has over 12 years of experience in residential real estate, specializing in luxury properties and first-time homebuyers. Her dedication to client satisfaction and extensive market knowledge have made her one of HomeVista's top-performing agents for five consecutive years.\n\nWith a background in interior design, Jennifer brings a unique perspective to the home buying and selling process, helping clients envision the full potential of each property. She is known for her attention to detail, negotiation skills, and ability to match clients with their perfect homes.",
    image: "/images/agent1.jpg",
    properties: 145,
    experience: "12 years",
    specialties: ["Luxury Homes", "Residential", "First-Time Buyers"],
    languages: ["English", "Spanish"],
    certifications: ["Certified Residential Specialist (CRS)", "Accredited Buyer's Representative (ABR)"],
    education: "Bachelor's Degree in Business Administration, University of California",
    areas: ["Beverly Hills", "Santa Monica", "Malibu", "West Hollywood"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    // Mock listings data
    listings: [
      {
        id: 1,
        title: "Modern Apartment with City View",
        price: "$340,000",
        type: "Apartment",
        location: "New York, NY",
        beds: 2,
        baths: 2,
        sqft: 1200,
        image: "/images/property1.jpg",
      },
      {
        id: 2,
        title: "Luxury Family Home with Pool",
        price: "$875,000",
        type: "House",
        location: "Los Angeles, CA",
        beds: 4,
        baths: 3,
        sqft: 2800,
        image: "/images/property2.jpg",
      },
      {
        id: 3,
        title: "Cozy Studio in Historic District",
        price: "$220,000",
        type: "Studio",
        location: "Boston, MA",
        beds: 1,
        baths: 1,
        sqft: 650,
        image: "/images/property3.jpg",
      },
    ],
    // Mock testimonials
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        text: "Jennifer was amazing throughout our entire home buying process. As first-time buyers, we had countless questions, and she was always patient and informative. She found us our dream home in a competitive market and negotiated a great price!",
        date: "March 2025",
      },
      {
        id: 2,
        name: "Michael Chen",
        text: "Working with Jennifer to sell our family home was a wonderful experience. Her market knowledge and staging suggestions helped us sell above asking price in just one week. I highly recommend her to anyone looking to buy or sell.",
        date: "January 2025",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        text: "Jennifer helped us find the perfect investment property. Her expertise in the local market was invaluable, and she was always available to answer our questions. We'll definitely work with her again for our next purchase.",
        date: "November 2024",
      },
    ],
  }
}

export function generateMetadata({ params }: AgentPageProps): Metadata {
  const agent = getAgent(params.id)
  return {
    title: `${agent.name} | Real Estate Agent | HomeVista`,
    description: `${agent.name} is a ${agent.title} with ${agent.experience} of experience in real estate. Contact ${agent.name} to find your perfect property.`,
  }
}

export default function AgentPage({ params }: AgentPageProps) {
  const agent = getAgent(params.id)

  return (
    <div className="container py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/agents" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Agents
          </Link>
        </Button>
      </div>

      {/* Agent Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
            <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" priority />
          </div>
          <div className="flex justify-center space-x-2 mb-6">
            <Button variant="outline" size="icon" asChild>
              <Link href={agent.social.facebook}>
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={agent.social.twitter}>
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={agent.social.linkedin}>
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-muted-foreground">{agent.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-muted-foreground">{agent.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm font-medium">Office</p>
                    <p className="text-muted-foreground">HomeVista Headquarters</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full" asChild>
                  <Link href={`/contact?agent=${agent.id}`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact {agent.name.split(" ")[0]}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{agent.title}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {agent.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Building className="h-5 w-5 text-primary mr-2" />
              <span>{agent.properties} Properties</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <span>{agent.experience} Experience</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span>{agent.certifications.length} Certifications</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>{agent.areas.length} Service Areas</span>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="listings">Listings</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Biography</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{agent.bio}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Specialties</h2>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Certifications</h2>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {agent.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Service Areas</h2>
                  <div className="flex flex-wrap gap-2">
                    {agent.areas.map((area, index) => (
                      <Badge key={index} variant="outline">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((language, index) => (
                      <Badge key={index} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Education</h2>
                  <p className="text-muted-foreground">{agent.education}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="listings" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Current Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agent.listings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
                        <span className="font-bold text-lg">{listing.price}</span>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <Link href={`/properties/${listing.id}`}>
                        <h3 className="text-lg font-semibold hover:text-primary transition-colors">{listing.title}</h3>
                      </Link>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 shrink-0 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span>{listing.beds} Beds</span>
                        <span>{listing.baths} Baths</span>
                        <span>{listing.sqft.toLocaleString()} sqft</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href={`/properties?agent=${agent.id}`}>View All Listings</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Client Testimonials</h2>
              <div className="space-y-6">
                {agent.testimonials.map((testimonial) => (
                  <Card key={testimonial.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                          <span className="font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
