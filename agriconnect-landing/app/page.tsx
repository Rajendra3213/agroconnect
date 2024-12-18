import { HeroSlider } from "@/components/hero-slider"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProductCategories } from "@/components/product-categories"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeaderButtons } from "@/components/header-buttons"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white/95 fixed top-0 z-50">
        <Link href="/" className="text-2xl font-bold">
          AgriConnect
        </Link>
        <HeaderButtons/>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <HeroSlider />
        <FeaturesSection />
        <ProductCategories />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

