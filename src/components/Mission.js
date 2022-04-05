/* eslint-disable react/prop-types */
import React from 'react';

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
  return (
    <>
      <td className="font-bold">
        {name}
      </td>
      <td>
        {description}
      </td>
      <td className="align-middle">
        <button type="submit" className=" btn btn-primary">
          Not A member
        </button>
      </td>
      <td className="align-middle">
        {joinButton(mission)}
      </td>
    </>
  );
};
export default Mission;
