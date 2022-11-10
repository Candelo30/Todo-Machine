import React, { useState, useEffect } from 'react';
// import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbClick } from 'react-icons/tb';
import './header.css';

function Header() {
  const [checked, setChecked] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('class', localStorage.getItem('theme'));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem('theme', 'dark');
      setChecked(true);
    } else {
      localStorage.setItem('theme', 'light');
      setChecked(false);
    }
  };

  return (
    <>
      <header>
        <span className="hader-logo">Todo Machine</span>
        <nav>
          <button
            className="toggle-mode"
            onClick={toggleThemeChange}
            defaultChecked={checked}
          >
            Cambia de tema
            <TbClick />
          </button>
        </nav>
      </header>
    </>
  );
}

export { Header };
