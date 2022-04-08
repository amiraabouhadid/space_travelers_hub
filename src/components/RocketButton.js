import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation as addRes, removeReservation as rmRes } from '../redux/rockets/rockets';

const RocketButton = ({ rocket }) => {
  const dispatch = useDispatch();

  const { id } = rocket;

  const isReserved = (rocket) => {
    if (rocket.reserved) return true;
    return false;
  };

  const handleDispatch = () => (rocket.reserved ? dispatch(rmRes(id)) : dispatch(addRes(id)));

  return (
    <>
      {isReserved(rocket) && (
        <button
          onClick={handleDispatch}
          type="button"
          className="text-sm text-blue-500 bg-white border-1 border-blue-500 rounded p-2"
        >
          Cancel Reservation
        </button>
      )}
      {!isReserved(rocket) && (
        <button
          onClick={handleDispatch}
          type="button"
          className="text-sm border-1 border-blue-500 text-white bg-blue-500 rounded p-2"
        >
          Reserve Rocket
        </button>
      )}
    </>
  );
};

RocketButton.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default RocketButton;
