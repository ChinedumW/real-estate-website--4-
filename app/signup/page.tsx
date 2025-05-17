"use client"

import Link from "next/link"
import { useActionState } from "react"
import { signup } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  const [state, formAction] = useActionState(signup, { error: null })

  return (
    <div className="container max-w-md py-16 md:py-24">
      <Link href="/" className="flex items-center gap-2 text-primary mb-8 hover:underline">
        <Home className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>

      <Card className="border shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join HomeVista to start your real estate journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {state.error && (
            <Alert variant="destructive">
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <form action={formAction} className="space-y-4">
            <Tabs defaultValue="buyer" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buyer">Buyer/Renter</TabsTrigger>
                <TabsTrigger value="agent">Agent</TabsTrigger>
              </TabsList>

              <input type="hidden" name="user-type" value="buyer" id="user-type" />

              <TabsContent value="buyer" className="pt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="name@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" placeholder="(123) 456-7890" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" placeholder="••••••••" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup defaultValue="email" name="contact-method">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="contact-both" />
                      <Label htmlFor="contact-both">Both</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms and conditions
                    </Link>
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Buyer Account
                </Button>
              </TabsContent>

              <TabsContent value="agent" className="pt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="agent-name">Full Name</Label>
                  <Input id="agent-name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-email">Email</Label>
                  <Input id="agent-email" name="email" placeholder="name@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-phone">Phone Number</Label>
                  <Input id="agent-phone" name="phone" placeholder="(123) 456-7890" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-license">License Number</Label>
                  <Input id="agent-license" name="license" placeholder="e.g. ABC12345" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-company">Brokerage/Company</Label>
                  <Input id="agent-company" name="company" placeholder="e.g. HomeVista Realty" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-password">Password</Label>
                  <Input id="agent-password" name="password" placeholder="••••••••" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-confirm-password">Confirm Password</Label>
                  <Input
                    id="agent-confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="agent-terms" name="terms" required />
                  <Label
                    htmlFor="agent-terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms and conditions
                    </Link>
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Agent Account
                </Button>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
