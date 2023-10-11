import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState: {
    project: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProject, setLoading, setError } = projectSlice.actions;
export default projectSlice.reducer;
