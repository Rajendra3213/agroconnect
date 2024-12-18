import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to transform your agribusiness?
        </h2>
        <p className="text-green-400 text-xl mb-8">
          Join AgriConnect today.
        </p>
        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
          <Link href="/signup" className="text-lg px-8">
            Get Started →
          </Link>
        </Button>
      </div>
    </section>
  )
}

