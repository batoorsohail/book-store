import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },

  reducers: {
    checkStatus: (state) => state.categories.push('Under construction'),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
