import { createSlice } from '@reduxjs/toolkit';

import type { ThemeState } from '../../lib';

const KEY = 'darkModeKey';

const getInitialTheme = (): boolean => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? 'false');
  } catch {
    return false;
  }
};

const initialState: ThemeState = {
  darkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
