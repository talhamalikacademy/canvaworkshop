"use client"
import React, { useState } from "react";
import Image from 'next/image';
import './Certification.css';

const Certification = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8 relative overflow-hidden bg-transparent md:px-8 md:py-16"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Background glow effects */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-blue-500/20 blur-[100px]" />
      
      <div 
        className="container mx-auto flex flex-col md:flex-row items-center gap-[0px] max-w-6xl relative"
      >
        {/* Decorative corners */}
        <div className="absolute top-[-3px] right-[-3px] w-[40px] h-[40px] border-t-[3px] border-r-[3px] border-blue-500 rounded-tr-lg z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="absolute bottom-[-3px] left-[-3px] w-[40px] h-[40px] border-b-[3px] border-l-[3px] border-blue-500 rounded-bl-lg z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      
        {/* Left: Certificate Image (Large & Left Aligned) */}
        <div
          className="relative w-full md:w-2/2 flex justify-center md:justify-start z-10"
        >
          <div 
            className="relative right-0 md:right-[70px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/40 to-blue-500/40 blur-xl transform -rotate-3"
            />
            <div className="pointer-events-none select-none">
              <Image
                src="/Certificate.png"
                alt="Certificate"
                width={1000}
                height={700}
                className="object-contain w-full max-w-[400px] md:max-w-[1000px] rounded-lg shadow-2xl border border-gray-700 relative z-10 transform transition-all duration-300"
                style={{
                  boxShadow: '0 10px 50px -5px rgba(59,130,246,0.3), 0 0 30px rgba(59,130,246,0.2) inset',
                  filter: 'blur(4px)',
                }}
              />
            </div>
            
            {/* Floating particles animation */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-500/70"
                  style={{
                    width: Math.random() * 10 + 5 + 'px',
                    height: Math.random() * 10 + 5 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Text & Button */}
        <div
          className="relative w-full md:w-2/2 text-white z-10 backdrop-blur-sm p-6 md:p-10 rounded-2xl bg-transparent mt-8 md:mt-0"
        >
          {/* Glowing Effect behind the text */}
          <div
            className="absolute -z-10 inset-0 m-auto w-full h-full bg-blue-500 blur-[120px] opacity-30"
            style={{
              boxShadow: '0 0 80px 20px rgba(59,130,246,0.3)'
            }}
          />
          
          <h1 
            className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-6"
          >
            <span 
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Become</span>
            </span>{" "}
            TM Academy{" "}
            <span 
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Certified</span>
            </span>
          </h1>
          
          <p 
            className="text-base md:text-xl mb-6 md:mb-8"
          >
            If you are TM Academy Certified, that's all you need.
            <br />
            Stand out from the crowd with our industry-recognized certification.
          </p>
          
          <button 
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform"
          >
            Get Certified Today
          </button>
          
          {/* Animated line */}
          <div
            className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
