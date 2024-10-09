import React from 'react';
import { FaUsers, FaClipboardList, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl text-teal-500 mb-4" />,
      title: "Networking Opportunities",
      description: "Connect with alumni and peers to build professional relationships and expand your network.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-teal-500 mb-4" />,
      title: "Collaboration Tools",
      description: "Work together on projects, share ideas, and collaborate effectively with fellow students and alumni.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-teal-500 mb-4" />,
      title: "Career Development",
      description: "Access resources and mentorship to help you grow your career and succeed in your professional journey.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-teal-500 mb-4" />,
      title: "Event Management",
      description: "Stay updated with upcoming events, workshops, and seminars to enhance your learning experience.",
    },
  ];

  return (
    <section 
      id="features" 
      className="py-20 relative overflow-hidden group" // Added 'group' class
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-50 transition-opacity duration-300 group-hover:opacity-70"></div> {/* Adjusted opacity */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-teal-600">Our Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the various features designed to enhance your college experience and support your professional growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg 
                         transition-transform duration-300 transform 
                         hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
