import React from 'react';
import './TodoItem.css';
import {
  BsCheckLg,
  BsXLg,
  BsPencil,
  BsTrashFill,
  BsSave,
} from 'react-icons/bs';
import { TodoContext } from '../TodoContext';

function TodoItem(props) {
  const { UpdateaddTodo, newTodoValue, setNewTodoValue } =
    React.useContext(TodoContext);
  const [isedit, setIsedit] = React.useState(false);

  const handerClick = () => {
    setIsedit(true);
  };

  const handerClickcalse = () => {
    setIsedit(false);
  };

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    UpdateaddTodo(newTodoValue);
    event.preventDefault();
    setIsedit(false);
    setNewTodoValue('');
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
          <button type="submit" className="Icon Icon-save">
            <BsSave />
          </button>
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
