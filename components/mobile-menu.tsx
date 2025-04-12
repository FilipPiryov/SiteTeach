"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <nav className="flex flex-col gap-6 mt-10">
          <a
            href="#about"
            onClick={handleLinkClick}
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={handleLinkClick}
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={handleLinkClick}
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="text-lg font-medium hover:text-emerald-600 transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-center mt-4"
          >
            Book a Free Trial
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
