import { configureStore } from '@reduxjs/toolkit';
import darkTheme from '../slices/dark_theme';

const store = configureStore({
  reducer: {
    darkTheme,
  },
});

store.subscribe(() => {
  if (store.getState().darkTheme) {
    localStorage.setItem('theme', 'dark');
    return;
  }

  localStorage.setItem('theme', 'light');
});

export default store;
