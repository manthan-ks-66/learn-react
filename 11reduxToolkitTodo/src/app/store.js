// configureStore: The standard method for creating a Redux store. It uses the low-level Redux core createStore method
// internally, but wraps that to provide good defaults to the store setup for a better development experience.

// configureStore accepts a single configuration object parameter (redux documentation)
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
