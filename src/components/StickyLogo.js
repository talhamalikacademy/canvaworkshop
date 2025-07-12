'use client';

import React from 'react';

const StickyLogo = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-1">
      <div className="relative group">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-70 group-hover:opacity-90"></div>
        
        {/* Secondary glow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-70"></div>
        
        {/* Logo with enhanced styling */}
        <img 
          src="/Logo.png" 
          alt="Talha Malik Academy Logo" 
          className="h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 w-auto object-contain drop-shadow-2xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
        />
        
        {/* Additional glow ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default StickyLogo; 