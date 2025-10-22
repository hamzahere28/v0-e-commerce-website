import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Fashion Influencer",
      content: "Essence fragrances are absolutely divine. The quality and longevity are unmatched. I'm obsessed!",
      rating: 5,
      image: "/woman-avatar.png",
    },
    {
      name: "James Chen",
      role: "Luxury Enthusiast",
      content: "Finally found a fragrance brand that understands true luxury. Every bottle is a masterpiece.",
      rating: 5,
      image: "/man-avatar.png",
    },
    {
      name: "Emma Rodriguez",
      role: "Beauty Expert",
      content: "The customer service is exceptional, and the fragrances speak for themselves. Highly recommended!",
      rating: 5,
      image: "/woman-avatar-2.png",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Fragrance Enthusiasts
            </span>
          </h2>
          <p className="text-xl text-gray-600">Join thousands of satisfied customers worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
