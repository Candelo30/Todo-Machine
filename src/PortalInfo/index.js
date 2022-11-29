import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';

function Modalinfo() {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div>
        <h1>Todo Machine</h1>
        <p>
          📚 Una lista de pendientes sencilla, tiene las funciones normales,
          como agregar, eliminara, y completar tus tareas, también te damos la
          opción de poder filtras tus pendientes. Así que te invito a probar
          esta app.
        </p>
      </div>
    </div>,
    document.getElementById('modalinfo')
  );
}

export { Modalinfo };
