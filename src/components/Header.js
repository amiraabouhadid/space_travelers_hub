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
    <header className="w-11/12 flex justify-between items-center px-6 py-3 Header">
      <NavLink
        style={{ textDecoration: 'none' }}
        className="flex justify-between items-center"
        to="/"
      >
        <img className="w-10" src={logo} alt="planet-logo" />
        <h2 className="ml-4 text-dark ">Space Traveler&#39;s Hub</h2>
      </NavLink>

      <nav className="flex items-center justify-end ">
        {
          links.map((link) => (
            <NavLink
              key={link.id}
              className="px-3 text-blue-600 NavLink"
              to={link.path}
              style={{ textDecoration: 'none' }}
            >
              {link.text}
            </NavLink>
          ))
        }
      </nav>
    </header>
  );
};

export default Header;
