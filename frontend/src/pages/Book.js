import React from 'react';

const Book = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Schedule your appointment with our experts for any radiology service you need.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Appointment Booking</h2>
                <p className="text-gray-600 mb-6">
                  Please select a convenient time slot from our online calendar below. 
                  If you don't see a time that works for you, please contact us directly at 
                  <a href="tel:+911234567890" className="text-yana-orange hover:text-yana-orange-dark"> +91 12345 67890</a>.
                </p>
                
                {/* Calendly inline widget */}
                <div className="calendly-inline-widget border border-gray-200 rounded-lg" style={{ minWidth: '320px', height: '700px' }}>
                  <iframe
                    src="https://calendly.com/d/dummy-calendly-link/radiology-consultation"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Scheduling"
                  ></iframe>
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Before Your Appointment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">
                        Please bring your doctor's referral form if applicable.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">
                        Arrive 15 minutes before your scheduled appointment time to complete any necessary paperwork.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">
                        Bring your identification and any relevant previous scan results or medical records.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">
                        Specific preparation instructions will be provided after booking, if applicable for your procedure.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-yana-orange text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 mb-3">
                  Call us directly to schedule an appointment
                </p>
                <a href="tel:+911234567890" className="inline-block text-yana-orange font-medium hover:text-yana-orange-dark">
                  +91 12345 67890
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-yana-orange text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-3">
                  Send us an email with your preferred date and time
                </p>
                <a href="mailto:booking@yanahealth.com" className="inline-block text-yana-orange font-medium hover:text-yana-orange-dark">
                  booking@yanahealth.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-yana-orange text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Working Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Friday: 8am - 8pm</p>
                <p className="text-gray-600 mb-1">Saturday: 8am - 6pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;