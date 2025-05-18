import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      title: 'Ultrasound',
      description: 'Non-invasive imaging using sound waves to create pictures of the inside of your body.',
      icon: 'fas fa-wave-square',
      image: 'https://images.unsplash.com/photo-1630531210843-d6f343ad1f90',
      link: '/services'
    },
    {
      title: 'X-Ray',
      description: 'Quick and painless test that produces images of the structures inside your body.',
      icon: 'fas fa-x-ray',
      image: 'https://images.unsplash.com/photo-1666214282459-c7dff167ecc0',
      link: '/services'
    },
    {
      title: 'MRI',
      description: 'Detailed images of organs and tissues using strong magnetic fields and radio waves.',
      icon: 'fas fa-magnet',
      image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1',
      link: '/services'
    },
    {
      title: 'CT Scan',
      description: 'Combines multiple X-ray images taken from different angles to produce cross-sectional images.',
      icon: 'fas fa-laptop-medical',
      image: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      name: 'Ankit Sharma',
      position: 'Regular Patient',
      text: "The staff at YANA made me feel comfortable during my ultrasound procedure. They explained everything clearly and were very professional.",
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      rating: 5
    },
    {
      name: 'Meera Patel',
      position: 'First-time Patient',
      text: "I was anxious about my MRI, but the technicians at YANA were so supportive and caring. They truly live up to their name - you are not alone!",
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5
    },
    {
      name: 'Raj Malhotra',
      position: 'Regular Patient',
      text: "Fast service, minimal waiting time, and detailed reports. YANA Health Scans provides excellent radiology services at a reasonable cost.",
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative flex items-center min-h-screen bg-opacity-60 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1551897922-6a919947ae24)` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              Welcome to YANA Health Scans & Labs
            </h1>
            <p className="text-xl text-white mb-8">
              Professional radiology services with a personal touch. Because at YANA, you are not alone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book"
                className="inline-flex justify-center items-center py-3 px-6 text-base font-medium rounded-md text-white bg-yana-orange hover:bg-yana-orange-dark"
              >
                Book Consultation
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center py-3 px-6 text-base font-medium rounded-md text-yana-orange bg-white hover:bg-gray-100"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1666214280352-db292c05fd80" 
                alt="YANA Radiology Center" 
                className="rounded-lg shadow-xl w-full object-cover h-96"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-yana-orange mr-3"></div>
                <h2 className="text-lg text-yana-orange font-semibold">About YANA</h2>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Compassionate Care, Advanced Technology</h3>
              <p className="text-lg text-gray-600 mb-6">
                At YANA Health Scans & Labs, we understand that medical procedures can be intimidating. 
                Our name reflects our promise - You Are Not Alone. We combine state-of-the-art technology 
                with a warm, supportive environment to ensure you receive the best care possible.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expert radiologists and technicians</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Advanced diagnostic equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comfortable and calming environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yana-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Quick result turnaround</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center font-medium text-yana-orange hover:text-yana-orange-dark"
              >
                Learn more about us
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center">
              <div className="w-12 h-1 bg-yana-orange mr-3"></div>
              <h2 className="text-lg text-yana-orange font-semibold">Our Services</h2>
              <div className="w-12 h-1 bg-yana-orange ml-3"></div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mt-4">Comprehensive Diagnostic Services</h3>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              We offer a wide range of diagnostic imaging services using the latest technology
              to provide accurate results for better healthcare decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yana-orange hover:bg-yana-orange-dark"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center">
              <div className="w-12 h-1 bg-yana-orange mr-3"></div>
              <h2 className="text-lg text-yana-orange font-semibold">Testimonials</h2>
              <div className="w-12 h-1 bg-yana-orange ml-3"></div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mt-4">What Our Patients Say</h3>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Don't just take our word for it. Here's what our patients have to say about their experience with YANA Health Scans & Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yana-orange py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Our team is ready to assist you. Book a consultation today and take the first step towards better health.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yana-orange bg-white hover:bg-gray-100"
          >
            Book Now
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;