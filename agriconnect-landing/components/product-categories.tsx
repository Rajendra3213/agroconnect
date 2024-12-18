import { Apple, Carrot, Wheat, Bean, Milk, Bell, Droplet, Package } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export function ProductCategories() {
  const categories = [
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Fruits",
      description: "Fresh and seasonal fruits from local farmers",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: <Carrot className="w-6 h-6" />,
      title: "Vegetables",
      description: "Organic and locally sourced vegetables",
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: "Grains and Cereals",
      description: "High-quality grains and cereals",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Bean className="w-6 h-6" />,
      title: "Pulses and Legumes",
      description: "Nutritious pulses and legumes",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: <Milk className="w-6 h-6" />,
      title: "Dairy Products",
      description: "Fresh dairy products from local farms",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Spices and Herbs",
      description: "Premium quality spices and herbs",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Oils and Seeds",
      description: "Pure and natural oils and seeds",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Processed Products",
      description: "Value-added agricultural products",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                  <div className={category.iconColor}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  href={`/products/${category.title.toLowerCase().replace(/ /g, '-')}`}
                  className="text-green-600 font-medium hover:text-green-700 flex items-center"
                >
                  Browse Products
                  <span className="ml-2">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

