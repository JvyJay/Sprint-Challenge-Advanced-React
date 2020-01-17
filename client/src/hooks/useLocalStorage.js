import { useState } from 'react';

export const useLocalStorage = (key, initValue) => {
  const [stored, setStored] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initValue));
      return initValue;
    }
  });

  const setValue = value => {
    setStored(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [stored, setValue];
};
