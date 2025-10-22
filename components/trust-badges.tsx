import { Award, Truck, Shield, Leaf } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    { icon: Award, label: "Award Winning", description: "Recognized globally" },
    { icon: Truck, label: "Free Shipping", description: "On orders over $50" },
    { icon: Shield, label: "Secure Payment", description: "100% protected" },
    { icon: Leaf, label: "Eco-Friendly", description: "Sustainable packaging" },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{badge.label}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
