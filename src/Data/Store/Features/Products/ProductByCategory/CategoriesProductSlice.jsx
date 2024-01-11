import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoriesTheProductos = createAsyncThunk('products/fetchCategoriesTheProductos', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/category/categoria');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});

const productCategoriesSlice = createSlice({
  name: 'categoryProduct',
  initialState: {
    productByCategory: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesTheProductos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesTheProductos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productByCategory = action.payload;
      })
      .addCase(fetchCategoriesTheProductos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllProductByCategory = (state) => state.categoryProduct.productByCategory;
export const selectProducyByCategoryByName = (state, nameProduct) => state.categoryProduct.productByCategory.find((product) => product.title === nameProduct); 
export const selectProductByCategoryStatus = (state) => state.categoryProduct.status;
export const selectCategoryError = (state) => state.categoryProduct.error;

export const categorieProductSlice = productCategoriesSlice.reducer;
