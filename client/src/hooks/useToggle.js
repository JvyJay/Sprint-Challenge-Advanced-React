import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useToggle = initValue => {
  const [value, setValue] = useLocalStorage('darkMode', initValue);

  useEffect(() => {
    if (value) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  });

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle, setValue];
};
