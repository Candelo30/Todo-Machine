import React from 'react';
import './TodoCounter.css';

function TodoCounter({all, completed}) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {all} Tareas
    </h2>
  );
};

export { TodoCounter };