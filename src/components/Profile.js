import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions } = props;
  return (
    <div className="p-5 row">
      <div className="col-6">
        <h2>
          My Missions
        </h2>
        <div>
          {
        missions.filter((mission) => mission.reserved).map((mission) => (
          <p className="border p-3" key={mission.id}>{mission.name}</p>
        ))
        }
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
};
export default Profile;
