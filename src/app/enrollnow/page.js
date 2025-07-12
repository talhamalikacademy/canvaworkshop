"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaLock, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaRegCreditCard, FaChevronDown, FaPlus, FaUser, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

export default function EnrollNowPage() {
  const [showStripe, setShowStripe] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-5xl bg-white/95 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200/30">
        {/* Left Section - Course Info */}
        <div className="lg:w-2/5 w-full bg-gradient-to-br from-blue-800 via-purple-800 to-blue-700 p-6 lg:p-8 flex flex-col justify-center text-white">
          <div className="w-full flex flex-col items-center text-center">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Ultimate Canva Workshop
            </h1>
            <div className="text-base lg:text-lg font-medium text-blue-200 mb-4">By Talha Malik Academy</div>
            <div className="text-3xl lg:text-4xl font-black text-white mb-6">$189</div>
            
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

        {/* Right Section - Payment */}
        <div className="lg:w-3/5 w-full bg-white p-6 lg:p-8 flex flex-col justify-center">
          {!showStripe ? (
            <>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Complete Your Purchase</h2>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">Secure checkout for the Ultimate Canva Workshop</p>
              
              <div className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-200">
                <div className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <FaUser className="text-blue-500" /> Billing Information
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" />
                    <input type="email" placeholder="Email Address" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-300 px-3">
                      <span className="text-gray-700 font-medium pr-2">+92</span>
                      <input type="tel" placeholder="Phone Number" className="flex-1 py-2.5 bg-transparent outline-none text-gray-700" />
                    </div>
                    <input type="text" placeholder="Zip Code" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" />
                  </div>
                  
                  <div className="mt-3">
                    <button type="button" className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:underline" onClick={() => setShowCoupon(v => !v)}>
                      <FaTag className="text-blue-500" /> Have a coupon? <FaPlus className={`transition-transform duration-200 ${showCoupon ? 'rotate-45' : ''}`} />
                    </button>
                    {showCoupon && (
                      <input type="text" placeholder="Enter coupon code" className="mt-2 w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" />
                    )}
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="text-sm font-semibold text-gray-700 mb-2">Order Summary</div>
                <div className="text-base font-bold text-gray-800 mb-3">Ultimate Canva Workshop: Transform Your Creativity To Modern Designs</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="text-xl font-bold text-blue-700">$189.00</span>
                </div>
              </div>

              <button 
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                onClick={() => setShowStripe(true)}
              >
                Proceed to Payment - $189.00
              </button>
            </>
          ) : (
            <div className="w-full">
              {/* Stripe Header */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-800 to-purple-800 py-3 px-4 rounded-t-xl mb-4">
                <button onClick={() => setShowStripe(false)} className="text-white text-lg">
                  <FaArrowLeft />
                </button>
                <span className="text-white font-semibold">Secure Payment</span>
              </div>

              {/* Payment Methods */}
              <div className="flex gap-2 mb-4">
                <button className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow border border-blue-500 flex items-center justify-center gap-2">
                  <FaRegCreditCard /> Card
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-white text-gray-700 font-semibold text-sm shadow border border-gray-300 flex items-center justify-center gap-2">
                  Bank <span className="bg-blue-100 text-blue-700 rounded px-1 text-xs">5% off</span>
                </button>
                <button className="flex-1 py-2 px-3 rounded-lg bg-white text-gray-700 font-semibold text-sm shadow border border-gray-300 flex items-center justify-center">
                  AmazonPay
                </button>
              </div>

              {/* Secure Checkout */}
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm mb-4">
                <FaLock className="text-blue-500" /> Secure checkout with Link <FaChevronDown />
              </div>

              {/* Card Form */}
              <form className="space-y-4">
                <div className="relative">
                  <input type="text" placeholder="1234 1234 1234 1234" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 pr-20" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 text-lg text-gray-400">
                    <FaCcVisa /> <FaCcMastercard /> <FaCcAmex />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM / YY" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700" />
                  <div className="relative">
                    <input type="text" placeholder="CVC" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 pr-10" />
                    <FaRegCreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div className="relative">
                  <select className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 appearance-none">
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Complete Payment - $189.00
                </button>
              </form>

              <div className="mt-6 text-center text-gray-500 text-xs">
                Powered by <span className="font-semibold text-blue-600">Stripe</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 