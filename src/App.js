import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getMissions, joinMission, leaveMission } from './redux/missions/missions';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const App = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const joinMissionDispatch = (id) => {
    dispatch(joinMission(id));
  };
  const leaveMissionDispatch = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route
          path="/missions"
          element={(
            <Missions
              missions={missions}
              joinMissionDispatch={joinMissionDispatch}
              leaveMissionDispatch={leaveMissionDispatch}
            />
          )}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
