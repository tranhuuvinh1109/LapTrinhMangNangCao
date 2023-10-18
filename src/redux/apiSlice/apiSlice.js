import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = apiSlice.actions;
export default apiSlice.reducer;
