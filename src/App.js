import React from 'react';
import { TodoCounter } from './components/TodoCounter/';
import { Header } from './components/header/';
import { TodoSearch } from './components/TodoSearch/';
import { TodoList } from './components/TodoList/';
import { TodoItem } from './components/TodoItem/';
import { CreateTodoButton } from './components/CreateTodoButton/';
import { Illustrations } from './components/illustrations/illustrations.js';
import './style.css';
import './normalize.css';

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
    <React.Fragment>
      <Header />
      <div className="main-box">
        <div className="wrapper">
          <Illustrations />
        </div>
        <div className="main">
          <TodoCounter all={countsTodos} completed={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => CompletedTodo(todo.text)}
                onDelete={() => DelatedTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </div>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
