import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MssionButton = ({ mission }) => {
  const dispatch = useDispatch();

  const { id } = mission;

  const isReserved = (mission) => {
    if (mission.reserved) return true;
    return false;
  };
  const joinMissionDispatch = (id) => {
    dispatch(joinMission(id));
  };
  const leaveMissionDispatch = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      {isReserved(mission) && (
      <button
        onClick={(e) => {
          e.preventDefault();
          return leaveMissionDispatch(id);
        }}
        type="submit"
        className="btn btn-danger border"
      >
        Leave mission
      </button>
      )}
      {!isReserved(mission) && (
      <button
        onClick={(e) => {
          e.preventDefault();
          return joinMissionDispatch(id);
        }}
        type="submit"
        className="btn btn-light border"
      >
        Join mission
      </button>
      )}
    </>
  );
};

MssionButton.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default MssionButton;
