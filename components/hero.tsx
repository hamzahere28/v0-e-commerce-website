export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Signature
              </span>{" "}
              Scent
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Luxury fragrances crafted with the finest ingredients. Each bottle tells a story of elegance and
              sophistication.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105">
                Shop Now
              </button>
              <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl blur-3xl opacity-40"></div>
            <img
              src="/luxury-fragrance-bottle.jpg"
              alt="Luxury Fragrance"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
