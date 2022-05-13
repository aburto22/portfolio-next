import { configureStore } from '@reduxjs/toolkit';
import darkTheme from '../slices/dark_theme';

const getTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const store = configureStore({
  reducer: {
    darkTheme,
  },
  preloadedState: {
    darkTheme: getTheme(),
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
