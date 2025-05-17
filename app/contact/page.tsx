import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | HomeVista",
  description: "Get in touch with HomeVista's team of real estate professionals",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about a property or need assistance? Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p className="text-muted-foreground">
                123 Property Street
                <br />
                Real Estate City, 10001
                <br />
                United States
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">Sales: (123) 456-7890</p>
              <p className="text-muted-foreground mb-2">Support: (123) 456-7891</p>
              <p className="text-muted-foreground">Rentals: (123) 456-7892</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">info@homevista.com</p>
              <p className="text-muted-foreground mb-2">sales@homevista.com</p>
              <p className="text-muted-foreground">support@homevista.com</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" placeholder="(123) 456-7890" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="property">Property Information</SelectItem>
                    <SelectItem value="viewing">Schedule a Viewing</SelectItem>
                    <SelectItem value="selling">Selling My Property</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} required />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Office Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Office Information</h2>
          <div className="bg-muted rounded-lg overflow-hidden">
            <div className="relative h-[300px] w-full">
              {/* This would be a Google Map in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">HomeVista Headquarters</h3>
                  <p className="text-muted-foreground">123 Property Street, Real Estate City, 10001</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Monday - Friday</span>
                  </div>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Saturday</span>
                  </div>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Sunday</span>
                  </div>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">How do I schedule a property viewing?</h3>
            <p className="text-muted-foreground">
              You can schedule a viewing by contacting us directly through our contact form, calling our office, or
              clicking the "Schedule Viewing" button on any property listing.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What documents do I need to apply for a property?</h3>
            <p className="text-muted-foreground">
              Typically, you'll need proof of identity, proof of income, employment verification, and references. Our
              agents will guide you through the specific requirements for each property.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">How long does the buying process usually take?</h3>
            <p className="text-muted-foreground">
              The buying process can take anywhere from 30-90 days, depending on various factors including financing,
              inspections, and negotiations. Our team works to make the process as efficient as possible.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Do you help with financing options?</h3>
            <p className="text-muted-foreground">
              Yes, we partner with several trusted lenders who can help you explore financing options. Our agents can
              connect you with the right financial advisors for your situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
