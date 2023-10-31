import React from 'react';

const Greeting = ({ greeting }) => {
  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
