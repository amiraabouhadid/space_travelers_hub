import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './Rocket';
import '../css/Rockets.css';

const Rockets = ({ rockets }) => (
  <main className="w-11/12 flex flex-col items-center p-8 gap-4 rockets-section">
    {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
  </main>
);

Rockets.propTypes = {
  rockets: PropTypes.instanceOf(Object).isRequired,
};

export default Rockets;
