import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, ArrowRight, Home, Building, Building2, Key } from "lucide-react"
import FeaturedProperties from "@/components/featured-properties"
import TestimonialSection from "@/components/testimonial-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-[-1] bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Dream Home</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover thousands of properties for sale and rent across the country. Your perfect home is just a search
              away.
            </p>

            {/* Search Form */}
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-full md:col-span-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="City, Address, ZIP" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                          <SelectItem value="200k-300k">$200k - $300k</SelectItem>
                          <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                          <SelectItem value="500k+">$500k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="col-span-full">
                      <Search className="mr-2 h-4 w-4" /> Search Properties
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="rent" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-full md:col-span-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="City, Address, ZIP" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Monthly Rent" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                          <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                          <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                          <SelectItem value="3000+">$3,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="col-span-full">
                      <Search className="mr-2 h-4 w-4" /> Search Rentals
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Properties by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/properties?type=residential" className="group">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential</h3>
                <p className="text-muted-foreground text-sm mb-4">Find the perfect house for you and your family</p>
                <span className="text-primary text-sm font-medium group-hover:underline inline-flex items-center">
                  Browse Homes <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/properties?type=commercial" className="group">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial</h3>
                <p className="text-muted-foreground text-sm mb-4">Office spaces, retail properties and more</p>
                <span className="text-primary text-sm font-medium group-hover:underline inline-flex items-center">
                  Browse Commercial <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/properties?type=apartment" className="group">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Apartments</h3>
                <p className="text-muted-foreground text-sm mb-4">Modern apartments in the heart of the city</p>
                <span className="text-primary text-sm font-medium group-hover:underline inline-flex items-center">
                  Browse Apartments <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link href="/properties?type=new" className="group">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">New Developments</h3>
                <p className="text-muted-foreground text-sm mb-4">Brand new properties with modern amenities</p>
                <span className="text-primary text-sm font-medium group-hover:underline inline-flex items-center">
                  Browse New Properties <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of happy homeowners who found their perfect property with HomeVista. Our expert agents are
            ready to help you every step of the way.
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
              <Link href="/contact">Contact an Agent</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
