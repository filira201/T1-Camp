import { type Middleware } from '@reduxjs/toolkit';

import { toggleTheme, setTheme } from '../reducers/themeSlice';

const KEY = 'darkModeKey';

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Сохраняем в localStorage только при изменении темы
  if (toggleTheme.match(action) || setTheme.match(action)) {
    const state = store.getState();
    try {
      localStorage.setItem(KEY, JSON.stringify(state.theme.darkMode));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }
  
  return result;
};
