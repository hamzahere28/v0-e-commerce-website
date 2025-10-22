"use client"

import { ShoppingCart, Heart, User, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Essence
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/collection" className="text-gray-700 hover:text-pink-600 font-medium transition">
              Collections
            </Link>
            <Link href="/collection" className="text-gray-700 hover:text-pink-600 font-medium transition">
              All Products
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-pink-600 font-medium transition">
              Our Story
            </Link>
            <Link href="/fragrance-tips" className="text-gray-700 hover:text-pink-600 font-medium transition">
              Fragrance Tips
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="/my-products" className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Heart className="w-5 h-5 text-gray-700" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link
              href="/collection"
              className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/collection"
              className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/story"
              className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="/fragrance-tips"
              className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fragrance Tips
            </Link>
            <Link
              href="/contact"
              className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
