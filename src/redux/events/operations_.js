import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEvents = createAsyncThunk(
  'api/events',
  async (query, thunkApi) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/events?${query}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
