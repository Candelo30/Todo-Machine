import React from 'react';
import Button from 'react-bootstrap/Button';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      title="Añadir tarea"
      className="CreateTodoButton"
      onClick={() => onClickButton()}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
