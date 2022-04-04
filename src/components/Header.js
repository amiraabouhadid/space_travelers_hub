import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/icons/planet.png';

const Header = () => (
  <header className="w-full flex justify-between items-center p-4">
    <NavLink to="/">
      <img className="w-1/2" src={logo} alt="planet-logo" />
      {' '}
      <span>Space Traveler&#39;s Hub</span>
    </NavLink>

    <nav>
      <NavLink to="/rockets">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
