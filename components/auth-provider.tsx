"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/lib/auth"
import { getCurrentUser } from "@/app/actions/auth"

type AuthContextType = {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        // Use the server action to get the current user
        const userData = await getCurrentUser()
        setUser(userData)
      } catch (error) {
        console.error("Failed to load user:", error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
