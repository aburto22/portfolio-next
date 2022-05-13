import { configureStore } from '@reduxjs/toolkit';
import darkTheme from '../slices/dark_theme';

const store = configureStore({
  reducer: {
    darkTheme,
  },
});

export default store;
