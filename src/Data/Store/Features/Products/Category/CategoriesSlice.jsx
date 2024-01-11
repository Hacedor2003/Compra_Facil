import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
});

const categoriesSlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCategories = (state) => state.category.categories;
export const selectCategoryByName = (state, nameCategory) => state.category.categories.find((category) => category === nameCategory);
export const selectCategoryStatus = (state) => state.category.status;
export const selectCategoryError = (state) => state.category.error;

export const categorySlice = categoriesSlice.reducer;
