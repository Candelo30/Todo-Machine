import React, { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './header.css';
import { TodoContext } from '../TodoContext';

function Header() {

  const { color } =
    React.useContext(TodoContext);


    const Appstyle = {
      backgroundColor: color,
    }
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
      <header style={Appstyle}>
        <span className="hader-logo">Todo Machine</span>
        <nav>
          {checked ? (
            <BsFillSunFill
              className="sun mode" 
              onClick={toggleThemeChange}
              defaultChecked={checked}
            />
          ) : (
            <BsFillMoonFill
              className="moon mode"
              onClick={toggleThemeChange}
              defaultChecked={checked}
            />
          )}
        </nav>
      </header>
    </>
  );
}

export { Header };
