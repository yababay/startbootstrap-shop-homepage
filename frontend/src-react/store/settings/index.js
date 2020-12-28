import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    shopName: "Happy Shop",
  },
  reducers: {
    increment: state => {
      state.shopName += '!';
    },
  }
});

export const { increment } = settingsSlice.actions;

export const selectSettings = state => state.settings;

export default settingsSlice.reducer;
