import React from 'react';
import { TodoCounter } from '../components/TodoCounter/';
import { Header } from '../components/header/';
import { TodoSearch } from '../components/TodoSearch/';
import { TodoList } from '../components/TodoList/';
import { TodoItem } from '../components/TodoItem/';
import { CreateTodoButton } from '../components/CreateTodoButton/';
import { Illustrations } from '../components/illustrations/illustrations.js';

import './normalize.css';
import './style.css';

function AppUI({
  countsTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  CompletedTodo,
  DelatedTodo,
}) {
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

export { AppUI };
