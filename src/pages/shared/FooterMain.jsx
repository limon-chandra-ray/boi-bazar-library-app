import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterMain = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We are dedicated to providing innovative library management and book donation solutions to empower communities and foster a love for reading.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Library Management</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Book Donations</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Community Programs</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Educational Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Library Street, Booktown</p>
            <p className="text-gray-400 mb-2">Phone: (+880) 01797856496</p>
            <p className="text-gray-400 mb-4">Email: info@librarymanagement.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Library Management System. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm mr-4">Privacy Policy</Link>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;