export default function Story() {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded in 2015, Essence was born from a passion for creating luxurious fragrances that tell a story. Our
              journey began in a small Parisian atelier, where master perfumers crafted each scent with meticulous
              attention to detail.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Today, we've grown into a global brand trusted by fragrance enthusiasts worldwide. Each bottle represents
              our commitment to quality, sustainability, and the art of perfumery. We source the finest ingredients from
              around the world and work with renowned perfumers to create unforgettable scents.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to make luxury fragrance accessible to everyone, without compromising on quality or
              ethics. Every purchase supports our commitment to sustainable practices and fair-trade partnerships.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl overflow-hidden h-96">
              <img src="/luxury-perfume-atelier-workshop.jpg" alt="Essence Atelier" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
              <p className="text-sm font-semibold text-pink-600 mb-2">Since 2015</p>
              <p className="text-gray-700">Crafting luxury fragrances with passion and precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
