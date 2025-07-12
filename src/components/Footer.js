'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 md:py-16 bg-gray-900 text-white text-center overflow-hidden border-t border-gray-700">
      <div className="container mx-auto px-6 md:px-8">
        <p className="text-md md:text-lg text-gray-400">&copy; {new Date().getFullYear()} Talha Malik Academy. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 