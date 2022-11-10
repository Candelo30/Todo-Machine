import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvaider } from '../TodoContext/';

function App() {
  return (
    <TodoProvaider>
      <AppUI />
    </TodoProvaider>
  );
}

export default App;
