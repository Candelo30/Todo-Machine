import React from 'react';
import { BsPalette } from 'react-icons/bs';
import './Colorpale.css';

function Createcolor(props) {
  const onClickButton = () => {
    props.setOpenModalcolor((prevState) => !prevState);
  };

  return (
    <button
      title="Cambia el color"
      className="Createcolor"
      onClick={() => onClickButton()}
    >
      <BsPalette/>
    </button>
  );
}

export { Createcolor };
