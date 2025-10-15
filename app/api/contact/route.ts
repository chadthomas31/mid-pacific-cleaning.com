import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, preferredContact } = body

    // Here you would typically:
    // 1. Validate the form data
    // 2. Send an email notification to Kate & Darci
    // 3. Store the lead in a database
    // 4. Send a confirmation email to the customer

    // For now, we'll just log the data and return a success response
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      preferredContact,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! Kate and Darci will get back to you within 24 hours.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error processing your request. Please try again.' 
      },
      { status: 500 }
    )
  }
}
