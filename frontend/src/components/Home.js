import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
      {/* Hero Section */}
      <div className="bg-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            FIND YOUR MENTOR
          </h1>
          <h2 className="text-blue-500 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            HACKATHON MENTOR
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with experienced mentors who can guide you through your next hackathon project.
            Get personalized support and level up your skills.
          </p>
          <Link to="/find-mentor">
            <button className="mt-5 bg-blue-700 text-white font-bold py-3 px-6 rounded hover:bg-blue-800 transition duration-300">
              Find a Mentor
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Our Platform Section */}
      <div className="bg-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Why Choose Our Platform?</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-search text-blue-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">Expert Matching</h3>
                <p className="mt-2 text-gray-600">Find mentors that match your specific tech stack and project needs.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-rocket text-blue-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">Accelerate Growth</h3>
                <p className="mt-2 text-gray-600">Learn from experienced professionals and fast-track your development.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-users text-blue-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">Community Support</h3>
                <p className="mt-2 text-gray-600">Join a community of passionate developers and innovators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-check-circle text-purple-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">1. Browse Mentors</h3>
                <p className="mt-2 text-gray-600">Search through our curated list of experienced mentors.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-user-friends text-purple-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">2. Connect</h3>
                <p className="mt-2 text-gray-600">Schedule a session with your chosen mentor.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <i className="fas fa-lightbulb text-purple-500 text-2xl mb-2"></i>
                <h3 className="text-xl font-bold text-gray-900">3. Learn & Grow</h3>
                <p className="mt-2 text-gray-600">Get guidance and level up your skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Mentors Section */}
      <section className="bg-red-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Featured Mentors</h2>
          <p className="mt-4 text-lg text-gray-600 text-center">Learn from industry experts who are passionate about helping others succeed.</p>
          <p className="mt-2 text-lg text-gray-600 text-center">Our mentors are dedicated to guiding you on your journey to success and helping you achieve your goals.</p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Johnson" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Full-stack developer passionate about mentoring.</p>
              <p className="mt-2 text-blue-600 font-bold">React, Node.js, MongoDB</p>
              <Link to="/mentor/1" className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded">View Profile</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lisa Wang" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Lisa Wang</h3>
              <p className="text-gray-600">AI researcher helping others break into ML.</p>
              <p className="mt-2 text-blue-600 font-bold">Data Science, Python, TensorFlow</p>
              <Link to="/mentor/2" className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded">View Profile</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Maria Garcia" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Maria Garcia</h3>
              <p className="text-gray-600">Senior architect specializing in scalable systems.</p>
              <p className="mt-2 text-blue-600 font-bold">System Design, Java, Spring</p>
              <Link to="/mentor/3" className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded">View Profile</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Upcoming Hackathons</h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">Find hackathons where you can make an impact as a mentor.</p>
          <div className="mt-10 flex space-x-4">
            <input type="text" placeholder="Search hackathons..." className="border border-gray-300 rounded-md p-2 w-full sm:w-1/3" />
            <select className="border border-gray-300 rounded-md p-2 w-1/3">
              <option value="all">All Modes</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <select className="border border-gray-300 rounded-md p-2 w-1/3">
              <option value="latest">Sort by Date</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="mt-8">
            <div className=" p-10">
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img src="https://th.bing.com/th/id/OIP.T0Jv-w8HqlkW8HSRic8e3AHaEO?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="TechCrunch Disrupt Hackathon" className="w-full h-32 rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">AI for Good Hackathon</h3>
                  <p className="mt-2 text-gray-600">A global event where developers come together to solve challenges.</p>
                  <p className="mt-2 text-gray-600">Date: 5/10/2025</p>
                  <p className="mt-2 text-gray-600">Location: Online</p>
                  <div className="mt-4 text-center">
                    <Link to="/hackathon-details" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">View Details</Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHRlY2hjdW5nfGVufDB8fHx8MTYxNjY5MjQwNzg3NTA0ODc2Mg&ixlib=rb-1.2.1&q=80&w=1080" alt="TechCrunch Disrupt Hackathon" className="w-full h-32 rounded-md mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">TechCrunch Disrupt Hackathon</h3>
                  <p className="mt-2 text-gray-600">Join the world's leading hackathon for startups and innovators.</p>
                  <p className="mt-2 text-gray-600">Date: 3/15/2025</p>
                  <p className="mt-2 text-gray-600">Location: San Francisco, CA</p>
                  <div className="mt-4 text-center">
                    <Link to="/hackathon-details" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">View Details</Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHRlY2hjdW5nfGVufDB8fHx8MTYxNjY5MjQwNzg3NTA0ODc2Mg&ixlib=rb-1.2.1&q=80&w=1080" alt="TechCrunch Disrupt Hackathon" className="w-full h-32 rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">AI for Good Hackathon</h3>
                  <p className="mt-2 text-gray-600">Collaborate with experts to create AI solutions for social good.</p>
                  <p className="mt-2 text-gray-600">Date: 4/20/2025</p>
                  <p className="mt-2 text-gray-600">Location: New York, NY</p>
                  <div className="mt-4 text-center">
                    <Link to="/hackathon-details" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-b from-orange-100 to-orange-200 p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Ready to Start Your Journey?</h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Join your community and take your hackathon projects to the next level.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link to="http://localhost:3000/signup" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300">Sign Up Now</Link>
          <Link to="/find-mentor" className="bg-white text-orange-600 border border-orange-600 px-6 py-3 rounded-lg hover:bg-orange-100 transition duration-300">Browse Mentors</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
