import React from 'react';
import './buttonInfo.css';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { TodoContext } from '../TodoContext';

function OpenInfo(props) {
  const { color, setOpenModalcolor, setOpenModal } =
    React.useContext(TodoContext);
  const onClickButton = () => {
    props.setOpenModalinfo((prevState) => !prevState);
    setOpenModalcolor(false);
    setOpenModal(false);
  };

  const Appstyle = {
    backgroundColor: color,
    boxShadow: `0px 5px  25px ${color}`,
  };

  return (
    <button
      style={Appstyle}
      title="Añadir tarea"
      className="OpenbuttonInfo"
      onClick={() => onClickButton()}
    >
      <BsFillInfoCircleFill />
    </button>
  );
}

export { OpenInfo };
