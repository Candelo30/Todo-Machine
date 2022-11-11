import React from 'react';
import { TodoContext } from '../components/TodoContext/';
import { TodoCounter } from '../components/TodoCounter/';
import { Header } from '../components/header/';
import { TodoSearch } from '../components/TodoSearch/';
import { TodoList } from '../components/TodoList/';
import { TodoItem } from '../components/TodoItem/';
import { CreateTodoButton } from '../components/CreateTodoButton/';
import { Illustrations } from '../components/illustrations/illustrations.js';
import { Modal } from '../Portal/';
import { TodoForm } from "../components/TodoForm/";

import './normalize.css';
import './style.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    CompletedTodo,
    DelatedTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Header />
      <div className="main-box">
        <div className="wrapper">
          <Illustrations />
        </div>
        <div className="main">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {error && (
              <p className="loading">
                Hubo un error al cargar la aplicación web
              </p>
            )}
            {loading && (
              <div className="loading">
                <div class="loader"></div>
                <p className="loader-text">
                  Estamos cargando todo, espera un momento ¡por favor!
                </p>
              </div>
            )}

            {!loading && !searchedTodos.length && <p>¡Crea tu primer tarea!</p>}
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
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
