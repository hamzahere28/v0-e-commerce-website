"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Cart from "@/components/cart"
import { Heart, Trash2, ShoppingCart } from "lucide-react"

interface SavedProduct {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  savedAt: string
}

export default function MyProductsPage() {
  const [savedProducts, setSavedProducts] = useState<SavedProduct[]>([])
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; name: string; price: number; quantity: number; image: string }>
  >([])
  const [showCart, setShowCart] = useState(false)

  // Load saved products from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("savedProducts")
    if (saved) {
      setSavedProducts(JSON.parse(saved))
    }
  }, [])

  const handleAddToCart = (product: SavedProduct) => {
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

  const handleRemoveSaved = (productId: string) => {
    const updated = savedProducts.filter((p) => p.id !== productId)
    setSavedProducts(updated)
    localStorage.setItem("savedProducts", JSON.stringify(updated))
  }

  const handleClearAll = () => {
    setSavedProducts([])
    localStorage.removeItem("savedProducts")
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Saved Products</h1>
          <p className="text-gray-600">Your collection of favorite fragrances</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {savedProducts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Saved Products Yet</h2>
            <p className="text-gray-600 mb-6">Start adding your favorite fragrances to your collection</p>
            <a
              href="/collection"
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition"
            >
              Browse Collection
            </a>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {savedProducts.length} {savedProducts.length === 1 ? "Product" : "Products"} Saved
              </h2>
              {savedProducts.length > 0 && (
                <button onClick={handleClearAll} className="text-red-600 hover:text-red-700 font-medium transition">
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemoveSaved(product.id)}
                      className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-pink-600">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">Saved on {product.savedAt}</p>
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
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
