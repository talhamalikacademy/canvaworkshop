'use client';
import { useEffect } from 'react';

const Curriculum = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }
  }, []);

  const modules = [
    {
      icon: "🧩",
      title: "Module 1: Introduction to Canva",
      topics: [
        "What is Canva & Why Use It?",
        "Creating a Canva Account (Free vs Pro)",
        "Overview of the Canva Dashboard",
        "Understanding Canva&apos;s Workspace",
        "Basic Design Principles in Canva"
      ]
    },
    {
      icon: "🎨",
      title: "Module 2: Mastering Canva Tools",
      topics: [
        "Working with Templates",
        "Using Canva&apos;s Drag-and-Drop Interface",
        "Adding & Editing Text (Fonts, Effects, Hierarchy)",
        "Shapes, Icons & Illustrations",
        "Uploading & Managing Images and Videos",
        "Using Color Palettes and Custom Colors",
        "Layering & Grouping Elements"
      ]
    },
    {
      icon: "🖼️",
      title: "Module 3: Graphic Design Projects",
      topics: [
        "Designing a Social Media Post (Instagram/Facebook)",
        "Creating a YouTube Thumbnail (16:9 Ratio)",
        "Making a Logo in Canva",
        "Designing Posters and Flyers",
        "Creating Infographics Easily",
        "Business Cards & Letterheads"
      ]
    },
    {
      icon: "🎥",
      title: "Module 4: Canva for Content Creators",
      topics: [
        "Designing a YouTube Channel Banner",
        "Creating YouTube Video Intros/Outros",
        "Making Engaging Instagram Reels using Canva Video",
        "Designing Stories & Highlights Covers",
        "Thumbnails that Get Clicks (16:9 Thumbnail Tricks)"
      ]
    },
    {
      icon: "🗂️",
      title: "Module 5: Presentations and Documents",
      topics: [
        "Creating Stunning Presentations (PowerPoint Alternative)",
        "Using Canva&apos;s Slide Templates",
        "Pitch Decks, School Projects & Portfolios",
        "Creating Resumes and CVs"
      ]
    },
    {
      icon: "🔧",
      title: "Module 6: Advanced Canva Features",
      topics: [
        "Background Remover (Free Alternatives)",
        "Magic Resize Tool (One Design, Multiple Platforms)",
        "Canva AI Tools (Magic Write, Text to Image, Beat Sync)",
        "Using Canva Brand Kits",
        "Working with Charts & Data Visuals"
      ]
    },
    {
      icon: "🌐",
      title: "Module 7: Collaboration & Cloud Features",
      topics: [
        "Sharing and Collaborating with Others",
        "Commenting and Team Editing",
        "Publishing Directly to Social Media",
        "Scheduling Content (Canva Pro)"
      ]
    },
    {
      icon: "💼",
      title: "Module 8: Monetizing Canva Skills",
      topics: [
        "Freelancing with Canva (Fiverr, Upwork)",
        "Designing for Clients",
        "Creating Canva Templates to Sell",
        "Canva Affiliate Program",
        "Building a Design Portfolio"
      ]
    },
    {
      icon: "🏁",
      title: "Final Project & Certification Ideas",
      topics: [
        "Design a Full Branding Kit for a YouTube Channel",
        "Submit 3 Projects: Logo, Thumbnail, and Instagram Post",
        "Self-Evaluation Checklist",
        "Ideas for Getting Certified (Free Canva Courses + Alternatives)"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-white">Curriculum</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master Canva from basics to advanced techniques with our comprehensive 8-module curriculum designed for beginners and professionals alike.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Module Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Module Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {module.icon}
                  </div>
                </div>

                {/* Module Title */}
                <h3 className="relative z-10 text-xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {module.title}
                </h3>

                {/* Topics List */}
                <ul className="relative z-10 space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/30 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl">
            <div className="bg-gray-900 px-8 py-4 rounded-xl">
              <p className="text-white text-lg font-semibold">
                Ready to master Canva? Enroll now and get lifetime access to all modules!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum; 