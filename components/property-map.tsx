"use client"

import { MapPin } from "lucide-react"

interface PropertyMapProps {
  address: string
}

export default function PropertyMap({ address }: PropertyMapProps) {
  return (
    <div className="relative h-[400px] w-full bg-muted rounded-lg overflow-hidden">
      {/* This would normally integrate with Google Maps or similar */}
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-6">
        <MapPin className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Property Location</h3>
        <p className="text-muted-foreground">{address}</p>
        <p className="text-sm text-muted-foreground mt-4">
          Map integration would be implemented here with Google Maps, Mapbox, or similar service
        </p>
      </div>
    </div>
  )
}
