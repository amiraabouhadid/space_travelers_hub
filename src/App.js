import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getRockets } from './redux/rockets/rockets';

import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const App = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets, shallowEqual);
  const missions = useSelector((state) => state.missions, shallowEqual);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>

        <Route exact path="/space_travelers_hub/" element={(<Rockets rockets={rockets} />)} />
        <Route path="/space_travelers_hub/missions" element={<Missions />} />
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
