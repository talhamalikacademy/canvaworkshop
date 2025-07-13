"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaComments, FaCheckCircle, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function EnrollNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    city: '',
    country: '',
    to_name: 'Talha Malik', // Add recipient name
    current_year: new Date().getFullYear().toString() // Add current year
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_c2a5u0u',
        'template_183i2wh',
        formRef.current,
        'ncCCiLya2JnZGkcY6'
      );

      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          city: '',
          country: '',
          to_name: 'Talha Malik',
          current_year: new Date().getFullYear().toString()
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center py-8 px-4">
      {/* Custom StickyLogo for enroll page - smaller and higher positioned */}
      <div className="fixed top-2 left-0 right-0 z-50 flex justify-center">
        <div className="relative group">
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 group-hover:opacity-90"></div>
          
          {/* Secondary glow layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-50 group-hover:opacity-70"></div>
          
          {/* Logo with smaller size */}
          <img 
            src="/Logo.png" 
            alt="Talha Malik Academy Logo" 
            className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
          />
          
          {/* Additional glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className="w-full max-w-5xl bg-white/95 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200/30">
        {/* Left Section - Course Info */}
        <div className="lg:w-2/5 w-full bg-gradient-to-br from-blue-800 via-purple-800 to-blue-700 p-6 lg:p-8 flex flex-col justify-center text-white">
          <div className="w-full flex flex-col items-center text-center">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Ultimate Canva Workshop
            </h1>
            <div className="text-base lg:text-lg font-medium text-blue-200 mb-4">By Talha Malik Academy</div>
            
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-blue-300 shadow-lg mx-auto mb-6">
              <Image src="/ProfilePhoto.png" alt="Talha Malik" width={112} height={112} className="object-cover w-full h-full" />
            </div>
            
            <p className="text-sm lg:text-base text-blue-100 font-medium leading-relaxed max-w-xs">
              Master Canva from basics to advanced techniques. Learn AI-powered design, video editing, and create stunning visuals for social media, YouTube, and business. Transform your creativity into modern designs with our comprehensive 8-module curriculum.
            </p>
            
            {/* Course Highlights */}
            <div className="mt-6 space-y-2 text-left w-full">
              <div className="flex items-center text-sm text-blue-200">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                8 Comprehensive Modules
              </div>
              <div className="flex items-center text-sm text-blue-200">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                AI-Powered Design Tools
              </div>
              <div className="flex items-center text-sm text-blue-200">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                Lifetime Access
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-3/5 w-full bg-white p-6 lg:p-8 flex flex-col justify-center">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Enroll Now</h2>
          
          {/* Price Display */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-2xl shadow-lg animate-pulse">
              <span className="text-3xl">$</span>10.00
            </div>
            <p className="text-sm text-gray-500 mt-2">Special Launch Price</p>
          </div>
          
          <p className="text-gray-600 mb-6 text-sm lg:text-base">Fill out the form below and we'll get back to you within a few hours</p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden fields for EmailJS template variables */}
            <input type="hidden" name="to_name" value={formData.to_name} />
            <input type="hidden" name="current_year" value={formData.current_year} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name" 
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" 
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City" 
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" 
                />
              </div>
              <div className="relative">
                <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 appearance-none"
                >
                  <option value="">Select Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="relative">
              <FaComments className="absolute left-3 top-3 text-gray-400" />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your interest in the course or any questions you have..." 
                required
                rows="4"
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 resize-none" 
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600 mb-6">You will receive an email in a few hours with further instructions.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 