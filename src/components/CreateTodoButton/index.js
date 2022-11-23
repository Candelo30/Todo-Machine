import React from 'react';
import './CreateTodoButton.css';

import { TodoContext } from '../TodoContext';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  const { color } = React.useContext(TodoContext);

  const Appstyle = {
    backgroundColor: color,
    boxShadow: `0px 5px  25px ${color}`,
  };

  return (
    <button
      style={Appstyle}
      title="Añadir tarea"
      className="CreateTodoButton"
      onClick={() => onClickButton()}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
