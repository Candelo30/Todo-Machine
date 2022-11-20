import React from 'react';
import './TodoItem.css';
import { BsCheckLg, BsXLg, BsPencil, BsTrashFill } from 'react-icons/bs';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && 'TodoItems-completed'}`}>
      <BsCheckLg
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsTrashFill className="Icon Icon-delete" onClick={props.onDelete} />
      {<BsPencil className="Icon Icon-edit" /> ? (
        <BsPencil className="Icon Icon-edit" />
      ) : (
        <BsXLg className="Icon Icon-cansel" />
      )}
    </li>
  );
}

export { TodoItem };
