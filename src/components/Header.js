import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/icons/planet.png';

const Header = () => (
  <header className="w-11/12 flex justify-between items-center px-6 py-3 Header">
    <NavLink className="flex justify-between items-center" to="/">
      <img className="w-12 h-auto" src={logo} alt="planet-logo" />
      <span className="ml-4 text-2xl">Space Traveler&#39;s Hub</span>
    </NavLink>

    <nav className="flex items-center justify-end w-1/4">
      <NavLink className="pr-3 text-blue-600 NavLink" to="/rockets">Rockets</NavLink>
      <NavLink className="px-3 text-blue-600 NavLink" to="/missions">Missions</NavLink>
      <NavLink className="pl-3 text-blue-600 NavLink" to="/profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
