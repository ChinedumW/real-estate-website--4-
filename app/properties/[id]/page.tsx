import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Home,
  Car,
  CheckCircle,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react"
import PropertyGallery from "@/components/property-gallery"
import PropertyAgentCard from "@/components/property-agent-card"
import PropertyMap from "@/components/property-map"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: PropertyPageProps) {
  // We would normally fetch this data from an API
  return {
    title: `Modern Family Home | Property #${params.id} | HomeVista`,
    description: "Beautiful modern family home with excellent amenities in a great location.",
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const propertyId = params.id

  // This would normally be fetched from an API
  const property = {
    id: propertyId,
    title: "Modern Family Home with Garden",
    description:
      "This beautiful modern family home features an open floor plan, gourmet kitchen with high-end appliances, and a spacious backyard perfect for entertaining. The primary suite offers a walk-in closet and luxurious bath. Located in a top-rated school district with easy access to shopping, dining, and major highways.",
    price: "$785,000",
    status: "For Sale",
    type: "House",
    address: "123 Willow Street, Springfield, IL 62701",
    beds: 4,
    baths: 3.5,
    sqft: 2850,
    lotSize: "0.25 acres",
    yearBuilt: 2018,
    amenities: [
      "Central Air Conditioning",
      "Attached Garage",
      "High-Speed Internet",
      "Smart Home System",
      "Gourmet Kitchen",
      "Hardwood Floors",
      "Walk-in Closets",
      "Energy Efficient Appliances",
      "Fireplace",
      "Patio/Deck",
    ],
    images: [
      "/images/property2.jpg",
      "/images/property1.jpg",
      "/images/property3.jpg",
      "/images/property4.jpg",
      "/images/property5.jpg",
    ],
    agent: {
      name: "Jennifer Smith",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "jennifer@homevista.com",
      image: "/images/agent1.jpg",
      properties: 145,
      experience: "12 years",
    },
  }

  return (
    <div className="container py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/properties" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>
      </div>

      {/* Property Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{property.status}</Badge>
            <Badge variant="outline">{property.type}</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 mr-1" />
            <span>{property.address}</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-3xl font-bold text-primary mb-2">{property.price}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to favorites</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share property</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery images={property.images} />

      {/* Property Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <BedDouble className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Bedrooms</div>
                        <div className="text-lg">{property.beds}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Bath className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Bathrooms</div>
                        <div className="text-lg">{property.baths}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Maximize className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Square Feet</div>
                        <div className="text-lg">{property.sqft.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Home className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Lot Size</div>
                        <div className="text-lg">{property.lotSize}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Year Built</div>
                        <div className="text-lg">{property.yearBuilt}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Car className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Garage</div>
                        <div className="text-lg">2 Cars</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Property Features & Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="map" className="mt-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <PropertyMap address={property.address} />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <PropertyAgentCard agent={property.agent} />

          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <Link href={`/properties/${item}`} key={item} className="flex gap-3 group">
                    <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=150&width=150"
                        alt="Similar Property"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                        Modern Townhouse
                      </h4>
                      <p className="text-primary text-sm font-semibold">$425,000</p>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <BedDouble className="h-3 w-3 mr-1" />3 Beds
                        <Bath className="h-3 w-3 ml-2 mr-1" />2 Baths
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
