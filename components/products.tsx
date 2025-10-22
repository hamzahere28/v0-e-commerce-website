"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  rating: number
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Rose Elegance",
    price: 89.99,
    image: "/rose-fragrance-bottle.jpg",
    description: "A timeless blend of damask rose and sandalwood",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Ocean Breeze",
    price: 79.99,
    image: "/ocean-fragrance-bottle.jpg",
    description: "Fresh citrus notes with a hint of sea salt",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Midnight Musk",
    price: 94.99,
    image: "/dark-fragrance-bottle.jpg",
    description: "Deep musk with amber and vanilla undertones",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Vanilla Dream",
    price: 74.99,
    image: "/vanilla-fragrance-bottle.jpg",
    description: "Warm vanilla with hints of caramel and spice",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Jasmine Nights",
    price: 84.99,
    image: "/jasmine-fragrance-bottle.jpg",
    description: "Exotic jasmine with white florals and musk",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Citrus Sunrise",
    price: 69.99,
    image: "/citrus-fragrance-bottle.jpg",
    description: "Energizing blend of bergamot and grapefruit",
    rating: 4.5,
  },
]

interface ProductsProps {
  onAddToCart: (product: { id: string; name: string; price: number; image: string }) => void
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [addedProduct, setAddedProduct] = useState<string | null>(null)

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAddedProduct(product.id)
    setTimeout(() => setAddedProduct(null), 2000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-xl text-gray-600">Handpicked fragrances for every mood and occasion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-pink-600">
                  ★ {product.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-500">50ml</span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 ${
                    addedProduct === product.id
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedProduct === product.id ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
