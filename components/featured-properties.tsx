import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BedDouble, Bath, Maximize, MapPin, ArrowRight, Heart } from "lucide-react"

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    price: "$340,000",
    type: "apartment",
    badges: ["Featured", "New"],
    address: "123 Downtown St, New York, NY",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Luxury Family Home with Pool",
    price: "$875,000",
    type: "house",
    badges: ["Premium"],
    address: "456 Suburban Dr, Los Angeles, CA",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "/images/property2.jpg",
  },
  {
    id: 3,
    title: "Cozy Studio in Historic District",
    price: "$220,000",
    type: "studio",
    badges: ["Popular"],
    address: "789 Heritage Ave, Boston, MA",
    beds: 1,
    baths: 1,
    sqft: 650,
    image: "/images/property3.jpg",
  },
  {
    id: 4,
    title: "Waterfront Condo with Marina Access",
    price: "$495,000",
    type: "condo",
    badges: ["Waterfront"],
    address: "101 Harbor View, Miami, FL",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "/images/property4.jpg",
  },
  {
    id: 5,
    title: "Mountain View Cabin Retreat",
    price: "$385,000",
    type: "cabin",
    badges: ["Mountain View"],
    address: "222 Alpine Rd, Denver, CO",
    beds: 3,
    baths: 2,
    sqft: 1750,
    image: "/images/property5.jpg",
  },
  {
    id: 6,
    title: "Urban Loft in Arts District",
    price: "$420,000",
    type: "loft",
    badges: ["Open Floor Plan"],
    address: "333 Creative Blvd, Portland, OR",
    beds: 1,
    baths: 2,
    sqft: 1500,
    image: "/images/property6.jpg",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-muted-foreground">Explore our handpicked selection of premium properties</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/properties">
              View All Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden group h-full flex flex-col">
              <CardHeader className="p-0">
                <div className="relative">
                  <Link href={`/properties/${property.id}`}>
                    <div className="overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={800}
                        height={500}
                        className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {property.badges.map((badge, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                    >
                      <Heart className="h-5 w-5 text-primary" />
                      <span className="sr-only">Add to favorites</span>
                    </Button>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
                    <span className="font-bold text-lg">{property.price}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 flex-1">
                <Link href={`/properties/${property.id}`} className="group-hover:text-primary transition-colors">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-1">{property.title}</h3>
                </Link>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 shrink-0 mr-1" />
                  <span className="text-sm line-clamp-1">{property.address}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4 text-primary" />
                    <span>
                      {property.beds} {property.beds === 1 ? "Bed" : "Beds"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-primary" />
                    <span>
                      {property.baths} {property.baths === 1 ? "Bath" : "Baths"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4 text-primary" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
