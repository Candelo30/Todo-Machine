import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter() {
  const { all, completed } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {all} Tareas
    </h2>
  );
};

export { TodoCounter };