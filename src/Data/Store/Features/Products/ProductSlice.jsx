import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductos = createAsyncThunk('products/fetchProductos', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products');
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
});

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProductos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(fetchProductos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) => state.products.products.find((product) => product.id === productId);
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;
export const selectProductByName = (state, nameProduct) => state.products.products.filter((product) => product.title.includes(nameProduct));
export const selectProductByCategory = (state, category) => state.products.products.filter((product) => product.category.includes(category));
export const selectProductByPrice = (state, price) => state.products.products.filter((product) => product.price < price);
export const selectProductByRate = (state, rate) => state.products.products.filter((product) => product.rating.rate < rate);
export const selectProductByCount = (state, count) => state.products.products.filter((product) => product.rating.count < count);

export const productSlicee = productSlice.reducer;
