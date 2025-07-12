'use client';

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative h-[140vh] lg:h-[130vh] w-full overflow-hidden text-white flex items-center">
      {/* Background Image covering whole section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BannerPic.png"
          alt="Canva Workshop Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-100/80 via-blue-1000/80 to-purple-900/80"></div>
      </div>

      {/* Tech-style abstract shapes background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-500 rounded-full blur-2xl"></div>
      </div>

      {/* Main content container */}
      <div className="relative top-4 lg:top-7 z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        {/* Text content overlay */}
        <div className="w-full  lg:w-[50%] space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ultimate Canva Workshop
          </h1>
          
          {/* Supporting paragraph */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.5' }}>
            A complete guide to using Canva AI to create stunning designs, edit videos, and generate content. Canva AI has changed the market, and here we learn how to use it to its full potential.
          </p>

          {/* Highlight box for important notes */}
          <div className="bg-red-600 bg-opacity-90 text-white px-6 py-4 rounded-xl max-w-md mx-auto lg:mx-0" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <p className="font-medium text-base lg:text-lg">
              🚀 Limited Time Offer: Enjoy one week of Canva Premium at no cost—just register first.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
            <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-base lg:text-lg shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button 
              onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-base lg:text-lg shadow-lg hover:shadow-xl"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 