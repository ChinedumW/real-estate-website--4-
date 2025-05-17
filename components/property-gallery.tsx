"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [showFullscreen, setShowFullscreen] = React.useState(false)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
  }

  const toggleFullscreen = () => {
    setShowFullscreen(!showFullscreen)
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden bg-muted h-[400px] md:h-[500px]">
        <Image
          src={images[activeIndex] || "/placeholder.svg"}
          alt={`Property image ${activeIndex + 1}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-full"
          onClick={toggleFullscreen}
        >
          <Maximize className="h-5 w-5" />
          <span className="sr-only">View fullscreen</span>
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={`
              relative rounded-md overflow-hidden h-20 cursor-pointer transition-all
              ${activeIndex === index ? "ring-4 ring-primary" : "ring-1 ring-muted"}
              hover:opacity-90
            `}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Property thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen View */}
      {showFullscreen && (
        <div className="fixed inset-0 z-50 bg-background/95 flex flex-col p-6">
          <div className="flex justify-end mb-4">
            <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
              <Maximize className="h-6 w-6" />
              <span className="sr-only">Exit fullscreen</span>
            </Button>
          </div>
          <div className="flex-1 relative">
            <Image
              src={images[activeIndex] || "/placeholder.svg"}
              alt={`Property image ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 backdrop-blur-sm rounded-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 backdrop-blur-sm rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-8 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`
                  relative rounded-md overflow-hidden h-16 cursor-pointer transition-all
                  ${activeIndex === index ? "ring-4 ring-primary" : "ring-1 ring-muted"}
                  hover:opacity-90
                `}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Property thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
