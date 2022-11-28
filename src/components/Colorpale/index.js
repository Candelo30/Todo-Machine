import React from 'react';
import { BsPalette } from 'react-icons/bs';
import './Colorpale.css';
import { TodoContext } from '../TodoContext';

function Createcolor(props) {
  const { setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    props.setOpenModalcolor((prevState) => !prevState);
    setOpenModal(false)
  };

  return (
    <button
      title="Cambia el color"
      className="Createcolor"
      onClick={() => onClickButton()}
    >
      <BsPalette />
    </button>
  );
}

export { Createcolor };
