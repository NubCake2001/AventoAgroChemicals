"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const carouselSlides = [
  {
    image: "/farmer1.png",
    alt: "Crop field",
    title: "Sustainable Farming Solutions",
    description: "Our chemicals promote eco-friendly agriculture",
  },
  {
    image: "/farmer1.png",
    alt: "Laboratory",
    title: "Cutting-edge Research",
    description: "Developing next-generation agro chemicals",
  },
  {
    image: "/farmer1.png",
    alt: "Farmer in field",
    title: "Farmer-Centric Approach",
    description: "Tailored solutions for every farm",
  },
];

const productCategories = [
  {
    title: "Herbicides",
    description: "Effective weed control solutions",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Fungicides",
    description: "Protect your crops from fungal diseases",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Insecticides",
    description: "Safeguard against harmful insects",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Plant Growth Regulators",
    description: "Optimize crop yield and quality",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden w-full py-12 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-green-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          {" "}
          {/* Update 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold mb-4"
            >
              Welcome to <span className="text-green-400">Avento</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-3 text-xl sm:text-2xl mb-8"
            >
              Innovative Agro Chemical Solutions for a Sustainable Future
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 relative z-30"
            >
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Link href="/products">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full bg-gray-100"
      >
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] relative"
                >
                  <div className="flex h-[60vh]">
                    <div className="w-[65%] relative">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-[35%] relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-600">
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="absolute inset-0 bg-repeat bg-[length:20px_20px]"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                          }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="transform -rotate-45 bg-green-500/10 w-[150%] h-[150%]"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center p-6 text-white">
                          <h2 className="text-3xl font-bold mb-4">
                            {slide.title}
                          </h2>
                          <p className="text-lg">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full py-12 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="flex flex-col h-full border-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Link href={`/products#${category.title.toLowerCase()}`}>
                        View Products
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
