// utils/videoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YOUTUBE_VIDEOS_API } from './config';

const initialState = {
  videoInfo: [],
};

export const fetchVideoInfo = createAsyncThunk('video/fetchVideoInfo', async () => {
  const response = await fetch(YOUTUBE_VIDEOS_API);
  const data = await response.json();
  return data.items;
});

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideoInfo.fulfilled, (state, action) => {
      state.videoInfo = action.payload;
    });
  },
});

export const { setVideoInfo } = videoSlice.actions;
export default videoSlice.reducer;
