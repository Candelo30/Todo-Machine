import React from 'react';
import './buttonInfo.css';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { TodoContext } from '../TodoContext';

function OpenInfo(props) {
  const { setOpenModalcolor, setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    props.setOpenModalinfo((prevState) => !prevState);
    setOpenModalcolor(false);
    setOpenModal(false);
  };


  return (
    <button
      title="Añadir tarea"
      className="OpenbuttonInfo"
      onClick={() => onClickButton()}
    >
      <BsFillInfoCircleFill />
    </button>
  );
}

export { OpenInfo };
