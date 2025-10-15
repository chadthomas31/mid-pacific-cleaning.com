'use client'

import { useState } from 'react'

const contactMethods = [
  {
    title: 'Call Us',
    description: 'Speak directly with Kate or Darci',
    details: '(808) 555-CLEAN',
    action: 'Call Now',
    icon: '📞',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Email Us',
    description: 'Send us your cleaning needs',
    details: 'info@midpacificcleaning.com',
    action: 'Send Email',
    icon: '✉️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Text Us',
    description: 'Quick questions and scheduling',
    details: '(808) 555-TEXT',
    action: 'Send Text',
    icon: '💬',
    color: 'from-purple-500 to-pink-500'
  }
]

const serviceAreas = [
  'Lahaina', 'Kihei', 'Kahului', 'Wailuku', 'Paia', 'Makawao', 
  'Haiku', 'Kula', 'Hana', 'Napili', 'Kapalua', 'Wailea'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (result.success) {
        alert(result.message)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredContact: 'phone'
        })
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Sorry, there was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-maui-blue">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Mid Pacific Cleaning difference? Contact Kate and Darci today for a personalized quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h4>
                      <p className="text-gray-600 mb-2">{method.description}</p>
                      <p className="text-maui-blue font-semibold mb-3">{method.details}</p>
                      <button className="btn-primary text-sm py-2 px-4">
                        {method.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-r from-maui-blue to-maui-teal rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">We Serve All of Maui</h4>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-sm opacity-90">
                    ✓ {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-blue focus:border-transparent"
                      placeholder="(808) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move-in/out Cleaning</option>
                    <option value="vacation">Vacation Rental Cleaning</option>
                    <option value="regular">Regular Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your cleaning needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-blue focus:border-transparent"
                    placeholder="Please describe your cleaning requirements, property size, frequency, and any special requests..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="text"
                        checked={formData.preferredContact === 'text'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Text
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-maui-teal to-maui-blue rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Cleaning Services</h4>
                <p className="text-white/90">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p className="text-white/90">Saturday: 8:00 AM - 4:00 PM</p>
                <p className="text-white/90">Sunday: By appointment only</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
                <p className="text-white/90">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-white/90">Emergency cleaning available</p>
                <p className="text-white/90">24/7 online booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
