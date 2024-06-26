import { createSlice } from '@reduxjs/toolkit';
import { mockData } from './mockData';
import { fetchPhotos } from './operations';
import { handleEventsFulfilled, handlePhotosFulfilled } from './actions';
import { fetchEvents } from './operations_';

const initialState = {
  events: mockData,
  events_: [],
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
    builder
      .addCase(fetchPhotos.fulfilled, handlePhotosFulfilled)
      .addCase(fetchEvents.fulfilled, handleEventsFulfilled);
  },
});

export const { setCurrentEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
