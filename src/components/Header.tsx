import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-base-100 text-base-content border-b border-base-300">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/events.html">Events</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/get-involved.html">Get Involved</a></li>
              </ul>
            </div>
            <a href="/index.html" className="btn btn-ghost text-xl">EASF</a>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/events.html">Events</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/get-involved.html">Get Involved</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


