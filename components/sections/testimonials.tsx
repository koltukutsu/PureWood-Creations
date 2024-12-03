import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 bg-secondary bg-opacity-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="PureWood toys have transformed our playtime. The quality is unmatched, and the educational value is incredible."
            author="Emily R., Parent"
          />
          <TestimonialCard
            quote="As an educator, I highly recommend these toys. They promote problem-solving and creativity in such a natural way."
            author="Michael T., Elementary Teacher"
          />
          <TestimonialCard
            quote="The Woodland Cottage has become my daughter's favorite toy. It's beautifully made and sparks hours of imaginative play."
            author="Sarah L., Mother of Two"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <Star className="text-yellow-400 w-6 h-6" />
        <Star className="text-yellow-400 w-6 h-6" />
        <Star className="text-yellow-400 w-6 h-6" />
        <Star className="text-yellow-400 w-6 h-6" />
        <Star className="text-yellow-400 w-6 h-6" />
      </div>
      <p className="text-lg mb-4 italic">"{quote}"</p>
      <p className="font-semibold text-right">- {author}</p>
    </div>
  )
}

