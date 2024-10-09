import React from 'react';

const NewsletterSection = () => {
  return (
    <section id='newsletter' className="newsletter py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8">Subscribe to our newsletter for the latest updates and news about College Crew.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-1/3 rounded-l-lg border border-gray-300"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
