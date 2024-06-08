import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../theme/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav className={`navbar ${theme}`}>
      <button onClick={() => dispatch(toggleTheme())}>
         {theme === 'light' ? 'Dark' : 'Light'} Интересно что если нажать на кнопку ?
      </button>
    </nav>
  );
};

export default Navbar;
