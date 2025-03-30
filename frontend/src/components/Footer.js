import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">HackMentor</span>
            <p className="mt-2 text-gray-300">
              Connecting passionate mentors with aspiring hackathon participants.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/become-mentor" className="text-base text-gray-300 hover:text-white">
                  Become a Mentor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:support@hackmentor.com" className="text-base text-gray-300 hover:text-white">
                  support@hackmentor.com
                </a>
              </li>
              <li className="text-base text-gray-300">
                Follow us on Twitter
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} HackMentor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
