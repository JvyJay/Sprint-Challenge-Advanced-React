import React from 'react';
import { useToggle } from '../hooks/useToggle';

const Dark = () => {
  const [darkMode, toggle] = useToggle(false);
  const toggleMode = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <nav className='navbar'>
      <h1>Athletes</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Dark;
