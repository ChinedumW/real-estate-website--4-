import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Building, Search, Facebook, Twitter, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Agents | HomeVista",
  description: "Meet HomeVista's team of experienced real estate professionals",
}

// Mock data for agents
const agents = [
  {
    id: 1,
    name: "Jennifer Smith",
    title: "Senior Real Estate Agent",
    phone: "(555) 123-4567",
    email: "jennifer@homevista.com",
    bio: "Jennifer has over 12 years of experience in residential real estate, specializing in luxury properties and first-time homebuyers.",
    image: "/images/agent1.jpg",
    properties: 145,
    experience: "12 years",
    specialties: ["Luxury Homes", "Residential", "First-Time Buyers"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Michael Johnson",
    title: "Commercial Property Specialist",
    phone: "(555) 234-5678",
    email: "michael@homevista.com",
    bio: "Michael focuses on commercial real estate, helping businesses find the perfect locations for their operations.",
    image: "/images/agent2.jpg",
    properties: 98,
    experience: "8 years",
    specialties: ["Commercial", "Office Space", "Retail Properties"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Rodriguez",
    title: "Luxury Home Specialist",
    phone: "(555) 345-6789",
    email: "sarah@homevista.com",
    bio: "Sarah specializes in high-end properties, providing white-glove service to discerning clients seeking exceptional homes.",
    image: "/images/agent3.jpg",
    properties: 112,
    experience: "10 years",
    specialties: ["Luxury Estates", "Waterfront Properties", "Investment Properties"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "David Chen",
    title: "Residential Sales Agent",
    phone: "(555) 456-7890",
    email: "david@homevista.com",
    bio: "David helps families find their perfect homes in the most desirable neighborhoods, with a focus on school districts and community amenities.",
    image: "/images/agent1.jpg",
    properties: 87,
    experience: "6 years",
    specialties: ["Family Homes", "Suburban Properties", "New Constructions"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Emily Wilson",
    title: "Rental Property Manager",
    phone: "(555) 567-8901",
    email: "emily@homevista.com",
    bio: "Emily manages our rental property portfolio, helping landlords and tenants find their perfect match.",
    image: "/images/agent2.jpg",
    properties: 203,
    experience: "7 years",
    specialties: ["Rental Properties", "Property Management", "Urban Apartments"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Robert Taylor",
    title: "Investment Property Advisor",
    phone: "(555) 678-9012",
    email: "robert@homevista.com",
    bio: "Robert specializes in investment properties, helping clients build wealth through strategic real estate acquisitions.",
    image: "/images/agent3.jpg",
    properties: 132,
    experience: "15 years",
    specialties: ["Investment Properties", "Multi-Family Units", "Commercial Investments"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function AgentsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Real Estate Agents</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet our team of experienced professionals dedicated to helping you find your perfect property
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12">
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search agents by name or specialty" className="pl-10" />
              </div>
            </div>
            <Button>Find Agent</Button>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <Card key={agent.id} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
            </div>
            <CardContent className="pt-6">
              <Link href={`/agents/${agent.id}`}>
                <h2 className="text-xl font-semibold hover:text-primary transition-colors">{agent.name}</h2>
              </Link>
              <p className="text-muted-foreground mb-4">{agent.title}</p>

              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Building className="h-4 w-4 mr-2 text-primary" />
                <span>
                  {agent.properties} Properties | {agent.experience} Experience
                </span>
              </div>

              <p className="line-clamp-3 text-sm mb-4">{agent.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.specialties.map((specialty, index) => (
                  <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <div className="flex space-x-2">
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
              <Button variant="outline" asChild>
                <Link href={`/agents/${agent.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Join Our Team CTA */}
      <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
          Are you a passionate real estate professional looking to grow your career? We're always looking for talented
          individuals to join the HomeVista family.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/careers">View Career Opportunities</Link>
        </Button>
      </div>
    </div>
  )
}
