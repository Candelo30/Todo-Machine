import React from 'react';
import './TodoItem.css';
import { BsCheckLg, BsXLg } from 'react-icons/bs';

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste el todo ' + props.text);
  };
  const onDelete = () => {
    alert('Borraste el todo ' + props.text);
  };

  return (
    <li className={`TodoItem ${props.completed && 'TodoItems-completed'}`}>
      <BsCheckLg
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
        onChange={onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsXLg className="Icon Icon-delete" onClick={onDelete} />
    </li>
  );
}

export { TodoItem };
