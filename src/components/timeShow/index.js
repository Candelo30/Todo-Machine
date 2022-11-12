import React, { useEffect, useRef } from 'react';
import './timeShow.css';
import { FcClock } from 'react-icons/fc';

function Tick() {
  const h1 = useRef();
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);
  return (
    <div className="tick">
      <FcClock className="tick-icon__clock" />
      <h2 ref={h1}>{ti()}</h2>
    </div>
  );
}

export { Tick };
