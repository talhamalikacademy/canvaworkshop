'use client'
import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
const Faqs = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    
    const faqs = [
        {
            question: "Who will them main instructor?",
            answer: "Talha Malik will the main instructor in most of the courses. In online classes may be there two or three teachers. He will teach you and guide you directly and support will available across the full course. "
        },
        {
            question: "Are certificates provided?",
            answer: "Yes, in the end of the course, we will provide you certificate of completion. The certificate will only for online class students. It will not available for course viewers."
        },
        {
            question: "How you can become a teacher on Talha Malik Academy?",
            answer: "Talha Malik Academy is offering you to become a teacher on it. It will amazing experience for you and yourself. Clear the test and become a profitable guider. Read the policies on Policy page."
        },
        {
            question: "How to buy the course?",
            answer: "Contact us on the given number (+92 330 5291256). We will provide you information about payement by which you can easily pay."
        },
        {
            question: "On which streaming platform we will see the courses?",
            answer: "You can see all the courses directly to YouTube because YouTube is a fast and perfect platform to stram across the world. It makes your experience amazing."
        }
    ];

    return (
        <div>{/* FAQ Section */}
            <div className="py-16 bg-black relative z-10">
                <div className="container mx-auto px-4 w-[87%]">
                    <h2
                        className="text-5xl font-bold text-center mb-12 text-white"
                    >
                        Frequently Asked <span className="text-blue-500">Questions</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-blue-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-black/30"
                            >
                                <button
                                    className="w-full px-8 py-5 text-left flex items-center justify-between bg-black/30 hover:bg-black/50 transition-all duration-300"
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <span className="font-semibold text-lg text-white">{faq.question}</span>
                                    <div
                                        className={`flex items-center justify-center w-8 h-8 rounded-full ${activeFaq === index ? 'bg-blue-500 text-white' : 'bg-gray-600'}`}
                                    >
                                        {activeFaq === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 py-6 bg-gradient-to-br from-black/20 to-black/10">
                                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="text-center mt-10"
                    >
                        <a href="/faq">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                                View All FAQs
                            </button>
                        </a>
                    </div>
                </div>
            </div></div>
    )
}

export default Faqs