import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">
          College Crew
        </div>
        <div className="flex space-x-6"> {/* Ensure the container is a flex container */}
          <a 
            href="#about" 
            className="text-white hover:text-teal-300 transition duration-300 relative group"
          >
            About
            <span className="block h-0.5 bg-teal-300 w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#features" 
            className="text-white hover:text-teal-300 transition duration-300 relative group"
          >
            Features
            <span className="block h-0.5 bg-teal-300 w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            className="text-white hover:text-teal-300 transition duration-300 relative group"
          >
            Testimonials
            <span className="block h-0.5 bg-teal-300 w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#newsletter" 
            className="text-white hover:text-teal-300 transition duration-300 relative group"
          >
            Newsletter
            <span className="block h-0.5 bg-teal-300 w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
