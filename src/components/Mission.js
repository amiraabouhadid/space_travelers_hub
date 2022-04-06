import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission, joinMissionFunc, leaveMissionFunc,
  } = props;
  const { id, name, description } = mission;

  const isReserved = (mission) => {
    if (mission.reserved) return true;
    return false;
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
              return leaveMissionFunc(id);
            }
            return joinMissionFunc(id);
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
  joinMissionFunc:
  PropTypes.instanceOf(Function).isRequired,
  leaveMissionFunc:
  PropTypes.instanceOf(Function).isRequired,
};
export default Mission;
