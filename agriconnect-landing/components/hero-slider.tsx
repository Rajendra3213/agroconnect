'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    image: '/placeholder.svg?height=1080&width=1920&text=Slide+1',
    title: 'Revolutionizing Agribusiness',
    subtitle: 'Connect with farmers and buyers for sustainable agricultural trade',
  },
  {
    image: '/placeholder.svg?height=1080&width=1920&text=Slide+2',
    title: 'Empower Your Agricultural Trade',
    subtitle: 'Access a global network of verified suppliers and buyers',
  },
  {
    image: '/placeholder.svg?height=1080&width=1920&text=Slide+3',
    title: 'Grow Your Agribusiness',
    subtitle: 'Leverage data-driven insights and efficient logistics',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gray-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm pointer-events-auto"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8 text-white" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm pointer-events-auto"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8 text-white" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

