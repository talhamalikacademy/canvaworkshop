'use client';

import React from 'react';

const EnrollNow = () => {
  return (
    <section id="enroll" className="relative py-20 md:py-28 bg-gray-800 text-white overflow-hidden text-center">
      <div className="container mx-auto px-6 md:px-8 max-w-screen-xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-white">Enroll Now</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        
        <button
          className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-xl md:text-2xl tracking-wide shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Start Your Canva Journey
        </button>
      </div>
    </section>
  );
};

export default EnrollNow; 