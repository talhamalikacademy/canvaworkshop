'use client';

import React from 'react';

const WhyLearnThis = () => {
  return (
    <section id="why-learn" className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 text-center max-w-screen-xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-white">Why You Will Learn This</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Box 1 */}
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-500/20 border border-gray-700/50 flex flex-col justify-between h-full min-h-[300px] group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                To Become A Pro User Of Canva Designing And Editing
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Master advanced design techniques and editing tools in Canva to create professional-grade visuals for any project.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Box 2 */}
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-purple-500/20 border border-gray-700/50 flex flex-col justify-between h-full min-h-[300px] group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-snug group-hover:text-purple-300 transition-colors duration-300">
                To Unlock Potential Of AI For 10x Productivity
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Leverage Canva's AI features to automate tasks, generate content, and dramatically boost your creative output.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Box 3 */}
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-500/20 border border-gray-700/50 flex flex-col justify-between h-full min-h-[300px] group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                To Learn How To Build A Complete Brand Using Canva
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Develop a cohesive brand identity, from logos to marketing materials, all within the versatile Canva platform.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnThis; 