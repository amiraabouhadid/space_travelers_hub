import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Rocket from './Rocket';
import '../css/Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  return (
    <main className="w-11/12 flex flex-col items-center p-8 gap-4 rockets-section">
      {rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </main>
  );
};

export default Rockets;
