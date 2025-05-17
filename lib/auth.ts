import { cookies } from "next/headers"

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

export type User = {
  id: string
  name: string
  email: string
  role: string
}

export type LoginCredentials = {
  email: string
  password: string
}

export async function login(credentials: LoginCredentials): Promise<{ success: boolean; user?: User; error?: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Find user by email
  const user = users.find((u) => u.email === credentials.email)

  // Check if user exists and password matches
  if (!user) {
    return { success: false, error: "Invalid email or password" }
  }

  if (user.password !== credentials.password) {
    return { success: false, error: "Invalid email or password" }
  }

  // Create a user object without the password
  const { password, ...userWithoutPassword } = user

  // In a real app, you would create a session or JWT token here
  // For this example, we'll just store the user ID in a cookie
  cookies().set("user_id", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return { success: true, user: userWithoutPassword }
}

export async function logout(): Promise<void> {
  cookies().delete("user_id")
}
