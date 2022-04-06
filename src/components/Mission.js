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
        <span
          className={isReserved(mission) ? 'badge badge-primary bg-primary' : 'badge badge-secondary bg-secondary'}
        >
          {isReserved(mission) ? 'Active Member'.toUpperCase() : 'Not A member'.toUpperCase()}
        </span>
      </td>
      <td className="align-middle">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (isReserved(mission)) {
              return leaveMissionDispatch(id);
            }
            return joinMissionDispatch(id);
          }}
          type="submit"
          className={isReserved(mission) ? 'btn btn-danger border' : 'btn btn-light border'}
        >
          {isReserved(mission) ? 'Leave mission' : 'Join mission' }
        </button>
      </td>
    </>
  );
};
Mission.propTypes = {
  mission:
  PropTypes.instanceOf(Object).isRequired,

};
export default Mission;
