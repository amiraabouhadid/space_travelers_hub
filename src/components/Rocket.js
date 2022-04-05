import React from 'react';
import PropTypes from 'prop-types';
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
        <p className="text-md">{description}</p>
        <button className="text-sm text-white bg-blue-500 rounded-md p-2" type="button">
          {isReserved(rocket) ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
