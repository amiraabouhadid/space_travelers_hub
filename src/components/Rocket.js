import React from 'react';
import PropTypes from 'prop-types';
import '../css/Rocket.css';

const Rocket = ({ rocket }) => {
  const {
    description, image, name, reserved,
  } = rocket;

  return (
    <div className="flex items-center w-full gap-4 rocket-container">
      <img className="rocket-image" src={image} alt={name} />
      <div>
        <h2 className="text-2xl">{name}</h2>
        <p>{description}</p>
        <button className="text-md text-white bg-blue-500 rounded-md p-2" type="button">
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
