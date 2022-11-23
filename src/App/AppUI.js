import React from 'react';
import { TodoContext } from '../components/TodoContext/';
import { TodoCounter } from '../components/TodoCounter/';
import { Header } from '../components/header/';
import { TodoSearch } from '../components/TodoSearch/';
import { TodoList } from '../components/TodoList/';
import { TodoItem } from '../components/TodoItem/';
import { CreateTodoButton } from '../components/CreateTodoButton/';
import { Tick } from '../components/timeShow/';
import { Illustrations } from '../components/illustrations/illustrations.js';
import { Modal } from '../Portal/';
import { TodoForm } from '../components/TodoForm/';

import './normalize.css';
import './style.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    CompletedTodo,
    UpdateaddTodo,
    DelatedTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };
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
                <div className="loader"></div>
                <p className="loader-text">
                  Estamos cargando todo, espera un momento ¡por favor!
                </p>
              </div>
            )}

            {!loading && !searchedTodos.length && (
              <p className="create">
                ¡Crea tu primer tarea! presionando el icono{' '}
                <span onClick={onClickButton} className="listButton">
                  +
                </span>
              </p>
            )}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                UpdateaddTodo={() => UpdateaddTodo(todo.text)}
                onComplete={() => CompletedTodo(todo.text)}
                onDelete={() => DelatedTodo(todo.text)}
              />
            ))}
          </TodoList>
          <Tick />
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
