'use client'

export default function Services() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Regular home cleaning services tailored to your schedule and needs.",
      features: [
        "Weekly, bi-weekly, or monthly cleaning",
        "Kitchen and bathroom deep cleaning",
        "Dusting and vacuuming",
        "Trash removal",
        "Eco-friendly products"
      ],
      icon: "🏠"
    },
    {
      title: "Home Organization",
      description: "Professional organization services to declutter and optimize your space.",
      features: [
        "Closet organization",
        "Kitchen organization",
        "Home office setup",
        "Garage organization",
        "Custom storage solutions"
      ],
      icon: "📦"
    },
    {
      title: "Vacation Rental Cleaning",
      description: "Specialized cleaning for vacation rentals with quick turnaround times.",
      features: [
        "Same-day turnover cleaning",
        "Linen and towel service",
        "Inventory management",
        "Key exchange coordination",
        "Guest-ready standards"
      ],
      icon: "🏖️"
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for move-ins, move-outs, or seasonal cleaning.",
      features: [
        "Inside appliances (oven, fridge, dishwasher)",
        "Baseboards and trim",
        "Light fixtures and ceiling fans",
        "Window sills and tracks",
        "Cabinet fronts and handles"
      ],
      icon: "✨"
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Complete cleaning services for moving transitions.",
      features: [
        "Empty property cleaning",
        "Cabinet and drawer cleaning",
        "Appliance deep cleaning",
        "Floor refinishing prep",
        "Security deposit guarantee"
      ],
      icon: "📦"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning services for businesses and offices.",
      features: [
        "Office cleaning",
        "Retail space cleaning",
        "Medical facility cleaning",
        "Restaurant cleaning",
        "Flexible scheduling"
      ],
      icon: "🏢"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-maui-blue via-maui-teal to-maui-sunset">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Mid Pacific Cleaning Logo" 
              className="h-20 w-20 mr-6"
            />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Our Services
              </h1>
              <p className="text-white/90 mt-4 text-xl">
                Professional cleaning solutions by Kate McCluskey & Darci Gonzalves
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-maui-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="text-maui-teal mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <button className="bg-maui-teal hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote and let us take care of your cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/quote" 
                className="bg-maui-sand hover:bg-yellow-600 text-maui-blue font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:808-555-CLEAN" 
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Call (808) 555-CLEAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
