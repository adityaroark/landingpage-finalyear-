import React from 'react';
import Lottie from 'lottie-react'; // Import the Lottie component
import animationData from '../assets/ani1.json'; // Replace with your actual JSON file path

const AboutSection = () => {
  return (
    <section id='about' className="py-12 relative overflow-hidden group flex items-center"> {/* Added flex class */}
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-blue-200 opacity-50 transition-opacity duration-300 group-hover:opacity-70"></div> {/* Light gradient */}
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center"> {/* Use flex for column/row layout */}
        
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-gray-800"> {/* Left section for text */}
          <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">About College Crew</h2>

          <p className="text-center lg:text-left text-lg mb-6">
            College Crew bridges the gap between alumni and current students, fostering connections and professional development.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">Our Mission</h3>
          <p className="text-center lg:text-left mb-6">
            To empower alumni and students by providing a platform for connection, collaboration, and growth.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">Benefits of Joining:</h3>
          <ul className="list-disc list-inside mb-6 text-center lg:text-left">
            <li className="mb-2">📚 Access to a diverse alumni network.</li>
            <li className="mb-2">🤝 Collaboration on projects and initiatives.</li>
            <li className="mb-2">🎉 Invitations to exclusive events and workshops.</li>
            <li className="mb-2">💼 Job postings tailored for members.</li>
          </ul>

          <div className="text-center lg:text-left">
            <a href="#" className="text-pink-600 underline hover:text-pink-400 transition duration-300">Read More</a> {/* Updated link color */}
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end"> {/* Right section for animation */}
          <Lottie animationData={animationData} loop={true} style={{ width: 500, height: 500 }} /> {/* Adjust size as needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
