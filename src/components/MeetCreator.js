'use client';

import React from 'react';

const MeetCreator = () => {
  return (
    <section id="creator" className="relative py-20 md:py-28 bg-gray-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Content - Left Column */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Instructor Tag */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 bg-transparent border border-white/30 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm">
                Meet your Instructor
              </span>
            </div>

            {/* Name */}
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-red-500">Talha Malik</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/80 uppercase tracking-wider font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Digital Design Expert & Content Creator
              </p>
            </div>

            {/* Biography */}
            <div className="space-y-4 lg:space-y-6 text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-sm md:text-base lg:text-lg">
                I'm Malik Talha Awan, a dedicated MERN Stack Developer, Canva Graphic Designer, and Content Creator from Pakistan. With over five years of experience in graphic design and three years in video editing, I specialize in creating visually compelling content and full-stack web applications. I've designed countless branding assets, YouTube thumbnails, social media posts, and presentations using Canva Pro—without relying on Adobe tools. My development skills focus on clean, user-friendly web solutions built with MongoDB, Express.js, React.js, and Node.js. I'm also well-versed in AI content creation, including image, video, and voice generation, as well as custom AI agents.
              </p>
              <p className="text-sm md:text-base lg:text-lg">
                I hold certifications from the Virtual University of Pakistan in Computer Science, Microsoft in Web Technologies, and Meta in Front-End Development and Digital Marketing. My key skills include MERN stack development, Canva design, video editing (CapCut, DaVinci Resolve), SEO, YouTube scriptwriting, and prompt engineering. I bring creativity, speed, and innovation to every project I work on.
              </p>
            </div>

            {/* Learn More Section */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Learn More
              </h3>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* YouTube Know More Button */}
                <button 
                  onClick={() => window.open('https://youtube.com/@talhaacademy_1', '_blank')}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-4 py-2 lg:px-5 lg:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm lg:text-base">Know More</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Image - Right Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[600px] xl:w-[550px] xl:h-[650px]">
                <img 
                  src="/ProfilePhoto.png" 
                  alt="Talha Malik Profile Photo" 
                  className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCreator; 