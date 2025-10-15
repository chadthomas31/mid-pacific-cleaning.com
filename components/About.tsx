'use client'

import { useState } from 'react'

const teamMembers = [
  {
    name: 'Kate McCluskey',
    role: 'Co-Founder & Lead Cleaner',
    bio: 'With over 8 years of experience in professional cleaning, Kate brings meticulous attention to detail and a passion for creating spotless spaces. She specializes in eco-friendly cleaning solutions and has trained extensively in commercial and residential cleaning techniques.',
    specialties: ['Eco-friendly cleaning', 'Deep cleaning', 'Commercial spaces', 'Training & supervision'],
    image: '👩‍💼',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Darci Gonzalves',
    role: 'Co-Founder & Operations Manager',
    bio: 'Darci combines her background in hospitality management with a genuine love for helping Maui residents maintain beautiful homes. Her organizational skills and customer service expertise ensure every client receives exceptional service.',
    specialties: ['Customer relations', 'Scheduling', 'Quality control', 'Specialized cleaning'],
    image: '👩‍💻',
    color: 'from-teal-500 to-green-500'
  }
]

const values = [
  {
    title: 'Excellence',
    description: 'We never compromise on quality, ensuring every surface sparkles and every detail is perfect.',
    icon: '⭐'
  },
  {
    title: 'Trust',
    description: 'Your home is your sanctuary. We treat it with the respect and care it deserves.',
    icon: '🤝'
  },
  {
    title: 'Sustainability',
    description: 'Protecting Maui\'s beautiful environment with eco-friendly cleaning products and practices.',
    icon: '🌺'
  },
  {
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on, every single time.',
    icon: '⏰'
  }
]

export default function About() {
  const [activeMember, setActiveMember] = useState(0)

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet <span className="text-maui-blue">Kate & Darci</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The extraordinary cleaning duo behind Mid Pacific Cleaning, dedicated to bringing you the highest quality service in Maui
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                  activeMember === index ? 'ring-2 ring-maui-blue shadow-lg' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveMember(index)}
              >
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-4xl mb-4`}>
                    {member.image}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-maui-teal font-semibold">{member.role}</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-maui-blue text-white px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-maui-teal to-maui-blue rounded-full flex items-center justify-center text-2xl text-white mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-maui-blue to-maui-teal rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Kate and Darci met while working in Maui's hospitality industry, where they discovered their shared passion for creating pristine, welcoming spaces. After years of experience in hotels and resorts, they decided to bring their expertise directly to Maui residents and businesses.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              What started as a small local business has grown into Maui's most trusted cleaning service, known for reliability, attention to detail, and commitment to eco-friendly practices. We're proud to serve our community and help keep Maui beautiful, one clean space at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Eco-Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
