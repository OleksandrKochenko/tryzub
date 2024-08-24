import { createSlice } from '@reduxjs/toolkit';
import { mockData } from './mockData';
import { fetchPhotos } from './operations';
import {
  handleEventByIdFulfilled,
  handleEventsFulfilled,
  handlePending,
  handlePhotosFulfilled,
  handleReject,
} from './actions';
import { fetchEventById, fetchEvents } from './operations_';

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
  currentEvent_: null,
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
    setCurrentEvent_(state, action) {
      state.currentEvent_ = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.fulfilled, handlePhotosFulfilled)
      .addCase(fetchEvents.pending, handlePending)
      .addCase(fetchEvents.fulfilled, handleEventsFulfilled)
      .addCase(fetchEvents.rejected, handleReject)
      .addCase(fetchEventById.pending, handlePending)
      .addCase(fetchEventById.fulfilled, handleEventByIdFulfilled)
      .addCase(fetchEventById.rejected, handleReject);
  },
});

export const { setCurrentEvent, setCurrentEvent_ } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
