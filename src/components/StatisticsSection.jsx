import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="statistics py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Community in Numbers</h2>
        <div className="flex justify-around">
          <div className="stat-item">
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p>Registered Alumni</p>
          </div>
          <div className="stat-item">
            <h3 className="text-3xl font-bold">200+</h3>
            <p>Events Hosted</p>
          </div>
          <div className="stat-item">
            <h3 className="text-3xl font-bold">1,000+/</h3>
            <p>Mentorships Offered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
