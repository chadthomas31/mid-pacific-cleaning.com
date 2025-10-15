export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Mid Pacific Cleaning Logo" 
                className="h-12 w-12 mr-3"
              />
              <h3 className="text-2xl font-bold text-maui-sand">
                Mid Pacific Cleaning
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional cleaning services by Kate McCluskey & Darci Gonzalves. 
              Serving Maui, Hawaii with excellence, trust, and eco-friendly solutions.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Serving all of Maui, Hawaii</p>
              <p>📞 (808) 555-CLEAN</p>
              <p>✉️ info@midpacificcleaning.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-maui-sand mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-in/out Cleaning</li>
              <li>Vacation Rental Cleaning</li>
              <li>Eco-Friendly Solutions</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-maui-sand mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Lahaina</li>
              <li>Kihei</li>
              <li>Kahului</li>
              <li>Wailuku</li>
              <li>Paia</li>
              <li>Makawao</li>
              <li>And more...</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mid Pacific Cleaning. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="/" className="hover:text-maui-sand transition-colors duration-200">
                Home
              </a>
              <a href="/services" className="hover:text-maui-sand transition-colors duration-200">
                Services
              </a>
              <a href="/quote" className="hover:text-maui-sand transition-colors duration-200">
                Get Quote
              </a>
              <a href="#" className="hover:text-maui-sand transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-maui-sand transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
