import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33271792-fb75e177a9af11daf6327433e';
const IMAGES_PER_PAGE = 9;

export const fetchPhotos = createAsyncThunk(
  'api/photos',
  async (query, thunkAPI) => {
    const config = {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: IMAGES_PER_PAGE,
        q: query,
        page: 1,
      },
    };
    try {
      const { data } = await axios.get(BASE_URL, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
