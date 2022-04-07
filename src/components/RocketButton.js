import React from 'react';
import PropTypes from 'prop-types';

const RocketButton = (props) => {
  const { rocket, isReserved, handleDispatch } = props;

  return (
    <>
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
    </>
  );
};

RocketButton.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  isReserved: PropTypes.func.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default RocketButton;
