import { Lightbulb, Clock, Droplets, Wind } from "lucide-react"

export default function FragranceTips() {
  const tips = [
    {
      icon: Droplets,
      title: "Application Tips",
      description:
        "Apply fragrance to pulse points like wrists, neck, and behind ears for maximum longevity and projection.",
    },
    {
      icon: Clock,
      title: "Best Time to Apply",
      description:
        "Apply fragrance right after showering when your skin is warm and pores are open for better scent absorption.",
    },
    {
      icon: Wind,
      title: "Storage Guide",
      description:
        "Keep fragrances away from direct sunlight and heat. Store in a cool, dark place to preserve the scent.",
    },
    {
      icon: Lightbulb,
      title: "Layering Technique",
      description:
        "Use matching body lotion before applying fragrance to enhance longevity and create a more complex scent profile.",
    },
  ]

  return (
    <section id="fragrance-tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fragrance Tips & Tricks</h2>
          <p className="text-xl text-gray-600">Master the art of wearing fragrance with our expert guidance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Tips */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Fragrance Lovers</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4">
              <span className="text-pink-600 font-bold text-lg">•</span>
              <span className="text-gray-700">
                Don't rub your wrists together after applying fragrance - it breaks down the scent molecules
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-pink-600 font-bold text-lg">•</span>
              <span className="text-gray-700">
                Rotate your fragrances to prevent olfactory fatigue and keep your nose fresh
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-pink-600 font-bold text-lg">•</span>
              <span className="text-gray-700">
                Test fragrances on your skin, not just from the bottle - body chemistry matters
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-pink-600 font-bold text-lg">•</span>
              <span className="text-gray-700">
                Lighter fragrances work better in summer, while heavier scents are perfect for winter
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
