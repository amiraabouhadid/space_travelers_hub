import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const missionsFetched = useSelector((state) => state.missions, shallowEqual);
  const dispatch = useDispatch();
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  useEffect(() => {
    setMissions(missionsFetched);
  }, [missionsFetched]);
  return (
    <div className="mx-8 my-8 px-5 py-5 text-left">
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> join mission</th>
          </tr>
        </thead>
        <tbody>

          {missions.map((mission) => (
            <tr key={mission.id}>
              <Mission
                description={mission.description}
                name={mission.name}
                id={mission.id}
              />
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Missions;
