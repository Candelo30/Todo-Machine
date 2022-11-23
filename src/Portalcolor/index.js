import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import './portalcolor.css';

function Modalcolor({ children }) {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modalcolor')
  );
}

export { Modalcolor };
