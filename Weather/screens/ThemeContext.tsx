import { createContext } from 'react';

export const themes = {
  light: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  dark: {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
  },
};

export const ThemeContext = createContext(themes.light);