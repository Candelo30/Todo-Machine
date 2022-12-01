import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const { newTodoValue, setNewTodoValues, addTodo, setOpenModal, color } =
    React.useContext(TodoContext);

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValues(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValues('');
  };

  const Appstyle = {
    boxShadow: `0px 2px  10px ${color}`,
    border: ` 2px solid ${color}`,
  };

  const Appstylebuttonprimary = {
    backgroundColor: color,
  };

  const AppstyleSecondary = {
    backgroundColor: color,
    transition: 'background-color 0.5s ease-in',
    opacity: 0.3,
  };

  return (
    <form onSubmit={onSubmit} style={Appstyle}>
      <label>¿Qué tarea quieres Realizar?</label>
      <textarea
        required
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ej: Salir a caminar"
        style={Appstyle}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          style={AppstyleSecondary}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          style={Appstylebuttonprimary}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
