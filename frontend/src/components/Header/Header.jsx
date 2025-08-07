import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bg-yellow-100 shadow py-2 border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Left text */}
            <div className="overflow-hidden whitespace-nowrap">
              <p className="inline-block animate-marquee text-sm font-medium text-gray-800 px-1 sm:text-xs">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>


            {/* Right links */}
            <ul className="flex max-sm:hidden items-center gap-4 text-sm font-medium text-gray-800">
              <li>
                <Link to="/help-center" className="hover:underline  ">Help Center</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

