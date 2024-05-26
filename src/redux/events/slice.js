import { createSlice } from '@reduxjs/toolkit';
import { mockData } from './mockData';
import { fetchPhotos } from './operations';
import { handlePhotosFulfilled } from './actions';

const initialState = {
  events: mockData,
  currentEvent: {
    title: '',
    description: '',
    location: '',
    date: null,
    photos: {},
  },
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCurrentEvent(state, action) {
      state.currentEvent = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, handlePhotosFulfilled);
  },
});

export const { setCurrentEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
