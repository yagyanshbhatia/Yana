import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://media.istockphoto.com/id/183260287/photo/a-orange-stethoscope-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=e6kKh0tOeysKqqjSQJx1wK5ZwXo1TajUCNLliJEwSOU=" 
                alt="YANA Logo" 
                className="h-12 w-auto mr-2" 
              />
              <div>
                <h1 className="font-bold text-xl font-poppins text-yana-orange">YANA</h1>
                <p className="text-xs font-medium text-white">YOU ARE NOT ALONE</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mt-2">
              Providing high-quality radiology services with compassion and care.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yana-orange">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yana-orange">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yana-orange">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yana-orange">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yana-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yana-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yana-orange transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-yana-orange transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-yana-orange transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yana-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-yana-orange transition-colors">Ultrasound</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yana-orange transition-colors">X-Ray</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yana-orange transition-colors">MRI</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yana-orange transition-colors">CT Scan</Link></li>
              <li><Link to="/book" className="text-gray-300 hover:text-yana-orange transition-colors">Book Consultation</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-yana-orange mt-1 mr-3"></i>
                <span className="text-gray-300">A1904 purva westend bangalore</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-yana-orange mt-1 mr-3"></i>
                <span className="text-gray-300">+91 12345 67890</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-yana-orange mt-1 mr-3"></i>
                <span className="text-gray-300">info@yanahealth.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-yana-orange mt-1 mr-3"></i>
                <span className="text-gray-300">Mon-Sat: 8am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} YANA Health Scans & Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-yana-orange text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yana-orange text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;