import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMainEvents = createAsyncThunk(
  'api/mainEvents',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'http://localhost:4000/events?emphasize'
      );
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
