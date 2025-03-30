import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-semibold">Hackathon Mentor</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 ${location.pathname === '/' ? 'bg-blue-600' : ''}`}>HOME</Link>
            <Link
              to="/find-mentor"
              className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 ${location.pathname === '/find-mentor' ? 'text-blue-300' : ''}`}
            >
              FIND MENTOR
            </Link>
            <Link to="/hackathons" className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 ${location.pathname === '/hackathons' ? 'bg-blue-600' : ''}`}>HACKATHONS</Link>
            <Link to="/become-mentor" className={`bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 ${location.pathname === '/become-mentor' ? 'bg-blue-600' : ''}`}>BECOME A MENTOR</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Welcome, Rishabh</span>
                <button
                  onClick={logout}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="bg-yellow-500 text-black px-3 py-2 rounded-md hover:bg-yellow-600 transition duration-300">Login</Link>
                <Link to="/signup" className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
