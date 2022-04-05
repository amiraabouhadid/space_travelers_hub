import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission, joinMissionFunc, leaveMissionFunc,
  } = props;
  const { id, name, description } = mission;
  const joinButton = (mission) => {
    if (mission.reserved) {
      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            leaveMissionFunc(id);
          }}
          type="submit"
          className=" btn btn-danger border"
        >
          Leave mission
        </button>
      );
    }
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          joinMissionFunc(id);
        }}
        type="submit"
        className=" btn btn-light border"
      >
        Join mission
      </button>

    );
  };
  const statusBadge = (mission) => {
    if (mission.reserved) {
      return (
        <span
          className="badge badge-primary bg-primary"
        >
          {'Active Member'.toUpperCase()}
        </span>
      );
    }
    return (
      <span
        className="badge badge-secondary bg-secondary"
      >
        {'Not A member'.toUpperCase()}
      </span>

    );
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
        {statusBadge(mission)}
      </td>
      <td className="align-middle">
        {joinButton(mission)}
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
