import React from 'react';
import Lottie from 'lottie-react'; // Import the Lottie component
import animationData from '../assets/ani2.json'; // Replace with your actual JSON file path

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-20 relative overflow-hidden group flex items-center" 
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-gray-300 opacity-50 transition-opacity duration-300 group-hover:opacity-70"></div> 

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center"> 
        {/* Testimonials Content on the left */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">What Our Alumni Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
            {/* Existing Testimonials */}
            <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg italic mb-4">"College Crew helped me connect with industry leaders and find a great job right after graduation!"</p>
              <h4 className="font-bold text-blue-800">John Doe, Class of 2020</h4>
            </div>
            <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg italic mb-4">"The platform is easy to use and has been a valuable resource for staying engaged with my alma mater."</p>
              <h4 className="font-bold text-blue-800">Jane Smith, Class of 2018</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> 
            <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg italic mb-4">"Reconnecting with my college friends and attending meetups has been a great experience!"</p>
              <h4 className="font-bold text-blue-800">Michael Johnson, Class of 2015</h4>
            </div>
            <div className="testimonial-card p-6 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <p className="text-lg italic mb-4">"The networking opportunities offered by College Crew are invaluable. I found my current job through an alumnus!"</p>
              <h4 className="font-bold text-blue-800">Emily Davis, Class of 2021</h4>
            </div>
          </div>
        </div>

        {/* Lottie Animation on the right */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Lottie animationData={animationData} loop={true} style={{ width: 600, height: 600 }} />
        </div>
      </div>

      {/* Gradient border effect */}
      <div className="absolute inset-0 border-8 border-transparent rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-border" />
    </section>
  );
};

export default TestimonialsSection;
