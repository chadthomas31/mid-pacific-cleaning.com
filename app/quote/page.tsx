'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function Quote() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    phone: '',
    
    // Property Details
    propertyType: '',
    propertySize: '',
    bedrooms: '',
    bathrooms: '',
    
    // Cleaning Type
    cleaningType: '',
    frequency: '',
    specialRequests: '',
    
    // Additional Services
    organization: false,
    deepCleaning: false,
    moveInOut: false,
    vacationRental: false,
    
    // Scheduling
    preferredDate: '',
    preferredTime: '',
    accessInstructions: '',
    
    // Budget
    budget: '',
    notes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your quote request! We\'ll contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-maui-blue via-maui-teal to-maui-sunset">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Mid Pacific Cleaning Logo" 
              className="h-16 w-16 mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get Your Free Quote
            </h1>
          </div>
          <p className="text-center text-white/90 mt-4 text-lg">
            Professional cleaning services by Kate McCluskey & Darci Gonzalves
          </p>
          
          {/* Back Button */}
          <div className="text-center mt-6">
            <a 
              href="/" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Property Type</option>
                    <option value="residential">Residential Home</option>
                    <option value="vacation-rental">Vacation Rental</option>
                    <option value="condo">Condo</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial Space</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Size *</label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Size</option>
                    <option value="studio">Studio (0-1 bedroom)</option>
                    <option value="small">Small (1-2 bedrooms)</option>
                    <option value="medium">Medium (3-4 bedrooms)</option>
                    <option value="large">Large (5+ bedrooms)</option>
                    <option value="mansion">Mansion (6+ bedrooms)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bedrooms</label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms</label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    min="0"
                    step="0.5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Cleaning Type */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Cleaning Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Cleaning *</label>
                  <select
                    name="cleaningType"
                    value={formData.cleaningType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Cleaning Type</option>
                    <option value="regular">Regular Residential Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move-in">Move-in Cleaning</option>
                    <option value="move-out">Move-out Cleaning</option>
                    <option value="post-construction">Post-Construction</option>
                    <option value="vacation-rental">Vacation Rental Turnover</option>
                    <option value="one-time">One-time Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Frequency</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="as-needed">As Needed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Additional Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="organization"
                      checked={formData.organization}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-maui-teal focus:ring-maui-teal border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Home Organization Services</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="deepCleaning"
                      checked={formData.deepCleaning}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-maui-teal focus:ring-maui-teal border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Deep Cleaning (appliances, baseboards, etc.)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="moveInOut"
                      checked={formData.moveInOut}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-maui-teal focus:ring-maui-teal border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Move-in/Move-out Cleaning</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="vacationRental"
                      checked={formData.vacationRental}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-maui-teal focus:ring-maui-teal border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Vacation Rental Management</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Scheduling</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Access Instructions</label>
                <textarea
                  name="accessInstructions"
                  value={formData.accessInstructions}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="How should we access your property? (key location, gate code, etc.)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                />
              </div>
            </div>

            {/* Budget & Notes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-maui-blue mb-6">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-100">Under $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-plus">$500+</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <input
                    type="text"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any specific areas of focus?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us anything else we should know about your cleaning needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maui-teal focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-maui-teal hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get My Free Quote
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                We'll contact you within 24 hours with your personalized quote
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
