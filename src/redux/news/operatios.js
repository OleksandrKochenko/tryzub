import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://tryzub-back.vercel.app/events';
const BASE_URL = 'http://localhost:4000/events';
export const fetchNews = createAsyncThunk('api/news', async (_, thunkApi) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/news`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
