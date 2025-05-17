import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { BedDouble, Bath, Maximize, MapPin, Search, Heart, RefreshCcw, SlidersHorizontal } from "lucide-react"

export const metadata: Metadata = {
  title: "Properties | HomeVista",
  description: "Browse all available properties",
}

// Mock data for properties
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    price: "$340,000",
    type: "apartment",
    status: "For Sale",
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
    status: "For Sale",
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
    status: "For Sale",
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
    status: "For Sale",
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
    status: "For Sale",
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
    status: "For Sale",
    badges: ["Open Floor Plan"],
    address: "333 Creative Blvd, Portland, OR",
    beds: 1,
    baths: 2,
    sqft: 1500,
    image: "/images/property6.jpg",
  },
  {
    id: 7,
    title: "Beachfront Cottage",
    price: "$2,400/month",
    type: "house",
    status: "For Rent",
    badges: ["Beachfront"],
    address: "444 Shore Dr, San Diego, CA",
    beds: 2,
    baths: 1,
    sqft: 1100,
    image: "/images/property1.jpg",
  },
  {
    id: 8,
    title: "Downtown Penthouse Apartment",
    price: "$3,800/month",
    type: "apartment",
    status: "For Rent",
    badges: ["Luxury"],
    address: "555 Sky Heights, Chicago, IL",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "/images/property2.jpg",
  },
  {
    id: 9,
    title: "Countryside Ranch House",
    price: "$580,000",
    type: "house",
    status: "For Sale",
    badges: ["Large Lot"],
    address: "666 Rural Route, Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 2500,
    image: "/images/property3.jpg",
  },
]

export default function PropertiesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Properties</h1>
          <p className="text-muted-foreground">Browse all available properties for sale and rent</p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reset Filters
          </Button>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="sqft">Square Footage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-muted/30 rounded-lg p-4 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <SlidersHorizontal className="h-4 w-4" />
            </div>

            <div className="space-y-6">
              {/* Search */}
              <div>
                <label className="text-sm font-medium mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Address, City, ZIP" className="pl-9" />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="text-sm font-medium mb-2 block">Status</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                    <SelectItem value="for-rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div>
                <label className="text-sm font-medium mb-2 block">Property Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-medium mb-2 block">Price Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="text-sm font-medium mb-2 block">Bathrooms</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Square Footage */}
              <div>
                <label className="text-sm font-medium mb-2 block">Square Footage</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              {/* Apply Filters Button */}
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Property Listings */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {properties.map((property) => (
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
                          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
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
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {property.status}
                      </Badge>
                      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md">
                        <span className="font-bold text-lg">{property.price}</span>
                      </div>
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

          {/* Pagination */}
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
