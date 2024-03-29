import React from 'react';
import { useLocalstorage } from './useLocalstorage';
import Swal from 'sweetalert2';

const TodoContext = React.createContext(); // CreateContext es una herramienta de React que nos dara los Provaider y Consumer para compartir el estado con todos los componentes.

// Para compartir el estado de Provaider a Consumer creamos un puente

function TodoProvider(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalinfo, setOpenModalinfo] = React.useState(false);
  const [OpenModalcolor, setOpenModalcolor] = React.useState(false);
  const { todos, saveTodos, loading, error, setError } = useLocalstorage(
    'TODO_V1',
    []
  );

  const [color, setcolor] = React.useState('#0d47a1');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const countsTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  const [newTodo, setNewTodoValue] = React.useState('');
  const [newTodoValue, setNewTodoValues] = React.useState('');

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const Todotext = todo.text.toLowerCase();
      const Searchtext = searchValue.toLowerCase();
      return Todotext.includes(Searchtext);
    });
  }

  // Añadir

  const addTodo = (text) => {
    try {
      const NewTodos = [...todos];
      NewTodos.push({
        text,
        completed: false,
        textEdit: false,
      });
      saveTodos(NewTodos);
    } catch {
      Swal.fire('Upps', 'Esta tarea ya existe', 'error');
      setError(true);
      location.reload();
    }
  };

  // Actualizar

  const UpdateaddTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];
    try {
      if (newTodo === text) {
        throw Swal.fire.error(
          'Error al actualizar esta tarea por favor recarga la aplicación'
        );
      } else {
        NewTodos[TodoIndex].text = newTodo;
        NewTodos[TodoIndex].textEdit = true;
        saveTodos(NewTodos);
      }
    } catch {
      Swal.fire('Upps', '¡Ah habiado un error!', 'error');
      setError(true);
      location.reload();
    }
  };

  // Completar

  const CompletedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];
    let opcion = confirm("Deseas completar esta tarea");

    
    if (opcion == true) {
      alert("Tu tarea fue completada")
        NewTodos[TodoIndex].completed = true;
      } else {
        NewTodos[TodoIndex].completed = false;
      };
    saveTodos(NewTodos);
  };

  // Eliminar

  const DelatedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];
    let opcion = confirm("Deseas eliminar esta tarea");

    
    if (opcion == true) {
      alert("Tu tarea fue eliminada")
        NewTodos.splice(TodoIndex, 1);
     
      } else {
        alert("Acción denegada")
      }
    saveTodos(NewTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        countsTodos,
        completedTodos,
        UpdateaddTodo,
        searchValue,
        newTodo,
        setNewTodoValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        CompletedTodo,
        DelatedTodo,
        openModal,
        setOpenModal,
        color,
        setOpenModalcolor,
        OpenModalcolor,
        openModalinfo,
        setOpenModalinfo,
        setcolor,
        newTodoValue,
        setNewTodoValues,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
