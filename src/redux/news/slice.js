import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleReject, handleNewsFulfilled } from './actions';
import { fetchNews } from './operatios';

const initialState = {
  news: [],
  currentNews: null,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, handlePending)
      .addCase(fetchNews.fulfilled, handleNewsFulfilled)
      .addCase(fetchNews.rejected, handleReject);
  },
});

export const newsReducer = newsSlice.reducer;
