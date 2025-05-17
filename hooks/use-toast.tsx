"use client"

import type * as React from "react"
import { createContext, useContext } from "react"

type ToastType = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

type ToastContextType = {
  toast: (toast: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = (toast: ToastType) => {
    // In a real implementation, this would show a toast notification
    console.log("Toast:", toast)
    alert(`${toast.title}\n${toast.description || ""}`)
  }

  return <ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
