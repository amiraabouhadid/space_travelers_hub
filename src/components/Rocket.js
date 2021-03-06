import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';
import '../css/Rocket.css';

const Rocket = ({ rocket }) => {
  const {
    description, image, name,
  } = rocket;

  const isReserved = (rocket) => {
    if (rocket.reserved) return true;
    return false;
  };

  return (
    <div className="flex items-center w-full gap-4 rocket-container">
      <img className="rocket-image" src={image} alt={name} />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-md">
          {isReserved(rocket) && (
            <span className="bg-blue-400 text-white text-xs p-1 text-center mr-2 rounded-md">Reserved</span>
          )}
          {description}
        </p>
        <RocketButton rocket={rocket} />
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
