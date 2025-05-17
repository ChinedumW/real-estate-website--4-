"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useActionState } from "react"
import { login } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Facebook, Github, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [state, formAction] = useActionState(login, { error: null })

  // Check for signup success message
  useEffect(() => {
    const signupSuccess = searchParams.get("signup") === "success"
    if (signupSuccess) {
      toast({
        title: "Account created successfully!",
        description: "You can now log in with your credentials.",
        variant: "default",
      })
    }
  }, [searchParams, toast])

  return (
    <div className="container max-w-md py-16 md:py-24">
      <Link href="/" className="flex items-center gap-2 text-primary mb-8 hover:underline">
        <Home className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>

      <Card className="border shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login to HomeVista</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {state.error && (
            <Alert variant="destructive">
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="name@example.com" type="email" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" name="password" placeholder="••••••••" type="password" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" name="remember" />
              <Label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
