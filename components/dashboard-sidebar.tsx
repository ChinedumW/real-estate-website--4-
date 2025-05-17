"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Building, Home, LayoutDashboard, LogOut, MessageSquare, Settings, User, Users } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar" // Using shadcn sidebar [^1]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">HomeVista</span>
          </div>
          {isMobile && (
            <div className="flex justify-end px-2">
              <SidebarTrigger />
            </div>
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                <Link href="/dashboard">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/properties")}>
                <Link href="/dashboard/properties">
                  <Building className="h-5 w-5" />
                  <span>Properties</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/inquiries")}>
                <Link href="/dashboard/inquiries">
                  <MessageSquare className="h-5 w-5" />
                  <span>Inquiries</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/clients")}>
                <Link href="/dashboard/clients">
                  <Users className="h-5 w-5" />
                  <span>Clients</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/profile")}>
                <Link href="/dashboard/profile">
                  <User className="h-5 w-5" />
                  <span>My Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                <Link href="/dashboard/settings">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src="/images/agent1.jpg" alt="Agent profile" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">Jennifer Smith</p>
                <p className="text-xs text-muted-foreground truncate">jennifer@homevista.com</p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
