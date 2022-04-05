import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  return (
    <main>
      {rockets}
    </main>
  );
};

export default Rockets;
