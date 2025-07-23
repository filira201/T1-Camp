import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/themeSlice";
import { taskApi } from "@/api";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
