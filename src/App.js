import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/missions/missions';
import { getRockets } from './redux/rockets/rockets';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    dispatch(getRockets());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
