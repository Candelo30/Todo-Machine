import React from 'react';

function useLocalstorage(itemName, itemvalue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [todos, setCountTodos] = React.useState(itemvalue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localstorageTodos = localStorage.getItem(itemName);
        let parseTodo;

        if (!localstorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(itemvalue));
          parseTodo = itemvalue;
        } else {
          parseTodo = JSON.parse(localstorageTodos);
        }
        setCountTodos(parseTodo);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 10000);
  }, []);

  const saveTodos = (NewTodos) => {
    try {
      const stringifyTodos = JSON.stringify(NewTodos);
      localStorage.setItem(itemName, stringifyTodos);
      setCountTodos(NewTodos);
    } catch (error) {
      setError(error);
    }
  };


  return { todos, saveTodos, loading, error};
}

export { useLocalstorage };
