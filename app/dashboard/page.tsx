import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Home,
  Building,
  MessageSquare,
  CalendarClock,
  DollarSign,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export const metadata: Metadata = {
  title: "Agent Dashboard | HomeVista",
  description: "Manage your real estate listings and client inquiries",
}

// Mock data for properties
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    price: "$340,000",
    status: "Active",
    type: "Apartment",
    location: "New York, NY",
    listed: "Apr 15, 2025",
    views: 342,
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Luxury Family Home with Pool",
    price: "$875,000",
    status: "Active",
    type: "House",
    location: "Los Angeles, CA",
    listed: "Mar 28, 2025",
    views: 278,
    image: "/images/property2.jpg",
  },
  {
    id: 3,
    title: "Cozy Studio in Historic District",
    price: "$220,000",
    status: "Pending",
    type: "Studio",
    location: "Boston, MA",
    listed: "May 2, 2025",
    views: 156,
    image: "/images/property3.jpg",
  },
  {
    id: 4,
    title: "Waterfront Condo with Marina Access",
    price: "$495,000",
    status: "Active",
    type: "Condo",
    location: "Miami, FL",
    listed: "Apr 10, 2025",
    views: 210,
    image: "/images/property4.jpg",
  },
  {
    id: 5,
    title: "Mountain View Cabin Retreat",
    price: "$385,000",
    status: "Sold",
    type: "Cabin",
    location: "Denver, CO",
    listed: "Feb 15, 2025",
    views: 427,
    image: "/images/property5.jpg",
  },
]

// Mock data for recent inquiries
const inquiries = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    property: "Modern Apartment with City View",
    date: "May 15, 2025",
    status: "New",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 987-6543",
    property: "Luxury Family Home with Pool",
    date: "May 14, 2025",
    status: "Responded",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "(555) 555-1234",
    property: "Cozy Studio in Historic District",
    date: "May 12, 2025",
    status: "New",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex-1 p-6 md:p-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Agent Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back, Jennifer! Manage your properties and client inquiries.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild>
                  <Link href="/dashboard/properties/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Property
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Properties</p>
                    <h3 className="text-2xl font-bold mt-1">15</h3>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Active Listings</p>
                    <h3 className="text-2xl font-bold mt-1">9</h3>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-full">
                    <Building className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">New Inquiries</p>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                  </div>
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Sales</p>
                    <h3 className="text-2xl font-bold mt-1">$4.2M</h3>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Listings */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Properties</h2>
              <Button variant="outline" asChild>
                <Link href="/dashboard/properties">View All</Link>
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Listed Date</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {properties.map((property) => (
                        <TableRow key={property.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 rounded overflow-hidden">
                                <Image
                                  src={property.image || "/placeholder.svg"}
                                  alt={property.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="font-medium">{property.title}</div>
                            </div>
                          </TableCell>
                          <TableCell>{property.price}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                property.status === "Active"
                                  ? "bg-green-500/10 text-green-500 border-green-200"
                                  : property.status === "Pending"
                                    ? "bg-orange-500/10 text-orange-500 border-orange-200"
                                    : property.status === "Sold"
                                      ? "bg-blue-500/10 text-blue-500 border-blue-200"
                                      : undefined
                              }
                            >
                              {property.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{property.location}</TableCell>
                          <TableCell>{property.listed}</TableCell>
                          <TableCell>{property.views}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Property
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Property
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete Property
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Inquiries */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Inquiries</h2>
              <Button variant="outline" asChild>
                <Link href="/dashboard/inquiries">View All</Link>
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Property</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell className="font-medium">{inquiry.name}</TableCell>
                          <TableCell>{inquiry.email}</TableCell>
                          <TableCell>{inquiry.phone}</TableCell>
                          <TableCell>{inquiry.property}</TableCell>
                          <TableCell>{inquiry.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                inquiry.status === "New"
                                  ? "bg-primary/10 text-primary border-primary/20"
                                  : inquiry.status === "Responded"
                                    ? "bg-green-500/10 text-green-500 border-green-200"
                                    : undefined
                              }
                            >
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Respond
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <CalendarClock className="h-4 w-4 mr-2" />
                                  Schedule Viewing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
