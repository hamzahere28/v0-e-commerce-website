"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cart from "@/components/cart"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  description: string
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Rose Elegance",
    price: 89.99,
    image: "/rose-fragrance-bottle.jpg",
    rating: 4.8,
    reviews: 234,
    description: "A timeless blend of Bulgarian rose and jasmine",
    category: "Floral",
  },
  {
    id: "2",
    name: "Midnight Musk",
    price: 94.99,
    image: "/luxury-fragrance-bottle.jpg",
    rating: 4.9,
    reviews: 189,
    description: "Deep, sensual musk with woody undertones",
    category: "Oriental",
  },
  {
    id: "3",
    name: "Citrus Sunrise",
    price: 79.99,
    image: "/citrus-fragrance-bottle.jpg",
    rating: 4.7,
    reviews: 156,
    description: "Fresh bergamot and lemon with a hint of vanilla",
    category: "Citrus",
  },
  {
    id: "4",
    name: "Ocean Breeze",
    price: 84.99,
    image: "/ocean-fragrance-bottle.jpg",
    rating: 4.6,
    reviews: 142,
    description: "Crisp aquatic notes with sea salt and driftwood",
    category: "Aquatic",
  },
  {
    id: "5",
    name: "Vanilla Dream",
    price: 74.99,
    image: "/vanilla-fragrance-bottle.jpg",
    rating: 4.8,
    reviews: 267,
    description: "Warm vanilla with caramel and sandalwood",
    category: "Gourmand",
  },
  {
    id: "6",
    name: "Lavender Serenity",
    price: 69.99,
    image: "/lavender-fragrance-bottle.jpg",
    rating: 4.7,
    reviews: 198,
    description: "Calming lavender with chamomile and cedarwood",
    category: "Herbal",
  },
  {
    id: "7",
    name: "Amber Luxe",
    price: 99.99,
    image: "/amber-fragrance-bottle.jpg",
    rating: 4.9,
    reviews: 203,
    description: "Rich amber with oud and precious woods",
    category: "Amber",
  },
  {
    id: "8",
    name: "Peony Bliss",
    price: 84.99,
    image: "/peony-fragrance-bottle.jpg",
    rating: 4.8,
    reviews: 176,
    description: "Delicate peony with white musk and pear",
    category: "Floral",
  },
]

export default function CollectionPage() {
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; name: string; price: number; quantity: number; image: string }>
  >([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Floral", "Oriental", "Citrus", "Aquatic", "Gourmand", "Herbal", "Amber"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }]
    })
  }

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
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClose={() => setShowCart(false)}
        />
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Complete Collection</h1>
          <p className="text-gray-600">Discover our full range of premium fragrances</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-pink-600">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
