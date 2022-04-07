import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation as addRes, removeReservation as rmRes } from '../redux/rockets/rockets';
import '../css/Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const {
    description, image, name, id,
  } = rocket;

  const isReserved = (rocket) => {
    if (rocket.reserved) return true;
    return false;
  };

  const handleDispatch = () => (rocket.reserved ? dispatch(rmRes(id)) : dispatch(addRes(id)));

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
        {isReserved(rocket) && (
          <button
            onClick={handleDispatch}
            type="button"
            className="text-sm text-blue-500 bg-white border-1 border-blue-500 rounded-md p-2"
          >
            Cancel Reservation
          </button>
        )}
        {!isReserved(rocket) && (
          <button
            onClick={handleDispatch}
            type="button"
            className="text-sm border-1 border-blue-500 text-white bg-blue-500 rounded-md p-2"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
