import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "AgriConnect has transformed how we source our produce. The platform's efficiency and reliability are unmatched.",
      author: "Emily Chen",
      position: "Procurement Manager, FreshMart Inc."
    },
    {
      quote: "As a farmer, AgriConnect has opened up new markets for my products. Their support team is always there when I need them.",
      author: "John Farmer",
      position: "Owner, Green Acres Farm"
    },
    {
      quote: "The market insights provided by AgriConnect have been invaluable for our business strategy. Highly recommended!",
      author: "Sarah Thompson",
      position: "CEO, AgriTech Solutions"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Agricultural Leaders</h2>
          <p className="text-gray-600 text-lg">
            Hear from our satisfied partners about their experience with AgriConnect.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <QuoteIcon className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

