"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cart from "@/components/cart"
import { Droplet, Clock, Zap, Wind } from "lucide-react"

export default function FragranceTipsPage() {
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; name: string; price: number; quantity: number; image: string }>
  >([])
  const [showCart, setShowCart] = useState(false)

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId)
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  const tips = [
    {
      icon: Droplet,
      title: "Application Technique",
      desc: "Apply fragrance to pulse points: wrists, neck, and behind ears. These areas emit heat, which helps diffuse the scent throughout the day.",
    },
    {
      icon: Clock,
      title: "Timing Matters",
      desc: "Apply fragrance right after showering when your skin is still slightly damp. This helps the scent last longer and develop beautifully.",
    },
    {
      icon: Zap,
      title: "Layering Strategy",
      desc: "Use matching body lotion before applying fragrance. This creates a longer-lasting scent profile and enhances the overall experience.",
    },
    {
      icon: Wind,
      title: "Storage Tips",
      desc: "Keep fragrances away from direct sunlight and heat. Store in a cool, dark place to preserve the fragrance's integrity and longevity.",
    },
  ]

  const advancedTips = [
    "Don't rub your wrists together after applying fragrance - this breaks down the scent molecules",
    "Spray fragrance in the air and walk through the mist for a subtle, even application",
    "Different fragrances work better at different times - light citrus for day, deeper scents for evening",
    "Rotate your fragrances to prevent olfactory fatigue and keep your sense of smell fresh",
    "Test fragrances on skin, not paper - body chemistry affects how scents develop",
    "Allow fragrance to settle for 15 minutes before judging the final scent profile",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClose={() => setShowCart(false)}
        />
      )}

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
              Fragrance Tips & Tricks
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
              Master the art of fragrance and make your scents last longer
            </p>
          </div>
        </div>
      </section>

      {/* Main Tips Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Core Tips Grid */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Essential Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tips.map((tip, idx) => {
                const Icon = tip.icon
                return (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{tip.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pro Tips Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Pro Tips</h2>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {advancedTips.map((tip, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fragrance Guide Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Fragrance Types Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Eau de Parfum",
                  concentration: "15-20%",
                  duration: "4-6 hours",
                  desc: "Most luxurious and long-lasting option, perfect for special occasions",
                },
                {
                  name: "Eau de Toilette",
                  concentration: "5-15%",
                  duration: "2-4 hours",
                  desc: "Light and refreshing, ideal for daily wear and office environments",
                },
                {
                  name: "Eau de Cologne",
                  concentration: "2-5%",
                  duration: "1-2 hours",
                  desc: "Fresh and subtle, great for layering or quick refreshment",
                },
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-pink-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Fragrance Concentration</p>
                      <p className="text-lg text-gray-900 font-bold">{type.concentration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Typical Duration</p>
                      <p className="text-lg text-gray-900 font-bold">{type.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Scent?</h2>
            <p className="text-lg mb-8 opacity-90">
              Apply these tips to discover your signature fragrance and make it last all day
            </p>
            <a
              href="/collection"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
