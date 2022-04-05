import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getMissions } from './redux/missions/missions';
import { getRockets } from './redux/rockets/rockets';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const App = () => {
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
        <Route exact path="/" element={(<Rockets rockets={rockets} />)} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
