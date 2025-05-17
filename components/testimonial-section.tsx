import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "HomeVista made finding our dream home so easy! The search tools were intuitive and our agent was incredibly helpful throughout the entire process.",
    image: "/images/agent1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Buyer",
    quote:
      "As a first-time homebuyer, I was nervous about the process. HomeVista's team guided me every step of the way. I couldn't be happier with my new place!",
    image: "/images/agent2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Investor",
    quote:
      "I've used many real estate platforms, but HomeVista stands out for their attention to detail and comprehensive property information. My go-to for investments.",
    image: "/images/agent3.jpg",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full h-14 w-14 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
