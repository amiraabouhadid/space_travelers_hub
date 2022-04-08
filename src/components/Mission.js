import React from 'react';
import PropTypes from 'prop-types';
import MssionButton from './MissionButton';

const Mission = (props) => {
  const {
    mission,
  } = props;
  const { name, description } = mission;

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
        <MssionButton mission={mission} />
      </td>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
