"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cart from "@/components/cart"
import { Award, Heart, Leaf } from "lucide-react"

export default function StoryPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
              Discover the journey behind Essence, where passion meets perfection
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Essence was born from a simple dream: to create fragrances that tell stories. In 2010, our founder
                discovered the transformative power of scent during a journey through the lavender fields of Provence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a passion project in a small atelier has blossomed into a global brand trusted by
                millions. Every fragrance we create carries the essence of that original inspiration.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl overflow-hidden shadow-lg">
              <img src="/luxury-perfume-atelier-workshop.jpg" alt="Essence atelier" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  We pour our hearts into every fragrance, ensuring each bottle carries genuine emotion and artistry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to ethical sourcing and eco-friendly practices in every step of our production.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality is non-negotiable. We use only the finest ingredients and traditional perfumery techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                {
                  year: "2010",
                  title: "The Dream Begins",
                  desc: "Founded in Provence with a vision to revolutionize fragrance",
                },
                {
                  year: "2014",
                  title: "Global Expansion",
                  desc: "Essence reaches 25 countries across Europe and Asia",
                },
                { year: "2018", title: "Award Recognition", desc: "Wins International Fragrance Award for Innovation" },
                {
                  year: "2023",
                  title: "Sustainability Leader",
                  desc: "Achieves carbon-neutral production across all facilities",
                },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full"></div>
                    {idx < 3 && <div className="w-1 h-24 bg-gradient-to-b from-pink-300 to-transparent mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-bold text-pink-600 uppercase tracking-wide">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Fragrant Journey</h2>
            <p className="text-lg mb-8 opacity-90">
              Experience the essence of luxury and discover your signature scent today
            </p>
            <a
              href="/collection"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
