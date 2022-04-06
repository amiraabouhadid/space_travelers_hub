import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getRockets } from './redux/rockets/rockets';
import { getMissions } from './redux/missions/missions';

import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const App = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>

        <Route exact path="/space_travelers_hub/" element={(<Rockets rockets={rockets} />)} />
        <Route
          path="/space_travelers_hub/missions"
          element={(
            <Missions
              missions={missions}
            />
          )}
        />

        <Route
          path="/space_travelers_hub/profile"
          element={(
            <Profile
              missions={missions}
              rockets={rockets}
            />
)}
        />
      </Routes>
    </Router>
  );
};

export default App;
