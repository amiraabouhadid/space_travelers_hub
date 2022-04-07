import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions, rockets } = props;

  const displayer = (container, message) => {
    const displayble = container.filter((content) => content.reserved);
    let displayed;

    if (displayble.length > 0) {
      displayed = displayble.map((item) => (
        <tr key={item.id}>
          <td className="p-3">
            {item.name}
          </td>
        </tr>
      ));
    } else {
      displayed = (
        <tr>
          <td className="p-3 italic">
            {message}
          </td>
        </tr>
      );
    }

    return displayed;
  };

  return (
    <div className="p-5 row">
      <div className="col-6">
        <h2>
          My Missions
        </h2>
        <table className="table table-hover table-bordered">
          <tbody>
            {displayer(missions, 'No missions joined')}
          </tbody>
        </table>
      </div>
      <div className="col-6">
        <h2>
          My Rockets
        </h2>
        <table className="table table-hover table-bordered">
          <tbody>
            {displayer(rockets, 'No rockets reserved')}
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
