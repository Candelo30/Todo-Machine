import React from 'react';
import './TodoItem.css';
import { BsCheckLg, BsXLg, BsPencil, BsTrashFill } from 'react-icons/bs';
import { TodoContext } from '../TodoContext';

function TodoItem(props) {
  const { updateTodos } = React.useContext(TodoContext);
  const [isedit, setIsedit] = React.useState(false);

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const handerClick = () => {
    setIsedit(true);
  };

  const handerClickcalse = () => {
    setIsedit(false);
  };

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    updateTodos(newTodoValue);
    event.preventDefault();
    setIsedit(false);
  };

  return (
    <li className={`TodoItem ${props.completed && 'TodoItems-completed'}`}>
      <BsCheckLg
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      {isedit ? (
        <form className="form-item" onSubmit={onSubmit}>
          <input type="text" className="input-edit" onChange={onChange} />
          <input type="submit" onSubmit={onSubmit} />
        </form>
      ) : (
        <p
          className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
          {props.text}
        </p>
      )}
      <BsTrashFill className="Icon Icon-delete" onClick={props.onDelete} />
      {isedit ? (
        <BsXLg className="Icon Icon-cansel" onClick={handerClickcalse} />
      ) : (
        <BsPencil className="Icon Icon-edit" onClick={handerClick} />
      )}
    </li>
  );
}

export { TodoItem };
