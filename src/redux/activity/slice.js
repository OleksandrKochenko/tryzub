import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  currentEvent: '',

  // could be added other user preferences: light/dark mode, favorites, etc.
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setCurrentEvent(state, action) {
      state.currentEvent = action.payload;
    },
  },
});

export const { setCurrentEvent } = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
