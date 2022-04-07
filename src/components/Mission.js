import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    mission,
  } = props;
  const { id, name, description } = mission;

  const isReserved = (mission) => {
    if (mission.reserved) return true;
    return false;
  };
  const dispatch = useDispatch();
  const joinMissionDispatch = (id) => {
    dispatch(joinMission(id));
  };
  const leaveMissionDispatch = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <>
      <td className="font-bold">
        {name}
      </td>
      <td>
        {description}
      </td>
      <td className="align-middle">
        {isReserved(mission) && (
          <span className="badge badge-primary bg-primary">
            {'Active Member'.toUpperCase()}
          </span>
        )}
        {!isReserved(mission) && (
          <span className="badge badge-secondary bg-secondary">
            {'Not A member'.toUpperCase()}
          </span>
        )}
      </td>
      <td className="align-middle">
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
      </td>
    </>
  );
};

Mission.propTypes = {
  mission:
  PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
