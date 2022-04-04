import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/icons/planet.png';

const Header = () => (
  <header className="w-11/12 flex justify-between items-center px-2 py-4 Header">
    <NavLink className="flex justify-between items-center" to="/">
      <img className="w-12 h-auto" src={logo} alt="planet-logo" />
      <span className="ml-4 text-2xl">Space Traveler&#39;s Hub</span>
    </NavLink>

    <nav className="flex items-center justify-between w-1/5">
      <NavLink className="pr-2 text-blue-600 NavLink" to="/rockets">Rockets</NavLink>
      <NavLink className="px-2 text-blue-600 NavLink" to="/missions">Missions</NavLink>
      <NavLink className="pl-2 text-blue-600 NavLink" to="/profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
