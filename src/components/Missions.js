/* eslint-disable react/prop-types */
import React from 'react';
import Mission from './Mission';

const Missions = (props) => {
  const { missions, joinMissionDispatch, leaveMissionDispatch } = props;

  return (
    <div className="mx-8 my-8 px-5 py-5 text-left">
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>

          {missions.map((mission) => (
            <tr key={mission.id}>
              <Mission
                mission={mission}
                joinMissionFunc={joinMissionDispatch}
                leaveMissionFunc={leaveMissionDispatch}
              />
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Missions;
