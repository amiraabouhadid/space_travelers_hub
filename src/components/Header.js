import React from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/planet.png';

const Header = () => {
  const links = [
    { id: 1, path: '/', text: 'Rockets' },
    { id: 2, path: '/missions', text: 'Missions' },
    { id: 3, path: '/profile', text: 'My Profile' },
  ];
  return (
    <header className=" w-11/12  flex justify-between items-center px-6 py-3 Header">
      <NavLink className="flex justify-between items-center" to="/">
        <img className="w-12 h-auto" src={logo} alt="planet-logo" />
        <span className="ml-4 text-2xl">Space Traveler&#39;s Hub</span>
      </NavLink>

      <nav className="flex items-center justify-end w-1/4">
        {
          links.map((link) => (
            <NavLink key={link.id} className="px-3 text-blue-600 NavLink" to={link.path}>
              {link.text}
            </NavLink>
          ))
        }

      </nav>
    </header>
  );
};

export default Header;
