import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter() {
  const { countsTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {countsTodos} Tareas
    </h2>
  );
};

export { TodoCounter };