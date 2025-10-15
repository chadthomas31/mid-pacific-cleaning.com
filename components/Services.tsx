'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services tailored to your needs and schedule.',
    features: ['Regular maintenance cleaning', 'Deep cleaning', 'Move-in/out cleaning', 'Post-construction cleanup'],
    icon: '🏠',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Home Organization',
    description: 'Professional organization services to declutter and optimize your space.',
    features: ['Closet organization', 'Kitchen organization', 'Home office setup', 'Garage organization'],
    icon: '📦',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Vacation Rental Cleaning',
    description: 'Specialized cleaning for vacation rentals with quick turnaround times.',
    features: ['Same-day turnover cleaning', 'Linen and towel service', 'Inventory management', 'Guest-ready standards'],
    icon: '🏖️',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional office and business cleaning to maintain a pristine workspace.',
    features: ['Office cleaning', 'Retail space cleaning', 'Medical facility cleaning', 'Restaurant cleaning'],
    icon: '🏢',
    color: 'from-teal-500 to-green-500'
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Environmentally safe cleaning products that protect your family and Maui\'s ecosystem.',
    features: ['Non-toxic products', 'Biodegradable solutions', 'Allergy-safe cleaning', 'Pet-friendly products'],
    icon: '🌿',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Specialized Services',
    description: 'Custom cleaning solutions for unique situations and special events.',
    features: ['Event cleanup', 'Holiday preparation', 'Window cleaning', 'Carpet & upholstery'],
    icon: '✨',
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-maui-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning solutions designed to meet your unique needs in beautiful Maui, Hawaii
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeService === index ? 'ring-2 ring-maui-blue' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="text-maui-teal mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              <div className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-maui-teal rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-6">
                Get Quote for {services[activeService].title}
              </button>
            </div>
            <div className="text-center">
              <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${services[activeService].color} flex items-center justify-center text-6xl mb-4`}>
                {services[activeService].icon}
              </div>
              <p className="text-gray-600">
                Professional service with attention to detail
              </p>
            </div>
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-maui-blue to-maui-teal rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact Kate & Darci for a personalized cleaning plan that fits your budget and schedule
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-maui-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Call (808) 555-CLEAN
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-maui-blue transition-colors duration-200">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
