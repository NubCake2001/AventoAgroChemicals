import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold">
            About
          </Link>
          <Link href="/products" className="text-lg font-semibold">
            Products
          </Link>
          <Link href="/contact" className="text-lg font-semibold">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav