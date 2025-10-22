import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-xl font-bold text-white">Essence</span>
            </div>
            <p className="text-gray-400 text-sm">
              Luxury fragrances crafted with passion and the finest ingredients from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collection" className="hover:text-pink-500 transition">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-pink-500 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/fragrance-tips" className="hover:text-pink-500 transition">
                  Fragrance Tips
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-pink-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and new launches</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded font-semibold hover:shadow-lg transition transform hover:scale-105">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center gap-1">
            © 2025 Essence. Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
