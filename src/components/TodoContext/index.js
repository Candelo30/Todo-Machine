import React from 'react';
import { useLocalstorage } from './useLocalstorage';

const TodoContext = React.createContext(); // CreateContext es una herramienta de React que nos dara los Provaider y Consumer para compartir el estado con todos los componentes.

// Para compartir el estado de Provaider a Consumer creamos un puente

function TodoProvider(props) {
  const { todos, saveTodos, loading, error } = useLocalstorage('TODO_V1', []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const countsTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');

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

  const CompletedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const msgcompleted = confirm(
      'Deseas completar o descompletar ' + text + '?'
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
    const TodoIndex = todos.findIndex((todo) => todo.text === text);
    const msgdelate = confirm('¿Deseas eliminar ' + text + '?');
    const NewTodos = [...todos];

    if (msgdelate) {
      alert('¡Gracias por confirmar!');
      NewTodos.splice(TodoIndex, 1);
    } else {
      alert('¡Haz denegado el mensaje!');
      NewTodos[TodoIndex];
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
        searchValue,
        setSearchValue,
        searchedTodos,
        CompletedTodo,
        DelatedTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
