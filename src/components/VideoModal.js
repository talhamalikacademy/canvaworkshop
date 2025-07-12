'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  return (
    <section id="preview" className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto px-6 md:px-8 text-center max-w-screen-xxl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-white">Watch Workshop Preview</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        
        <div
          className="relative w-full max-w-[120vw] mx-auto shadow-2xl rounded-2xl overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/30"
          onClick={() => setIsOpen(true)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image src="/VideoModalThumbanil.png" alt="Video Thumbnail" fill className="object-cover" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
              
              {/* Main play button */}
              <button className="relative bg-white/90 backdrop-blur-sm rounded-full p-4 md:p-5 lg:p-6 shadow-xl group-hover:bg-white transition-all duration-300 transform group-hover:scale-105">
                <svg 
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-900 ml-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Video info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ultimate Canva Workshop Preview</h3>
              <p className="text-gray-300 text-sm md:text-base">See what you&apos;ll learn in this comprehensive Canva course</p>
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            15:30
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg transition-opacity duration-300">
          <div className="relative w-full max-w-7xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-contain bg-black"
              onTimeUpdate={handleProgress}
              onEnded={() => setIsPlaying(false)}
              autoPlay
              controlsList="nodownload nofullscreen"
            >
              Your browser does not support the video tag.
            </video>

            {/* Enhanced video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
              {/* Progress bar */}
              <div className="mb-4">
                <div
                  className="w-full h-2 bg-gray-700/50 rounded-full cursor-pointer group relative"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-150 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause button */}
                  <button
                    onClick={togglePlay}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>

                  {/* Mute/Unmute button */}
                  <button
                    onClick={toggleMute}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    {isMuted ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>

                  {/* Volume control */}
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-1 bg-gray-700/50 rounded-full cursor-pointer">
                      <div className="w-3/4 h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoModal; 