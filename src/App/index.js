import React from 'react';
import { AppUI } from './AppUI';
const AllTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
  { text: 'Estudiar todos los días React', completed: false },
  { text: 'Aprender todos los días algo nuevo', completed: true },
  { text: 'Saludar a todos', completed: false },
];

function App() {
  const [todos, setCountTodos] = React.useState(AllTodos);

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

    const NewTodos = [...todos];
    NewTodos[TodoIndex].completed = true;
    setCountTodos(NewTodos);
  };

  const DelatedTodo = (text) => {
    const TodoIndex = todos.findIndex((todo) => todo.text === text);

    const NewTodos = [...todos];
    NewTodos.splice(TodoIndex, 1);
    setCountTodos(NewTodos);
  };

  return (
    <AppUI
      countsTodos={countsTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      CompletedTodo={CompletedTodo}
      DelatedTodo={DelatedTodo}
    />
  );
}

export default App;
