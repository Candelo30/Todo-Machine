import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue, color } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const AppStyle = {
    boxShadow: `0px 2px 10px ${color}`,
    border: `3px solid ${color}`,
  };

  return (
    <input
      style={AppStyle}
      className="TodoSearch"
      placeholder="Buscar tareas"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };
