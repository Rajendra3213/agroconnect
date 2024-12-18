import { Leaf, Users, Truck, BarChart } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Quality Produce",
      description: "Connect with verified farmers for the freshest, highest-quality agricultural products."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Trusted Network",
      description: "Join a community of verified suppliers and buyers, ensuring reliable transactions."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Efficient Logistics",
      description: "Optimize your supply chain with our integrated logistics solutions for timely deliveries."
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-600" />,
      title: "Market Insights",
      description: "Access real-time market data and analytics to make informed business decisions."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Agricultural Trade</h2>
          <p className="text-gray-600 text-lg">
            Discover how AgriConnect revolutionizes the B2B agricultural marketplace.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

