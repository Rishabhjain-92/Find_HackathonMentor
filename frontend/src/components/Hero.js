import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
            alt="People working together"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Your Hackathon Mentor
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Connect with top mentors to elevate your hackathon experience
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/find-mentors"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search for Mentors
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our platform to find mentoring, connect with industry experts, and elevate your hackathon goals
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Search for Mentors</h3>
                <p className="mt-2 text-base text-gray-600">
                  Find top mentors with expertise in various technologies and domains to guide your hackathon projects.
                </p>
                <div className="mt-4">
                  <Link
                    to="/find-mentors"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Find now
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Connect with Experts</h3>
                <p className="mt-2 text-base text-gray-600">
                  Engage with industry leaders and gain insights to advance your projects and skills.
                </p>
                <div className="mt-4">
                  <Link
                    to="/mentors"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
