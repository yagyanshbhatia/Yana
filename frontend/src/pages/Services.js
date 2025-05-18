import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'ultrasound',
      title: 'Ultrasound',
      image: 'https://images.unsplash.com/photo-1630531210843-d6f343ad1f90',
      icon: 'fas fa-wave-square',
      description: 'Our ultrasound services use high-frequency sound waves to create images of organs and structures inside the body.',
      details: [
        'Abdominal Ultrasound',
        'Obstetric Ultrasound',
        'Pelvic Ultrasound',
        'Breast Ultrasound',
        'Thyroid Ultrasound',
        'Vascular Ultrasound'
      ],
      benefits: 'Ultrasound imaging is safe, non-invasive, and does not use radiation. It provides real-time images, making it a valuable tool for examining soft tissues and blood flow.',
      duration: '15-30 minutes'
    },
    {
      id: 'xray',
      title: 'X-Ray',
      image: 'https://images.unsplash.com/photo-1666214282459-c7dff167ecc0',
      icon: 'fas fa-x-ray',
      description: 'X-ray imaging uses a small amount of radiation to produce images of bones and certain tissues inside the body.',
      details: [
        'Chest X-ray',
        'Skeletal X-ray',
        'Dental X-ray',
        'Abdominal X-ray'
      ],
      benefits: 'X-rays are quick, painless, and help diagnose conditions such as broken bones, pneumonia, and dental problems.',
      duration: '5-10 minutes'
    },
    {
      id: 'mri',
      title: 'MRI',
      image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1',
      icon: 'fas fa-magnet',
      description: 'Magnetic Resonance Imaging (MRI) uses a strong magnetic field and radio waves to create detailed images of organs and tissues.',
      details: [
        'Brain MRI',
        'Spine MRI',
        'Joint MRI',
        'Abdominal MRI',
        'Cardiac MRI',
        'Pelvic MRI'
      ],
      benefits: 'MRI provides detailed images without using radiation and is particularly useful for examining soft tissues, the brain, and the spine.',
      duration: '30-60 minutes'
    },
    {
      id: 'ct',
      title: 'CT Scan',
      image: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80',
      icon: 'fas fa-laptop-medical',
      description: 'Computed Tomography (CT) uses X-rays to create detailed cross-sectional images of the body.',
      details: [
        'Head CT',
        'Chest CT',
        'Abdominal CT',
        'Coronary CT Angiography',
        'CT Colonography',
        'CT Pulmonary Angiography'
      ],
      benefits: 'CT scans can quickly identify internal injuries and diseases. They are particularly useful in emergency situations and for diagnosing complex conditions.',
      duration: '10-30 minutes'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              At YANA Health Scans & Labs, we offer a comprehensive range of diagnostic imaging services 
              using state-of-the-art technology to provide accurate results for better healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.slice(0, 2).map((service) => (
              <div key={service.id} id={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`${service.icon} text-2xl text-yana-orange mr-3`}></i>
                    <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Types of {service.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h3>
                    <p className="text-gray-600">{service.benefits}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="far fa-clock text-yana-orange mr-2"></i>
                      <span className="text-gray-600">Average duration: {service.duration}</span>
                    </div>
                    <Link
                      to="/book"
                      className="inline-flex items-center text-sm font-medium text-yana-orange hover:text-yana-orange-dark"
                    >
                      Book Now
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {services.slice(2, 4).map((service) => (
              <div key={service.id} id={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`${service.icon} text-2xl text-yana-orange mr-3`}></i>
                    <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Types of {service.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-yana-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h3>
                    <p className="text-gray-600">{service.benefits}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="far fa-clock text-yana-orange mr-2"></i>
                      <span className="text-gray-600">Average duration: {service.duration}</span>
                    </div>
                    <Link
                      to="/book"
                      className="inline-flex items-center text-sm font-medium text-yana-orange hover:text-yana-orange-dark"
                    >
                      Book Now
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose YANA for Your Diagnostic Needs</h2>
            <div className="w-24 h-1 bg-yana-orange mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We combine advanced technology with compassionate care to ensure you have the best possible experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-user-md text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Professionals</h3>
              <p className="text-gray-600">
                Our team consists of experienced radiologists and technicians who are committed to providing the highest quality care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-laptop-medical text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                We use state-of-the-art imaging equipment to ensure accurate and reliable results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-clock text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                We understand the importance of timely results and strive to provide reports as quickly as possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                We prioritize your comfort and wellbeing, treating every patient with empathy and respect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-calendar-check text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Convenient Scheduling</h3>
              <p className="text-gray-600">
                Our online booking system makes it easy to schedule appointments at a time that works for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yana-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-comments text-yana-orange text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clear Communication</h3>
              <p className="text-gray-600">
                We explain procedures clearly and ensure you understand your results and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-yana-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Our team is ready to provide you with the diagnostic services you need. 
            Book a consultation today and take the first step towards better health.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yana-orange bg-white hover:bg-gray-100"
          >
            Book Consultation
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;