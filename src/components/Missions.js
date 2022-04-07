import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

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

export default Missions;
