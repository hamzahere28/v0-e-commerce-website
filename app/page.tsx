"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import TrustBadges from "@/components/trust-badges"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"
import Cart from "@/components/cart"

export default function Home() {
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; name: string; price: number; quantity: number; image: string }>
  >([])
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
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
      <Hero />
      <TrustBadges />
      <Products onAddToCart={handleAddToCart} />
      <Testimonials />
      <Features />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
