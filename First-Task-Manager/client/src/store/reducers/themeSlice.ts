import { createSlice } from "@reduxjs/toolkit";

import type { ThemeState } from "../../lib";

const KEY = "darkModeKey";

const initialState: ThemeState = {
  darkMode: JSON.parse(localStorage.getItem(KEY) ?? "false"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem(KEY, JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
