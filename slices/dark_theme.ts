import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => !state,
    setTheme: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { toggleTheme, setTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
