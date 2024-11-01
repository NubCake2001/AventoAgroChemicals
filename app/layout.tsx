import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import MobileNav from "@/components/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "avento Agro Chemicals",
  icons: {
    icon: "/AventoLogo.jpg",
  },
  description: "Innovative Agro Chemical Solutions for a Sustainable Future",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-white">
              <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                  <MobileNav />
                  <Link href="/" className="flex items-center space-x-2">
                    {/* <span className="font-bold text-2xl">
                      <span className="text-blue-900">avento</span>
                      <span className="text-green-500"> agro chemicals</span>
                    </span> */}
                    <Image
                      src="/AventoLogo.jpg"
                      alt="Logo"
                      width={168}
                      height={175}
                    ></Image>
                  </Link>
                  <nav className="hidden md:flex items-center space-x-6">
                    <Link
                      href="/"
                      className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/products"
                      className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      Products
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="flex items-center space-x-4">
                    {/* <ModeToggle /> */}
                    <Button
                      asChild
                      className="hidden md:inline-flex bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="bg-gray-100 border-t">
              <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      About avento
                    </h3>
                    <p className="text-sm text-gray-600">
                      avento Agro Chemicals provides innovative solutions for
                      sustainable agriculture, ensuring a greener future for
                      all.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      Quick Links
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="text-sm text-gray-600 hover:text-blue-900 transition-colors"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="text-sm text-gray-600 hover:text-blue-900 transition-colors"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products"
                          className="text-sm text-gray-600 hover:text-blue-900 transition-colors"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-sm text-gray-600 hover:text-blue-900 transition-colors"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      Contact Us
                    </h3>
                    <p className="text-sm text-gray-600">
                      123 Agro Street, Farmville
                      <br />
                      Country, 12345
                      <br />
                      Phone: (123) 456-7890
                      <br />
                      Email: info@avento.com
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    © 2023 avento Agro Chemicals. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
