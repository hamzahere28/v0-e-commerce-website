import { Sparkles, Truck, Lock, Heart } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Authentic luxury fragrances with the finest ingredients",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100 worldwide delivery",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "100% secure transactions with encrypted checkout",
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Rated 4.9/5 by thousands of satisfied customers",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
