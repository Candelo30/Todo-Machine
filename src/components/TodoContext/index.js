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

  // Función para añadir un nuevo TODO
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
      alert('Este tarea ya existe');
      setError(true);
    }
  };

  // Función para añadir un nuevo TODO
  const UpdateaddTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];
    if (newTodo === text) {
      Swal.fire('Upps', 'Esta tarea ya existe', 'error');
    } else {
      NewTodos[TodoIndex].text = newTodo;
      NewTodos[TodoIndex].textEdit = true;
      saveTodos(NewTodos);
    }
  };

  const CompletedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];

    Swal.fire({
      title: 'Advertencia',
      text: `Estas seguro que deseas completar ${text}`,
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Completar',
      confirmButtonColor: `${color}`,
      denyButtonText: 'Descompletar',
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire('Exito', `Tu tarea ${text} a sido completada`, 'success');
        NewTodos[TodoIndex].completed = true;
      } else if (response.isDenied) {
        Swal.fire(
          'Información',
          `Tu tarea ${text} a sido Descompletada`,
          'info'
        );
        NewTodos[TodoIndex].completed = false;
      } else {
        Swal.fire('Upss', 'Ha ocurrido un error', 'error');
      }
    });
    saveTodos(NewTodos);
  };

  const DelatedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const NewTodos = [...todos];
    Swal.fire({
      title: 'Advertencia',
      text: `Estas seguro que quieres eliminar ${text}`,
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: `${color}`,
      denyButtonText: 'Cancelar',
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire('Exito', `Tu tarea ${text} a sido eliminada`, 'success');
        NewTodos.splice(TodoIndex, 1);
      } else if (response.isDenied) {
        Swal.fire('Información', 'Has denegado esta acción', 'info');
        NewTodos[TodoIndex];
      } else {
        Swal.fire('Upss', 'Ha ocurrido un error', 'error');
      }
    });
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
