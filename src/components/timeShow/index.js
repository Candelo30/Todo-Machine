import React from 'react';
import './timeShow.css';
import { FcClock } from 'react-icons/fc';

function Tick(props) {
  return (
    <div className="tick">
      <FcClock className="tick-icon__clock" />
      <h2>{props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export { Tick };
