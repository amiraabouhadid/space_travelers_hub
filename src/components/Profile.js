import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions, rockets } = props;
  return (
    <div className="p-5 row">
      <div className="col-6">
        <h2>
          My Missions
        </h2>
        <table className="table table-hover table-bordered">
          <tbody>
            {
        missions.filter((mission) => mission.reserved).map((mission) => (
          <tr key={mission.id}>
            <td className="p-3">
              {mission.name}
            </td>
          </tr>
        ))
        }
          </tbody>
        </table>
      </div>
      <div className="col-6">
        <h2>
          My Rockets
        </h2>
        <table className="table table-hover table-bordered">
          <tbody>
            {
              rockets.filter((rocket) => rocket.reserved).map((rocket) => (
                <tr key={rocket.id}>
                  <td className="p-3">
                    {rocket.name}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

Profile.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
  rockets: PropTypes.instanceOf(Array).isRequired,
};

export default Profile;
