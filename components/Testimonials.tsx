'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Lahaina, Maui',
    rating: 5,
    text: 'Kate and Darci are absolutely amazing! They transformed our vacation rental and now our guests consistently comment on how spotless it is. Their attention to detail is incredible.',
    service: 'Vacation Rental Cleaning',
    avatar: '👩'
  },
  {
    name: 'Michael Chen',
    location: 'Kihei, Maui',
    rating: 5,
    text: 'I\'ve been using Mid Pacific Cleaning for my office for over a year now. They\'re reliable, professional, and always go above and beyond. Highly recommend!',
    service: 'Commercial Cleaning',
    avatar: '👨'
  },
  {
    name: 'Lisa Rodriguez',
    location: 'Kahului, Maui',
    rating: 5,
    text: 'As a busy mom, having Kate and Darci handle our home cleaning has been a lifesaver. They use eco-friendly products which is important for our family, and the results are always perfect.',
    service: 'Residential Cleaning',
    avatar: '👩‍👧‍👦'
  },
  {
    name: 'David Kim',
    location: 'Paia, Maui',
    rating: 5,
    text: 'After trying several cleaning services, we finally found the best! Kate and Darci are thorough, trustworthy, and their eco-friendly approach aligns with our values. Five stars!',
    service: 'Eco-Friendly Cleaning',
    avatar: '👨‍💼'
  },
  {
    name: 'Jennifer Walsh',
    location: 'Wailuku, Maui',
    rating: 5,
    text: 'The team at Mid Pacific Cleaning exceeded all our expectations. They cleaned our new home before we moved in and it was absolutely spotless. We\'ll definitely be using them regularly!',
    service: 'Move-in Cleaning',
    avatar: '👩‍💻'
  },
  {
    name: 'Robert Thompson',
    location: 'Makawao, Maui',
    rating: 5,
    text: 'Professional, punctual, and incredibly thorough. Kate and Darci have been cleaning our restaurant for months and our customers always comment on how clean everything is.',
    service: 'Restaurant Cleaning',
    avatar: '👨‍🍳'
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-maui-blue">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the satisfied customers who trust us with their homes and businesses
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-maui-teal mb-2">
                  {testimonials[currentTestimonial].location}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].service}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-maui-blue' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-maui-teal">{testimonial.location}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic mb-3">"{testimonial.text}"</p>
              <div className="text-sm text-gray-500">{testimonial.service}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-maui-blue to-maui-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Hundreds of Satisfied Customers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the Mid Pacific Cleaning difference for yourself
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
