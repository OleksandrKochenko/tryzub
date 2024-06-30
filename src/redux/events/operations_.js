import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tryzub-back.vercel.app/events';
export const fetchEvents = createAsyncThunk(
  'api/events',
  async (query, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}?${query}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchEventById = createAsyncThunk(
  'api/currentEvent',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
