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
    try {
      NewTodos[TodoIndex].text = newTodo;
      NewTodos[TodoIndex].textEdit = true;
      saveTodos(NewTodos);
    } catch {
      Swal.fire('Esta tarea ya existe');
    }
  };

  const CompletedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const msgcompleted = confirm(
      'Pulsa canselar para descompletar\n o Pulsa Aceptar para completar la tarea ' +
        text
    );
    const NewTodos = [...todos];

    if (msgcompleted) {
      alert('¡Gracias por confirmar!');
      NewTodos[TodoIndex].completed = true;
    } else {
      alert('¡Haz denegado el mensaje!');
      NewTodos[TodoIndex].completed = false;
    }
    saveTodos(NewTodos);
  };

  const DelatedTodo = (text) => {
    const NewTodos = [...todos];
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Eliminar',
        text: `Deseas eliminar ${text}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'No, cancel',
        cancelButtonText: 'Eliminar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          NewTodos.splice(TodoIndex, 1);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );

          NewTodos[TodoIndex];
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
