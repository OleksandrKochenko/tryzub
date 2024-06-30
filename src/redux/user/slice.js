import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
  // could be added other user preferences: light/dark mode, favorites, etc.
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { switchLang } = userSlice.actions;
export const userReducer = userSlice.reducer;
