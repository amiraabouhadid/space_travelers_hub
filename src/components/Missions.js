import React from 'react';
import PropTypes from 'prop-types';
import Mission from './Mission';

const Missions = (props) => {
  const { missions } = props;

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
              />
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
Missions.propTypes = {
  missions:
  PropTypes.instanceOf(Array).isRequired,
};
export default Missions;
