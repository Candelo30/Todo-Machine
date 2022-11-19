import React, { useEffect } from 'react';
import './TodoItem.css';
import { BsCheckLg, BsXLg } from 'react-icons/bs';

function TodoItem(props) {
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    return `${hora}:${minuto}`;
  };
  return (
    <li className={`TodoItem ${props.completed && 'TodoItems-completed'}`}>
      <BsCheckLg
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsXLg className="Icon Icon-delete" onClick={props.onDelete} />
      <div className="">
        <h2>{ti()}</h2>
      </div>
    </li>
  );
}

export { TodoItem };
