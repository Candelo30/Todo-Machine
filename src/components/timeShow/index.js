import React from 'react';
import './timeShow';
import { FcClock } from 'react-icons/fc';

function Tick() {
  return (
    <div className="tick">
      <FcClock className="tick-icon__clock" />
      <h2>{new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(Tick, 1000);

export { Tick };
