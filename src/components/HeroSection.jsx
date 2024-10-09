import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Ensure correct import
import heroImage from '../assets/heroimage.jpg';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative text-white py-20 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: 'fixed' }} 
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-600 opacity-70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          <Typewriter
            words={['Welcome to College Crew']} // Words to type
            loop={1} // Loop once
            cursor
            cursorStyle='_'
            typeSpeed={100} // Speed of typing
            deleteSpeed={50} // Speed of deleting
            delay={1500} // Delay before starting to delete
          />
        </h1>
        <p className="text-xl mb-8 max-w-xl mx-auto drop-shadow-md">
          Empowering students with <span className="font-semibold">Collaboration, Networking, Opportunities</span> tools to foster personal and professional growth.
        </p>
        <a 
          href="#about" 
          className="bg-white text-blue-500 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
