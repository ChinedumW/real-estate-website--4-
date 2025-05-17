"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { login as loginUser, logout as logoutUser, type LoginCredentials, type User } from "@/lib/auth"

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const remember = formData.get("remember") === "on"

  // Validate form fields
  if (!email || !password) {
    return {
      error: "Email and password are required",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      error: "Please enter a valid email address",
    }
  }

  // Attempt to login
  const credentials: LoginCredentials = { email, password }
  const result = await loginUser(credentials)

  if (!result.success) {
    return {
      error: result.error,
    }
  }

  // Redirect to dashboard or home page based on user role
  if (result.user?.role === "agent" || result.user?.role === "admin") {
    redirect("/dashboard")
  } else {
    redirect("/")
  }
}

export async function logout() {
  await logoutUser()
  redirect("/login")
}

export async function signup(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirm-password") as string
  const userType = formData.get("user-type") as string

  // Validate form fields
  if (!name || !email || !password || !confirmPassword) {
    return {
      error: "All fields are required",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      error: "Please enter a valid email address",
    }
  }

  // Password validation
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    }
  }

  // Confirm password
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    }
  }

  // In a real app, you would create a new user in the database here
  // For this example, we'll just redirect to the login page with a success message
  redirect("/login?signup=success")
}

// New server action to get the current user
export async function getCurrentUser(): Promise<User | null> {
  // This would typically be stored in a database
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password123", // In a real app, this would be hashed
      role: "user",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456", // In a real app, this would be hashed
      role: "agent",
    },
    {
      id: "3",
      name: "Admin User",
      email: "admin@example.com",
      password: "adminpass", // In a real app, this would be hashed
      role: "admin",
    },
  ]

  const userId = cookies().get("user_id")?.value

  if (!userId) {
    return null
  }

  const user = users.find((u) => u.id === userId)

  if (!user) {
    return null
  }

  // Return user without password
  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}
